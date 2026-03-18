import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Search, Sun, Moon, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'Brands', path: '/brands' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-4 glass-nav' : 'py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-display text-white tracking-[0.3em] hover:text-accent transition-colors">
          APEX<span className="text-chrome">AUTO</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-display text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:text-accent ${
                isActive(link.path) ? 'text-accent font-bold' : 'text-stone-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-4 w-px bg-stone-800"></div>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/5 transition-colors text-stone-400 hover:text-accent"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {user ? (
            <div className="flex items-center gap-6">
              <span className="text-[10px] uppercase tracking-widest text-(--text-secondary) font-display hidden xl:block">
                Welcome, {user.email.split('@')[0]}
              </span>
              <button 
                onClick={logout}
                className="btn-outline-elite px-6 py-2 text-[10px] flex items-center gap-2"
              >
                <LogOut className="w-3.5 h-3.5" /> Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-elite px-8 py-2 text-[10px]">
              Join Now
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-6 lg:hidden">
          <button 
            onClick={toggleTheme}
            className="text-white p-2"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 glass-nav overflow-hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-display text-xs tracking-widest uppercase ${
                    isActive(link.path) ? 'text-accent' : 'text-stone-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {user ? (
                <button 
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="btn-outline-elite w-full py-4 text-xs mt-4 flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              ) : (
                <Link 
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-elite w-full py-4 text-xs mt-4"
                >
                  Join Now
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
