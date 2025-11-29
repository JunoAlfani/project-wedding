import config from "@/config/config";
import {
  Clock,
  MapPin,
  CalendarCheck,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { formatEventDate } from "@/lib/formatEventDate";

export default function Location() {
  return (
    <>
      {/* Location Section */}
      <section
        id="location"
        className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-3 py-20 text-center bg-floral-1 bg-cover bg-center bg-no-repeat"
      >
        {/* Overlay lembut agar teks tetap terbaca */}
        <div className="absolute inset-0 bg-white/0" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 py-10"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block text-red-800 font-medium mb-8"
            >
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight"
            >
              Lokasi Acara
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-900 max-w-md mx-auto"
            >
              Temukan lokasi tempat acara bahagia kami diselenggarakan
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-4 mt-6"
            >
              <div className="h-[1px] w-12 bg-red-200" />
              <MapPin className="w-5 h-5 text-red-800" />
              <div className="h-[1px] w-12 bg-red-200" />
            </motion.div>
          </motion.div>

          {/* Location Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Map */}
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border-8 border-white">
              <iframe
                src={config.data.maps_embed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Venue Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 text-left">
              <h3 className="text-2xl font-serif text-gray-800 mb-6">
                {config.data.location}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-red-800 mt-1" />
                  <p className="text-gray-600 flex-1">
                    {config.data.address}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <CalendarCheck className="w-5 h-5 text-red-800" />
                  <p className="text-gray-600">
                    {formatEventDate(config.data.date)}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="w-5 h-5 text-red-800" />
                  <p className="text-gray-600">{config.data.time}</p>
                </div>

                {/* Button */}
                <div className="pt-4">
                  <motion.a
                    href={config.data.maps_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-1.5 bg-white text-gray-600 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="font-semibold">Lihat di Google Maps</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
