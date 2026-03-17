import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    // GSAP ScrollTrigger for content animation on scroll
    const ctx = gsap.context(() => {
      gsap.to(".hero-translate", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: -150,
        opacity: 0,
        scale: 0.9,
      });

      // Animated background blobs
      gsap.to(".blob-1", {
        x: '20vw',
        y: '10vh',
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to(".blob-2", {
        x: '-15vw',
        y: '-20vh',
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950"
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y }}
          className="relative w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Car"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-stone-950/20 via-transparent to-stone-950"></div>
        </motion.div>
      </div>

      {/* Liquid Glass Blobs */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="blob-1 absolute top-1/4 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px]"></div>
        <div className="blob-2 absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-stone-800/20 rounded-full blur-[150px]"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-translate relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="font-display text-accent text-xs md:text-sm tracking-[0.5em] inline-block mb-6 uppercase">
            ESTABLISHED 1998
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-white leading-[0.85] mb-10">
            <span className="block text-chrome">SILENT</span>
            <span className="block">POWER</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-outfit text-lg md:text-xl text-stone-400 max-w-2xl mb-14 leading-relaxed"
        >
          Discover a new dimension of luxury. Where every curve is a statement of intent and every mile is a masterpiece of engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-8"
        >
          <Link to="/inventory" className="btn-elite group">
            <span className="flex items-center gap-3">
              View Inventory <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          
          <button className="flex items-center gap-4 font-outfit font-bold text-stone-100 hover:text-accent transition-all group">
            <div className="w-14 h-14 rounded-full border border-stone-800 flex items-center justify-center group-hover:border-accent group-hover:shadow-[0_0_20px_var(--color-accent-glow)] transition-all bg-stone-900/50 backdrop-blur-sm">
              <Play className="w-5 h-5 fill-current ml-1" />
            </div>
            <span className="tracking-widest uppercase text-xs">Play Premiere</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 cursor-pointer group"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="font-outfit text-[10px] uppercase tracking-[0.5em] text-stone-500 group-hover:text-accent transition-colors">Explorer</span>
        <div className="w-px h-12 bg-linear-to-b from-accent to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
