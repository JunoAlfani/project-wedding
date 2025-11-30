// Updated LandingPage.jsx with logo + "The Wedding Of" text
import config from '@/config/config';
import { formatEventDate } from '@/lib/formatEventDate';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

// Efek melati jatuh lembut 
const FlowerFallingEffect = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const flowerTypes = ['🤍'];
    const generated = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 14 + Math.random() * 24,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 5,
      type: flowerTypes[Math.floor(Math.random() * flowerTypes.length)],
      rotateDir: Math.random() > 0.5 ? 1 : -1,
    }));

    setFlowers(generated);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {flowers.map((f) => (
        <motion.div
          key={f.id}
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: '110vh',
            opacity: [0.9, 1, 0],
            rotate: [0, 360 * f.rotateDir],
          }}
          transition={{
            duration: f.duration,
            repeat: Infinity,
            delay: f.delay,
            ease: 'linear',
          }}
          className="absolute"
          style={{ left: `${f.left}%`, fontSize: `${f.size}px` }}
        >
          {f.type}
        </motion.div>
      ))}
    </div>
  );
};

export default function LandingPage({ onOpenInvitation }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleOpen = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onOpenInvitation();
    }, 2500);
  };

  return (
    <div className="relative min-h-screen overflow-hidden perspective-[1200px] bg-rose-10">
      <AnimatePresence>
        {!isTransitioning && (
          <motion.div
            key="landing"
            initial={{ opacity: 0, rotateY: -10, scale: 0.98 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: 'scale(1)', objectPosition: 'center center', opacity: 0.9 }}
              src="/video/heroes_bg.mp4"
              autoPlay
              muted
              playsInline
            />

            <FlowerFallingEffect />

            {/* Ornamen blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            {/* Konten utama */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">

              {/* LOGO BESAR */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="mb-4"
              >
                <img
                  src="/images/sa-logo.png"
                  alt="Wedding Logo"
                  className="w-[250px] h-[250px] md:w-[220px] md:h-[220px] object-contain mx-auto select-none mt-[-150px]"
                />
              </motion.div>

              {/* THE WEDDING OF */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-1xl md:text-3xl font-serif tracking-[0.4em] text-red-900/90 mb-5 mt-[-20px] uppercase drop-shadow-sm"
              >
                The Wedding Of
              </motion.p>

              {/* Nama pasangan */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight mb-4"
              >
                {config.data.groomName}
                <span className="text-red-700 mx-2">&</span>
                {config.data.brideName}
              </motion.h1>

              {/* Tombol buka undangan */}
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleOpen}
                  className="relative bg-red-800 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:bg-rose-600 transition-all duration-200 w-52 mx-auto block text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Buka Undangan</span>
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Efek transisi buka gerbang */}
      {isTransitioning && (
        <>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-[#6b0e0e] via-[#941e1e] to-[#FAD3D3] shadow-2xl z-20 origin-left"
          />

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-r from-[#FAD3D3] via-[#941e1e] to-[#6b0e0e] shadow-2xl z-20 origin-right"
          />
        </>
      )}
    </div>
  );
}
