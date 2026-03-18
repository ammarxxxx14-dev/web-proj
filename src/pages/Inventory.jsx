import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Gauge, Shield, Search } from 'lucide-react';

// Local Assets
import porsche911 from '../assets/cars/porsche-gt3.png';
import ferrariRoma from '../assets/cars/ferrari-roma.png';
import mclaren750 from '../assets/cars/mclaren-750s.png';
import mercedesSClass from '../assets/cars/mercedes-s-class-studio.png';
import lamboAventador from '../assets/cars/lamborghini-aventador.png';

const inventory = [
  {
    id: 1,
    name: '2026 Porsche 911 GT3',
    category: 'sports',
    location: 'Showroom Floor',
    engine: '4.0L Flat-6',
    drive: 'RWD',
    price: '$182,900',
    description: 'The definitive sports car. Rear-engine layout, iconic silhouette, and uncompromising track performance designed for the purist.',
    image: porsche911,
    status: 'Available'
  },
  {
    id: 2,
    name: '2025 Ferrari Roma',
    category: 'supercar',
    location: 'Showroom Floor',
    engine: '3.9L V8 Biturbo',
    drive: 'RWD',
    price: '$247,000',
    description: 'La Nuova Dolce Vita. Timeless elegance meets modern Ferrari performance in this stunning front-mid engine V8 masterpiece.',
    image: ferrariRoma,
    status: 'Inquiry'
  },
  {
    id: 3,
    name: '2024 Mercedes-Benz S-Class',
    category: 'luxury',
    location: 'Showroom Floor',
    engine: '4.0L V8 Biturbo',
    drive: 'AWD',
    price: '$124,600',
    description: 'The pinnacle of luxury sedans. Experience unparalleled comfort, advanced driver-assistance systems, and an executive rear-seat package.',
    image: mercedesSClass,
    status: 'Inquiry'
  },
  {
    id: 4,
    name: '2025 Aston Martin DBX707',
    category: 'suv',
    location: 'Arriving Soon',
    engine: '707hp V8',
    drive: 'AWD',
    price: '$242,000',
    description: "The world's most powerful luxury SUV. Uncompromising performance meets British craftsmanship inside a breathtaking silhouette.",
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2070&auto=format&fit=crop',
    status: 'Reserved'
  },
  {
    id: 5,
    name: '2024 McLaren 750S',
    category: 'supercar',
    location: 'Showroom Floor',
    engine: '4.0L V8 Biturbo',
    drive: 'RWD',
    price: '$324,500',
    description: 'Pure driver engagement. The lightest and most powerful series-production McLaren ever built, designed for ultimate emotional impact.',
    image: mclaren750,
    status: 'Available'
  },
  {
    id: 6,
    name: '2025 BMW M4 Competition',
    category: 'sports',
    location: 'Showroom Floor',
    engine: '3.0L Straight-6',
    drive: 'AWD',
    price: '$85,300',
    description: 'The perfect blend of track-ready performance and daily usability. Carbon fiber accents and a screaming inline-6.',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200',
    status: 'Available'
  },
  {
    id: 7,
    name: '2024 Audi RS6 Avant',
    category: 'luxury',
    location: 'Off-site Gallery',
    engine: '4.0L V8 TFSI',
    drive: 'Quattro AWD',
    price: '$125,800',
    description: 'The ultimate performance wagon. Blurring the lines between supercar speed and family-focused practicality.',
    image: 'https://images.unsplash.com/photo-1606148123535-983cd4492bf1?auto=format&fit=crop&q=80&w=1200',
    status: 'Inquiry'
  },
  {
    id: 8,
    name: '2025 Mercedes-AMG G63',
    category: 'suv',
    location: 'Showroom Floor',
    engine: '4.0L V8 Biturbo',
    drive: '4WD',
    price: '$183,000',
    description: 'The legend continues. An unmistakable silhouette paired with raw AMG power and unparalleled luxury.',
    image: 'https://images.unsplash.com/photo-1520031444763-b11b7729bd2f?auto=format&fit=crop&q=80&w=1200',
    status: 'Available'
  },
  {
    id: 9,
    name: '2025 Lexus LC 500',
    category: 'luxury',
    location: 'Showroom Floor',
    engine: '5.0L V8',
    drive: 'RWD',
    price: '$100,500',
    description: 'Automotive art in motion. A naturally aspirated V8 soundtrack paired with the most exquisite interior in its class.',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=1200',
    status: 'Available'
  },
  {
    id: 10,
    name: '2024 Cadillac Escalade-V',
    category: 'suv',
    location: 'Arriving Soon',
    engine: '6.2L Supercharged V8',
    drive: 'AWD',
    price: '$152,200',
    description: 'Power without compromise. The largest and most powerful luxury SUV ever to wear the V-Series badge.',
    image: 'https://images.unsplash.com/photo-1627454820516-dc767abc040b?auto=format&fit=crop&q=80&w=1200',
    status: 'Inquiry'
  },
  {
    id: 11,
    name: '2024 Porsche Taycan Turbo S',
    category: 'sports',
    location: 'Showroom Floor',
    engine: 'Dual Electric Motor',
    drive: 'AWD',
    price: '$194,900',
    description: 'The future of performance. Instant torque, breathtaking acceleration, and the unmistakable Porsche driving soul.',
    image: 'https://images.unsplash.com/photo-1592934524458-71e98a39d569?auto=format&fit=crop&q=80&w=1200',
    status: 'Available'
  },
  {
    id: 12,
    name: '2025 Chevrolet Corvette Z06',
    category: 'sports',
    location: 'Off-site Gallery',
    engine: '5.5L Flat-Plane V8',
    drive: 'RWD',
    price: '$112,700',
    description: 'The American supercar killer. A high-revving masterpiece that commands attention on both road and track.',
    image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=2070&auto=format&fit=crop',
    status: 'Available'
  },
  {
    id: 13,
    name: '2024 Audi R8 V10 Performance',
    category: 'supercar',
    location: 'Showroom Floor',
    engine: '5.2L V10',
    drive: 'Quattro AWD',
    price: '$209,700',
    description: 'The end of an era. The final naturally aspirated V10 masterpiece, offering a visceral analog driving experience.',
    image: 'https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&q=80&w=1200',
    status: 'Reserved'
  },
  {
    id: 14,
    name: '2025 Lamborghini Aventador SVJ',
    category: 'supercar',
    location: 'Arriving Soon',
    engine: '6.5L V12',
    drive: 'AWD',
    price: '$517,000',
    description: 'The ultimate expression of Lamborghini performance. A high-revving V12 masterpiece with active aerodynamics.',
    image: lamboAventador,
    status: 'Inquiry'
  },
  {
    id: 15,
    name: '2024 BMW 8 Series Gran Coupe',
    category: 'luxury',
    location: 'Showroom Floor',
    engine: '4.4L V8 Biturbo',
    drive: 'AWD',
    price: '$96,600',
    description: 'The ultimate luxury tourer. Sophisticated design meet effortless power in this four-door automotive masterpiece.',
    image: 'https://images.unsplash.com/photo-1556107533-31f67f3f317b?q=80&w=2070&auto=format&fit=crop',
    status: 'Available'
  }
];

const Inventory = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = inventory.filter(item => {
    const matchesFilter = filter === 'all' || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-(--bg-primary) min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-accent text-sm tracking-[0.4em] mb-4 inline-block"
          >
            CURRENT COLLECTION
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display text-(--text-primary) mb-8"
          >
            AVAILABLE <span className="text-chrome">FLEET</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-(--text-secondary) font-outfit text-lg max-w-2xl mx-auto"
          >
            Explore our meticulously curated selection of world-class automobiles. Each vehicle is verified for absolute perfection.
          </motion.p>
        </div>

        {/* Filter & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'sports', 'supercar', 'luxury', 'suv'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-outfit text-sm font-bold uppercase tracking-widest transition-all duration-300 border ${
                  filter === cat 
                    ? 'bg-accent text-stone-950 border-accent shadow-[0_0_15px_var(--color-accent-glow)]' 
                    : 'bg-transparent text-stone-400 border-stone-800 hover:border-stone-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
            <input 
              type="text"
              placeholder="Search Collection..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-(--bg-secondary)/50 border border-(--border-color) rounded-full px-12 py-3 text-(--text-primary) placeholder:text-(--text-muted) focus:outline-none focus:border-accent transition-colors font-outfit"
            />
          </div>
        </div>

        {/* Inventory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card group overflow-hidden rounded-4xl"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Part */}
                  <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Content Part */}
                  <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="font-display text-[10px] text-accent tracking-[0.3em] uppercase">
                          {item.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          item.status === 'Available' ? 'bg-green-500/10 text-green-500' : 'bg-stone-800 text-stone-400'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <h3 className="text-2xl font-outfit font-bold text-(--text-primary) mb-3 group-hover:text-accent transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-1.5 text-stone-500 text-xs">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </div>
                        <div className="flex items-center gap-1.5 text-stone-500 text-xs">
                          <Gauge className="w-3.5 h-3.5" />
                          {item.engine}
                        </div>
                        <div className="flex items-center gap-1.5 text-stone-500 text-xs">
                          <Shield className="w-3.5 h-3.5" />
                          {item.drive}
                        </div>
                      </div>
                      <p className="text-(--text-secondary) text-sm leading-relaxed font-plus-jakarta line-clamp-2 mb-6">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="text-xl font-outfit font-bold text-(--text-primary)">
                        {item.price}
                      </div>
                      <button className="flex items-center gap-2 font-display text-[10px] text-stone-300 hover:text-accent transition-colors group/btn">
                        <span>VIEW DETAILS</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
