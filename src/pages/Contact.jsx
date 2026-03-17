import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Direct Line',
      value: '+1 (555) 012-3456',
      label: 'Available 24/7 for Elite Members',
    },
    {
      icon: Mail,
      title: 'Concierge Email',
      value: 'concierge@apexauto.com',
      label: 'Average response: 15 minutes',
    },
    {
      icon: MapPin,
      title: 'Global Headquarters',
      value: '1200 Performance Way',
      label: 'Silicon Valley, CA 94025',
    },
  ];

  return (
    <div className="bg-stone-950 min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-accent text-sm tracking-[0.4em] mb-4 inline-block"
          >
            GET IN TOUCH
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-display text-white mb-8"
          >
            ELITE <span className="text-chrome">CONCIERGE</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 font-outfit text-lg max-w-2xl mx-auto"
          >
            Experience personalized service tailored to your automotive aspirations. Our team of specialists is ready to assist you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-outfit font-bold text-white mb-10 uppercase tracking-wider">
              CONNECT <span className="text-accent">INSTANTLY</span>
            </h2>
            
            <div className="space-y-8 mb-16">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center shrink-0 border border-stone-800 group-hover:border-accent transition-colors duration-500">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-stone-500 font-display text-[10px] tracking-[0.3em] uppercase mb-1">
                      {info.title}
                    </h4>
                    <div className="text-xl font-outfit font-bold text-white mb-1">
                      {info.value}
                    </div>
                    <div className="text-stone-600 text-sm font-plus-jakarta">
                      {info.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-8 rounded-3xl border border-stone-800/50">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-5 h-5 text-accent" />
                <h4 className="font-outfit font-bold text-white uppercase tracking-wider">Business Hours</h4>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm font-plus-jakarta text-stone-400">
                <div>Monday - Friday</div>
                <div className="text-right text-stone-200">09:00 - 20:00</div>
                <div>Saturday</div>
                <div className="text-right text-stone-200">10:00 - 18:00</div>
                <div>Sunday</div>
                <div className="text-right text-accent">Appointment Only</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-10 md:p-12 rounded-[3rem] border border-stone-800/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] -z-10"></div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-display text-[10px] text-stone-500 tracking-[0.3em] uppercase ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-stone-900/50 border border-stone-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors font-outfit"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-display text-[10px] text-stone-500 tracking-[0.3em] uppercase ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-stone-900/50 border border-stone-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors font-outfit"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-display text-[10px] text-stone-500 tracking-[0.3em] uppercase ml-1">Subject of Inquiry</label>
                <select className="w-full bg-stone-900/50 border border-stone-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors font-outfit appearance-none cursor-pointer">
                  <option className="bg-stone-950">Vehicle Acquisition</option>
                  <option className="bg-stone-950">Sell / Consign My Vehicle</option>
                  <option className="bg-stone-950">Service & Performance</option>
                  <option className="bg-stone-950">Bespoke Customization</option>
                  <option className="bg-stone-950">Other Inquiries</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-display text-[10px] text-stone-500 tracking-[0.3em] uppercase ml-1">Your Message</label>
                <textarea 
                  required
                  rows="5"
                  className="w-full bg-stone-900/50 border border-stone-800 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors font-outfit resize-none"
                  placeholder="How can we assist you today?"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={formState !== 'idle'}
                className="btn-elite w-full py-5 text-lg group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center gap-4">
                  {formState === 'idle' && (
                    <>Send Message <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></>
                  )}
                  {formState === 'submitting' && (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-stone-950 border-t-transparent rounded-full"
                    />
                  )}
                  {formState === 'success' && (
                    <span className="text-stone-950">Message Sent Successfully</span>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
