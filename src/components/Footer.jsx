import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-950 pt-24 pb-12 border-t border-stone-900/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-display text-white tracking-[0.3em] mb-8 inline-block hover:text-accent transition-colors">
              APEX<span className="text-chrome">AUTO</span>
            </Link>
            <p className="text-stone-500 font-outfit text-sm leading-relaxed mb-8 max-w-xs">
              Defining the future of luxury automotive acquisition. Part of the Elite Automotive Group.
            </p>
            <div className="flex gap-5">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-500 hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300 bg-stone-900/30">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-[10px] text-accent tracking-[0.4em] uppercase mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {['About', 'Inventory', 'Brands', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-stone-400 font-outfit text-sm hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-[10px] text-accent tracking-[0.4em] uppercase mb-8">Resources</h4>
            <ul className="flex flex-col gap-4">
              {['Privacy Policy', 'Terms of Service', 'Financing', 'Consignment'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-stone-400 font-outfit text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-[10px] text-accent tracking-[0.4em] uppercase mb-8">Visit Us</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-stone-400 font-outfit text-sm leading-relaxed">
                  1200 Performance Way<br />
                  Silicon Valley, CA 94025
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-stone-400 font-outfit text-sm">
                  +1 (555) 012-3456
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-stone-400 font-outfit text-sm">
                  concierge@apexauto.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-stone-600 font-outfit text-[11px] uppercase tracking-widest">
            © 2026 APEX AUTO COLLECTIVE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-stone-600 font-outfit text-[11px] uppercase tracking-widest hover:text-accent transition-colors">Legal</a>
            <a href="#" className="text-stone-600 font-outfit text-[11px] uppercase tracking-widest hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="text-stone-600 font-outfit text-[11px] uppercase tracking-widest hover:text-accent transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
