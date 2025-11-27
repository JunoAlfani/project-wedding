import { Calendar, Clock, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import config from '@/config/config';
import { formatEventDate } from '@/lib/formatEventDate';
import { safeBase64 } from '@/lib/base64';

export default function Hero() {
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestParam = urlParams.get('guest');

    if (guestParam) {
      try {
        const decodedName = safeBase64.decode(guestParam);
        setGuestName(decodedName);
      } catch (error) {
        console.error('Error decoding guest name:', error);
        setGuestName('');
      }
    }
  }, []);

  const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    function calculateTimeLeft() {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
          jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
          menit: Math.floor((difference / 1000 / 60) % 60),
          detik: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    }

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearInterval(timer);
    }, [targetDate]);

    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        {Object.keys(timeLeft).map((interval) => (
          <motion.div
            key={interval}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-rose-100"
          >
            <span className="text-xl sm:text-2xl font-bold text-rose-600">
              {timeLeft[interval]}
            </span>
            <span className="text-xs text-gray-500 capitalize">{interval}</span>
          </motion.div>
        ))}
      </div>
    );
  };

  const FloatingHearts = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: window.innerHeight
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0.5],
              x: Math.random() * window.innerWidth,
              y: -100
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut"
            }}
            className="absolute"
          >
            <Heart
              className={`w-${Math.floor(Math.random() * 2) + 8} h-${Math.floor(Math.random() * 2) + 8} ${
                i % 3 === 0 ? 'text-rose-400' :
                i % 3 === 1 ? 'text-pink-400' :
                'text-red-400'
              }`}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* === HERO SECTION (Video Background) === */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 text-center overflow-hidden"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover scale-[1.0]"
          style={{
            objectPosition: 'center center',
            opacity: 0.85,
          }}
          src="/video/heroes2_bg.mp4"
          autoPlay
          muted
          playsInline
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mx-auto"
          >
            <span className="px-4 py-1 text-sm bg-rose-50 text-rose-600 rounded-full border border-rose-200">
              Catat Tanggal Penting Ini
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 font-light italic text-base sm:text-lg"
            >
              InsyaAllah Kami Akan Menikah
            </motion.p>
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-3xl sm:text-5xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600"
            >
              {config.data.groomName} & {config.data.brideName}
            </motion.h2>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="relative max-w-md mx-auto"
          >
            <div className="relative px-6 sm:px-8 py-8 ">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px">
                <div className="w-20 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
              </div>

              <div className="space-y-6 text-center">
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4 text-rose-400" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      {formatEventDate(config.data.date, "full")}
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <Clock className="w-4 h-4 text-rose-400" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      {config.data.time}
                    </span>
                  </motion.div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-8 sm:w-12 bg-rose-200/50" />
                  <div className="w-2 h-2 rounded-full bg-rose-200" />
                  <div className="h-px w-8 sm:w-12 bg-rose-200/50" />
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="space-y-2"
                >
                  <p className="text-gray-500 font-serif italic text-sm">
                    Kepada Yth.
                  </p>
                  <p className="text-gray-600 font-medium text-sm">
                    Bapak/Ibu/Saudara/i
                  </p>
                  <p className="text-rose-500 font-semibold text-lg">
                    {guestName ? guestName : "Tamu"}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <CountdownTimer targetDate={config.data.date} />

          <div className="pt-6 relative">
            <FloatingHearts />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-10 sm:w-12 h-10 sm:h-12 text-rose-500 mx-auto" fill="currentColor" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* === PROFILE SECTION (Image Background) === */}
      <section
        id="profile"
        className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-3 text-center bg-profile-married bg-cover bg-center bg-no-repeat"
      > 
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 py-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-serif text-rose-700 mb-12"
          >
            Profil Mempelai
          </motion.h2>

          {/* Wanita */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-16"
          >
            <img
              src="/images/cewek.JPG"
              alt="Bride"
              className="w-48 h-64 object-cover rounded-2xl shadow-lg mb-6 border-4 border-rose-100"
            />
            <h3 className="text-2xl font-serif text-rose-700">Yuli Maulia Herdianti</h3>
            <p className="text-gray-700 mt-2 max-w-sm">
              Putri Pertama dari Bapak Heru Sangkana & Ibu Sugiati
            </p>
          </motion.div>

          {/* Pemisah */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center mb-16"
          >
            <div className="w-12 h-[1px] bg-rose-200" />
            <span className="mx-4 text-rose-400 text-2xl font-serif">&</span>
            <div className="w-12 h-[1px] bg-rose-200" />
          </motion.div>

          {/* Pria */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <img
              src="/images/cowok.JPG"
              alt="Groom"
              className="w-48 h-64 object-cover rounded-2xl shadow-lg mb-6 border-4 border-rose-100"
            />
            <h3 className="text-2xl font-serif text-rose-700">Ryan Rhidyawan Erlan</h3>
            <p className="text-gray-700 mt-2 max-w-sm">Putra Pertama dari Bapak Dede Winarya & Ibu Juju</p>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
