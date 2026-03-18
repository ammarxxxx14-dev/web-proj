import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Award, Gauge } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Certified Integrity',
    description: 'Every vehicle undergoes a 200-point inspection by factory-trained master technicians.',
  },
  {
    icon: Zap,
    title: 'Pure Performance',
    description: 'Bespoke tuning and performance upgrades tailored to your unique driving profile.',
  },
  {
    icon: Award,
    title: 'Elite Concierge',
    description: 'A dedicated advisor managing every aspect of your automotive lifestyle 24/7.',
  },
  {
    icon: Gauge,
    title: 'Precision Care',
    description: 'State-of-the-art facilities equipped with the latest diagnostic and care technologies.',
  },
];

const Features = () => {
  return (
    <section id="services" className="py-24 bg-(--bg-primary) relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl md:text-5xl lg:text-5xl font-outfit font-bold text-(--text-primary) mb-6 uppercase tracking-wider"
          >
            THE <span className="text-accent">EXTRAORDINARY</span> STANDARD
          </motion.h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-10 group hover:border-accent/40 transition-all duration-500 rounded-4xl"
            >
              <div className="w-16 h-16 bg-(--bg-secondary) rounded-2xl flex items-center justify-center mb-10 group-hover:bg-accent transition-colors duration-500 shadow-xl border border-(--border-color) group-hover:border-accent">
                <feature.icon className="w-8 h-8 text-accent group-hover:text-stone-950 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-outfit font-bold text-(--text-primary) mb-4 group-hover:text-accent transition-colors uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-(--text-secondary) leading-relaxed font-plus-jakarta text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-accent/5 blur-[150px] z-0 pointer-events-none"></div>
    </section>
  );
};

export default Features;
