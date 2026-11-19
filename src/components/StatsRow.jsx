import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/portfolio';

export const StatsRow = () => {
  return (
    <section className="bg-primary px-5 sm:px-8 md:px-12 pt-14 pb-12 sm:pt-20 border-b border-frost/10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="text-center lg:border-l lg:border-frost/10 lg:first:border-l-0 lg:px-4 flex flex-col items-center justify-center"
          >
            <p
              className="hero-heading font-black leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)' }}
            >
              {stat.value}
            </p>
            <p className="text-frost font-semibold uppercase tracking-wider text-[11px] sm:text-sm mt-3">
              {stat.label}
            </p>
            <p className="text-secondary font-light text-[10px] sm:text-xs mt-1">
              {stat.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsRow;
