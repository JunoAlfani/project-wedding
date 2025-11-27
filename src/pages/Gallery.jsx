// src/pages/Gallery.jsx
import { motion } from "framer-motion";

export default function Gallery() {
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

        {/* Carousel container */}
        <div
          className="flex overflow-x-scroll overflow-y-hidden space-x-8 snap-x snap-mandatory justify-start md:justify-center scrollbar-none scroll-smooth"
          style={{
            WebkitOverflowScrolling: "touch", // membuat scroll halus di iOS
          }}
        >
          {images.map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-62 md:w-80 snap-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={item.src}
                alt={`Gallery ${index + 1}`}
                className="rounded-t-2xl object-cover w-full h-56 md:h-64"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm italic">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
