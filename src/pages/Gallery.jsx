// src/pages/Gallery.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "/images/galeri2.JPG",
      caption: "Momen pertama kami bersama.",
    },
    {
      src: "/images/galeri3.JPG",
      caption: "Kebahagiaan sederhana di setiap senyuman.",
    },
    {
      src: "/images/galeri1.JPG",
      caption: "Langkah kecil menuju kisah besar.",
    },
    {
      src: "/images/galeri4.JPG",
      caption: "Tawa yang akan kami kenang selamanya.",
    },
  ];

  return (
    <section
      id="gallery"
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 py-16 text-center bg-floral-1 bg-cover bg-center bg-no-repeat"
    >
      {/* Konten utama */}
      <div className="relative z-10 container mx-auto">
        <motion.h2
          className="text-3xl font-serif text-gray-800 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Gallery
        </motion.h2>

        {/* Galeri Carousel */}
        <div
          className="flex overflow-x-scroll overflow-y-hidden space-x-8 snap-x snap-mandatory justify-start md:justify-center scrollbar-none scroll-smooth"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {images.map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-72 md:w-[420px] snap-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={`Gallery ${index + 1}`}
                className="rounded-t-2xl object-cover w-full h-72 md:h-[340px]"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm italic">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === MODAL POPUP GAMBAR === */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage.src}
              alt="Selected"
              className="max-w-[95%] max-h-[90vh] object-contain rounded-xl shadow-lg"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
