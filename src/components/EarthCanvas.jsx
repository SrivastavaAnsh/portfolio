import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export const EarthCanvas = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isVisible = false;
    let animationFrameId;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 200);
    camera.position.set(-3.8, 2.8, 5.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 2. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.6;
    controls.enableZoom = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = Math.PI / 2;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.target.set(0, 0, 0);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.5);
    sunLight.position.set(-5, 4, 5);
    scene.add(sunLight);

    const purpleLight = new THREE.DirectionalLight(0xb600a8, 1.8);
    purpleLight.position.set(5, -2, -4);
    scene.add(purpleLight);

    const blueRimLight = new THREE.PointLight(0x4e8cf9, 2.0, 20);
    blueRimLight.position.set(-2, 3, 4);
    scene.add(blueRimLight);

    // 4. Load exact 3D GLTF Planet Model with Swirling Clouds
    let planetMesh = null;
    let mixer = null;
    const clock = new THREE.Clock();

    const loader = new GLTFLoader();
    loader.load(
      '/planet/scene.gltf',
      (gltf) => {
        planetMesh = gltf.scene;
        planetMesh.scale.set(2.3, 2.3, 2.3);
        planetMesh.position.set(0, 0, 0);
        scene.add(planetMesh);

        // Play the embedded clouds swirling animation
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(gltf.scene);
          gltf.animations.forEach((clip) => {
            const action = mixer.clipAction(clip);
            action.play();
          });
        }
      },
      undefined,
      (error) => {
        console.warn('Failed to load planet GLTF model:', error);
      }
    );

    // 5. Responsive Resize with ResizeObserver & Window Resize
    const updateSize = (newW, newH) => {
      if (!newW || !newH) return;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          updateSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    const handleResize = () => {
      if (!container) return;
      updateSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // 6. Animation Loop (Active only when visible in viewport)
    const animate = () => {
      if (!isVisible) return;
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      if (mixer) {
        mixer.update(delta);
      }

      controls.update();
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
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
    />
  );
};

export default EarthCanvas;
