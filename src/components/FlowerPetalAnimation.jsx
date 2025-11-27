import { useEffect, useState } from "react";

export default function FlowerPetalAnimation({ active }) {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    if (!active) return;

    const newPetals = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 20 + Math.random() * 20,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 3,
    }));

    setPetals(newPetals);
  }, [active]);

  if (!active) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute bg-rose-200 rounded-full opacity-70 animate-fall"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 0.6}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10%) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(120vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
