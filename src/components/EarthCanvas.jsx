import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const EarthCanvas = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isVisible = false;
    let animationFrameId;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(-3.5, 2.2, 5.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Group for earth and its layers
    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    // Procedural Earth Texture
    const createEarthTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');

      // Ocean gradient
      const oceanGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      oceanGrad.addColorStop(0, '#060B12');
      oceanGrad.addColorStop(0.5, '#0B1522');
      oceanGrad.addColorStop(1, '#060B12');
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Lat-Long Grid lines
      ctx.strokeStyle = 'rgba(78, 140, 249, 0.08)';
      ctx.lineWidth = 1;
      for (let lat = 0; lat <= canvas.height; lat += canvas.height / 12) {
        ctx.beginPath();
        ctx.moveTo(0, lat);
        ctx.lineTo(canvas.width, lat);
        ctx.stroke();
      }
      for (let lon = 0; lon <= canvas.width; lon += canvas.width / 24) {
        ctx.beginPath();
        ctx.moveTo(lon, 0);
        ctx.lineTo(lon, canvas.height);
        ctx.stroke();
      }

      // Draw stylized continent landmasses
      ctx.fillStyle = '#1B2636';
      ctx.strokeStyle = 'rgba(215, 226, 234, 0.3)';
      ctx.lineWidth = 1.5;

      const drawLandmass = (pts) => {
        ctx.beginPath();
        pts.forEach(([x, y], idx) => {
          const px = (x / 360) * canvas.width;
          const py = ((90 - y) / 180) * canvas.height;
          if (idx === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      };

      drawLandmass([
        [10, 60], [30, 70], [60, 72], [100, 75], [140, 70], [170, 65],
        [140, 40], [120, 25], [105, 10], [80, 8], [75, 20], [70, 25],
        [77, 28], [80, 22], [85, 20], [80, 12], [72, 8], [60, 25],
        [45, 35], [35, 30], [25, 38], [15, 45], [5, 52]
      ]);

      drawLandmass([
        [-15, 30], [10, 36], [35, 30], [50, 12], [40, -10], [30, -32],
        [18, -35], [10, -15], [0, 5], [-18, 15]
      ]);

      drawLandmass([
        [-165, 65], [-130, 70], [-80, 72], [-60, 50], [-75, 35], [-80, 25],
        [-95, 20], [-105, 22], [-115, 32], [-124, 38], [-125, 50], [-150, 58]
      ]);

      drawLandmass([
        [-80, 10], [-50, -5], [-35, -8], [-40, -22], [-55, -45], [-68, -55],
        [-75, -45], [-72, -20], [-80, 0]
      ]);

      drawLandmass([
        [115, -15], [135, -12], [150, -22], [148, -38], [130, -35], [115, -30]
      ]);

      // City light points
      ctx.fillStyle = '#4E8CF9';
      for (let i = 0; i < 250; i++) {
        const cx = Math.random() * canvas.width;
        const cy = Math.random() * canvas.height;
        ctx.beginPath();
        ctx.arc(cx, cy, Math.random() * 1.5 + 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Greater Noida / Delhi-NCR marker
      const indX = ((77.5 + 180) / 360) * canvas.width;
      const indY = ((90 - 28.5) / 180) * canvas.height;
      ctx.fillStyle = '#B600A8';
      ctx.beginPath();
      ctx.arc(indX, indY, 5, 0, Math.PI * 2);
      ctx.fill();

      // Cupertino, CA marker
      const cupX = ((-122 + 180) / 360) * canvas.width;
      const cupY = ((90 - 37.3) / 180) * canvas.height;
      ctx.fillStyle = '#4E8CF9';
      ctx.beginPath();
      ctx.arc(cupX, cupY, 5, 0, Math.PI * 2);
      ctx.fill();

      return new THREE.CanvasTexture(canvas);
    };

    const earthTexture = createEarthTexture();

    // Sphere Mesh
    const sphereGeometry = new THREE.SphereGeometry(2, 48, 48);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.7,
      metalness: 0.15,
    });
    const earthMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    earthGroup.add(earthMesh);

    // Atmospheric Glow
    const atmosphereGeometry = new THREE.SphereGeometry(2.08, 48, 48);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.2);
          gl_FragColor = vec4(0.3, 0.55, 0.98, 1.0) * intensity * 0.9;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    earthGroup.add(atmosphereMesh);

    // Orbital Ring
    const ringGeo = new THREE.RingGeometry(2.6, 2.64, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x4E8CF9,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.3;
    ringMesh.rotation.y = Math.PI / 6;
    earthGroup.add(ringMesh);

    // Satellite
    const satGeo = new THREE.SphereGeometry(0.06, 12, 12);
    const satMat = new THREE.MeshBasicMaterial({ color: 0xD7E2EA });
    const satellite = new THREE.Mesh(satGeo, satMat);
    earthGroup.add(satellite);

    // Starfield Background
    const starsCount = 400;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starsCount * 3);
    const starColors = new Float32Array(starsCount * 3);

    const palette = [
      new THREE.Color(0xD7E2EA),
      new THREE.Color(0x4E8CF9),
      new THREE.Color(0xB600A8),
      new THREE.Color(0xFFFFFF),
    ];

    for (let i = 0; i < starsCount; i++) {
      const r = 18 + Math.random() * 35;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      starColors[i * 3] = color.r;
      starColors[i * 3 + 1] = color.g;
      starColors[i * 3 + 2] = color.b;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xd7e2ea, 2.2);
    sunLight.position.set(-5, 4, 4);
    scene.add(sunLight);

    const purpleBackLight = new THREE.DirectionalLight(0xb600a8, 1.8);
    purpleBackLight.position.set(5, -3, -4);
    scene.add(purpleBackLight);

    // Interactive Dragging
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let rotVelocityX = 0;
    let rotVelocityY = 0;
    let autoRotate = true;

    const onPointerDown = (e) => {
      isDragging = true;
      autoRotate = false;
      prevMouseX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      prevMouseY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    };

    const onPointerMove = (e) => {
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

      if (isDragging) {
        const deltaX = clientX - prevMouseX;
        const deltaY = clientY - prevMouseY;

        rotVelocityY = deltaX * 0.005;
        rotVelocityX = deltaY * 0.005;

        earthGroup.rotation.y += rotVelocityY;
        earthGroup.rotation.x += rotVelocityX;

        prevMouseX = clientX;
        prevMouseY = clientY;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
      setTimeout(() => {
        autoRotate = true;
      }, 3000);
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onPointerDown);
    domElement.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchend', onPointerUp);

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // IntersectionObserver to ONLY render when in viewport
    let satAngle = 0;
    const animate = () => {
      if (!isVisible) return;
      animationFrameId = requestAnimationFrame(animate);

      if (autoRotate && !isDragging) {
        earthGroup.rotation.y += 0.0035;
      } else if (!isDragging) {
        earthGroup.rotation.y += rotVelocityY;
        earthGroup.rotation.x += rotVelocityX;
        rotVelocityY *= 0.95;
        rotVelocityX *= 0.95;
      }

      satAngle += 0.02;
      satellite.position.x = Math.cos(satAngle) * 2.62 * Math.cos(Math.PI / 6);
      satellite.position.z = Math.sin(satAngle) * 2.62;
      satellite.position.y = Math.cos(satAngle) * 2.62 * Math.sin(Math.PI / 6);

      starField.rotation.y += 0.0003;
      renderer.render(scene, camera);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animationFrameId);
          animate();
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener('mousedown', onPointerDown);
      domElement.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, []);

  return (
    <div
      className="relative w-full h-full min-h-[360px] md:min-h-[520px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={containerRef} className="w-full h-full" />

      {/* Floating Coordinates & Status Overlay */}
      <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] uppercase tracking-wider text-frost/60">
        <div className="flex items-center gap-2 bg-black-100/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-frost/10">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span className="text-frost font-medium">Drag to rotate 3D Planet</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 bg-black-100/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-frost/10 text-frost/70">
          <span>28.47° N, 77.50° E (IN)</span>
          <span>·</span>
          <span>37.33° N, 122.00° W (Cupertino)</span>
        </div>
      </div>
    </div>
  );
};

export default EarthCanvas;
