import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Vehicles Sold', value: '4,500+' },
  { label: 'Elite Partners', value: '120' },
  { label: 'World Records', value: '12' },
  { label: 'Years of Mastery', value: '25' },
];

const Stats = () => {
  return (
    <section className="py-24 bg-(--bg-secondary)/50 border-y border-(--border-color) backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-(--text-primary) mb-4 group-hover:text-accent transition-colors duration-500 tracking-tighter">
                {stat.value}
              </div>
              <div className="font-display text-[10px] md:text-xs text-(--text-muted) uppercase tracking-[0.4em] group-hover:text-(--text-secondary) transition-colors duration-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
