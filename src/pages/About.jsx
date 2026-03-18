import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Trophy, Globe, Zap, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Uncompromising Integrity",
      description: "Transparency is the cornerstone of our operations. Every vehicle in our collection undergoes a rigorous multi-point certification process."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Pursuit of Excellence",
      description: "We don't just sell cars; we curate masterpieces. Our selection represents the absolute pinnacle of automotive engineering and design."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "With a network spanning across continents, we source the rarest specimens and deliver them to your doorstep, anywhere in the world."
    }
  ];

  const stats = [
    { label: "Vehicles Delivered", value: "2,500+" },
    { label: "Global Locations", value: "12" },
    { label: "Years of Heritage", value: "25" },
    { label: "Client Satisfaction", value: "99.9%" }
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-accent font-display text-sm tracking-[0.4em] uppercase mb-6 block"
          >
            Our Heritage
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display text-(--text-primary) mb-10 leading-tight"
          >
            DEFINING THE <span className="text-chrome">PINNACLE</span> OF AUTOMOTIVE LUXURY.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-outfit text-xl text-(--text-secondary) leading-relaxed max-w-2xl"
          >
            Founded on the principles of speed, style, and sophistication, APEX AUTO has evolved from a boutique showroom into a global destination for the world's most discerning automotive collectors.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-32 overflow-hidden border-y border-(--border-color) bg-(--bg-primary)/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
                <img 
                  src="https://images.unsplash.com/photo-1562141989-c5c79ac8f576?q=80&w=2070&auto=format&fit=crop" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-10"></div>
            </motion.div>

            <div>
              <h2 className="text-4xl md:text-5xl font-display text-(--text-primary) mb-8">Beyond the Machine</h2>
              <div className="space-y-6 text-(--text-secondary) font-outfit text-lg leading-relaxed">
                <p>
                  At APEX AUTO, we believe a car is more than a means of transportation. It is an extension of one's identity, a triumph of engineering, and a working piece of art.
                </p>
                <p>
                  Our journey began two decades ago with a simple mission: to bridge the gap between legendary heritage and futuristic performance. Today, we stand as a testament to that vision, serving a global community that values rarity and craftsmanship above all else.
                </p>
                <div className="flex items-center gap-4 text-accent font-display text-sm tracking-widest uppercase mt-10">
                  <Star className="w-5 h-5 fill-accent" />
                  Certified Excellence Since 2001
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="container mx-auto px-6 py-40">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-display text-white mb-6 uppercase tracking-tighter">Core Values</h2>
          <p className="text-stone-500 font-outfit text-xl max-w-2xl mx-auto">The principles that drive us further.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-12 group hover:border-accent/30 transition-all duration-500"
            >
              <div className="text-accent mb-8 group-hover:scale-110 transition-transform duration-500">{v.icon}</div>
              <h3 className="text-2xl font-display text-white mb-6 uppercase tracking-wide">{v.title}</h3>
              <p className="text-stone-400 font-outfit leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-20 border-t border-stone-900">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-4xl md:text-6xl font-display text-white mb-2">{s.value}</div>
              <div className="text-stone-500 font-display text-[10px] tracking-[0.3em] uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 mt-40">
        <div className="glass-card p-20 rounded-[4rem] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
          <h2 className="text-4xl md:text-6xl font-display text-white mb-10 leading-tight">PART OF THE <span className="text-chrome">LEGACY</span>?</h2>
          <Link to="/contact" className="btn-elite inline-flex items-center gap-4 px-12 py-5 text-xl">
            Start Your Journey <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
