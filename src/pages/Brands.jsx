import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Zap, Shield, Globe, Landmark, Target } from 'lucide-react';

const brands = [
  {
    name: 'Porsche',
    model: '911 GT3',
    description: 'The definitive sports car. Rear-engine layout, iconic silhouette, and uncompromising track performance designed for the purist.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Ferrari',
    model: 'LaFerrari',
    description: "The ultimate expression of Ferrari's racing heritage. Raw, visceral, and powered by a legendary hybrid V12.",
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Lamborghini',
    model: 'Aventador',
    description: 'The poster car of a generation. Wedge-shaped, audacious, and featuring the iconic scissor doors and screaming V12.',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Aston Martin',
    model: 'Vantage',
    description: 'The essence of British grand touring. Timeless design paired with a refined, incredibly powerful biturbo V8.',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'McLaren',
    model: 'P1',
    description: 'The gold standard of hypercars. Central driving position inspiration, extreme aerodynamics, and twin-turbo performance.',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Mercedes-AMG',
    model: 'GT Black Series',
    description: "Affalterbach's masterpiece. A front-mid engine track weapon with aggressive aerodynamics and a flat-plane crank V8.",
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop'
  }
];

const perks = [
  { icon: Landmark, title: 'Concierge Service', desc: '24/7 priority support and personalized assistance.' },
  { icon: Target, title: 'Track Days', desc: 'Exclusive invitations to private track events.' },
  { icon: Award, title: 'VIP Events', desc: 'First access to unveilings and luxury rallies.' },
  { icon: Zap, title: 'Flexible Financing', desc: 'Tailored purchasing and leasing options.' },
  { icon: Shield, title: 'Driving Clinics', desc: 'Advanced performance driving instruction.' },
  { icon: Globe, title: 'Global Delivery', desc: 'Secure worldwide delivery to any location.' }
];

const Brands = () => {
  return (
    <div className="bg-stone-950 min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-accent text-sm tracking-[0.4em] mb-4 inline-block"
          >
            OUR PARTNERS
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-display text-white mb-8"
          >
            ICONIC <span className="text-chrome">BRANDS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 font-outfit text-xl max-w-2xl mx-auto"
          >
            Representing the world's most prestigious automotive marks. Where legacy meets innovation.
          </motion.p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card flex flex-col items-center group rounded-5xl overflow-hidden p-8"
            >
              <div className="w-full h-80 rounded-4xl overflow-hidden mb-8 relative">
                <img 
                  src={brand.image} 
                  alt={brand.model} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-stone-950/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                   <h3 className="text-3xl font-display text-white mb-2">{brand.name}</h3>
                   <div className="text-accent font-outfit font-bold tracking-[0.2em] uppercase">{brand.model}</div>
                </div>
              </div>
              
              <div className="text-center max-w-md px-4">
                <p className="text-stone-400 font-plus-jakarta leading-relaxed mb-8">
                  {brand.description}
                </p>
                <button className="flex items-center gap-2 font-display text-xs text-stone-100 hover:text-accent transition-colors mx-auto group/btn">
                  EXPLORE BRAND <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Owner Perks */}
        <div className="mb-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-6 uppercase tracking-wider">
              OWNERSHIP <span className="text-accent">PRIVILEGES</span>
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 flex items-start gap-6 group hover:border-accent/40 transition-all rounded-3xl"
              >
                <div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-500 shadow-xl border border-stone-800">
                  <perk.icon className="w-7 h-7 text-accent group-hover:text-stone-950 transition-colors duration-500" />
                </div>
                <div>
                  <h4 className="font-outfit text-white text-lg font-bold mb-2 group-hover:text-accent transition-colors uppercase tracking-wide">
                    {perk.title}
                  </h4>
                  <p className="text-stone-400 text-sm leading-relaxed font-plus-jakarta">
                    {perk.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/3 -right-64 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[180px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/3 -left-64 w-[600px] h-[600px] bg-stone-800/10 rounded-full blur-[180px] -z-10 pointer-events-none"></div>
    </div>
  );
};

export default Brands;
