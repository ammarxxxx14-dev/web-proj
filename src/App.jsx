import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Stats from './components/Stats';
import Features from './components/Features';
import Footer from './components/Footer';
import Inventory from './pages/Inventory';
import Brands from './pages/Brands';
import Contact from './pages/Contact';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <Stats />
    <Features />
    {/* Luxury CTA Section */}
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card p-12 md:p-24 rounded-5xl text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-linear-to-br from-accent/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-10 leading-tight"
          >
            READY TO <span className="text-chrome">TRANSCEND</span>?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-outfit text-xl text-stone-400 max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Your journey into the extraordinary begins with a single conversation. 
            Schedule your private viewing or explore our current collection.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <Link to="/contact" className="btn-elite px-12 py-5 text-xl">
              <span className="flex items-center gap-4">
                Request Viewing <ArrowRight className="w-6 h-6" />
              </span>
            </Link>
            <Link to="/inventory" className="btn-outline-elite px-12 py-5 text-xl">
              Explore Fleet
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[180px] z-0 pointer-events-none"></div>
    </section>
  </>
);

function App() {
  const location = useLocation();

  return (
    <main className="relative min-h-screen bg-stone-950">
      <ScrollToTop />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Footer />

      {/* Global Background Grid */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none -z-10"></div>
    </main>
  );
}

export default App;
