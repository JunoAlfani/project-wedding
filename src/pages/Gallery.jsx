
// Revised Gallery.jsx based on the client's requested layout
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/images/galeri1.JPG" },
    { src: "/images/galeri2.JPG" },
    { src: "/images/galeri3.JPG" },
    { src: "/images/galeri4.JPG" },
    { src: "/images/galeri5.JPG" },
    { src: "/images/galeri6.JPG" },
    { src: "/images/galeri7.JPG" },
  ];

  return (
    <section
      id="gallery"
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 py-16 text-center bg-floral-1 bg-cover bg-center bg-no-repeat"
    >
      <motion.h2
        className="text-4xl font-serif text-gray-800 mb-10 mt-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Gallery
      </motion.h2>

      {/* GRID LAYOUT LIKE CLIENT EXAMPLE */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-4xl">
        {images.map((item, index) => (
          <div
            key={index}
            className="w-full h-40 md:h-44 bg-white rounded-md overflow-hidden cursor-pointer shadow-md hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* MODAL POPUP */}
      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[200] p-4"
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
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
