import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/portfolio';

export const StatsRow = () => {
  return (
    <section className="bg-primary px-5 sm:px-8 md:px-12 py-10 sm:py-14 border-b border-frost/10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="text-center lg:border-l lg:border-frost/10 lg:first:border-l-0 lg:px-4 flex flex-col items-center justify-center"
          >
            <p
              className="hero-heading font-black leading-none tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}
            >
              {stat.value}
            </p>
            <p className="text-frost font-semibold uppercase tracking-wider text-[11px] sm:text-xs mt-2.5">
              {stat.label}
            </p>
            <p className="text-secondary font-light text-[10px] sm:text-[11px] mt-0.5">
              {stat.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsRow;
