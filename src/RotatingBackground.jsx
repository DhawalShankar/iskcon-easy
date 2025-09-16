import { useEffect, useState } from "react";
import React from "react";

// Images array (update paths as needed)
const images = [
  "/images/bg1.png",
  "/images/bg2.png",
  "/images/bg3.png",
  "/images/bg4.png",
];

// Global index to persist across unmounts
let globalIndex = 0;

const RotatingBackground = () => {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      globalIndex = (globalIndex + 1) % images.length;
      forceUpdate((n) => n + 1); // trigger re-render
    }, 5000); // 10s per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === globalIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}
    </div>
  );
};

// Memoization is optional here since globalIndex handles persistence
export default React.memo(RotatingBackground);
