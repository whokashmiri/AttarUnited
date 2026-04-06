/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";

// ✅ VIDEO IMPORTS
import chopard from "./assets/chopard.mp4";
import hublot from "./assets/hublot.mp4";
import graff from "./assets/graff.mp4";

import azzafahmy from "./assets/azzafahmy.mp4";
import saintlouis from "./assets/saintlouis.mp4";

// ✅ CLEAN DATA (REMOVED BROKEN OBJECT)
const DEFAULT_BRANDS = [
  {
    name: "Chopard",
    media: [{ type: "video", src: chopard }],
  },
  {
    name: "Hublot",
    media: [{ type: "video", src: hublot }],
  },
  {
    name: "Graff",
    media: [{ type: "video", src: graff }],
  },
  {
    name: "Azza Fahmy",
    media: [{ type: "video", src: azzafahmy }],
  },
  {
    name: "Saint Louis",
    media: [{ type: "video", src: saintlouis }],
  },
];

function BurnTitle({ children }) {
  return (
    <div className="relative inline-block select-none">
      <div className="burn-stroke font-baskerville uppercase tracking-[0.14em]">
        {children}
      </div>
      <div className="burn-core absolute inset-0 font-baskerville uppercase tracking-[0.14em]">
        {children}
      </div>
    </div>
  );
}

function BrandMediaCard({ brand }) {
  const item = brand?.media?.[0];

  // ✅ SAFETY FIX (prevents crash)
  if (!item) return null;

  return (
    <motion.div
      className="group relative w-full h-full overflow-hidden rounded-2xl
      border border-white/10 bg-white/3 backdrop-blur-xl
      shadow-[0_30px_100px_rgba(0,0,0,0.55)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={item.src}
        muted
        autoPlay
        loop
        playsInline
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* TITLE */}
      <div className="absolute bottom-6 left-6">
        <BurnTitle>{brand.name}</BurnTitle>
      </div>
    </motion.div>
  );
}

export default function OurBrands({
  brands = DEFAULT_BRANDS,
  title = "Our Brands",
  subtitle = "Official Retailer of the world's most distinguished luxury houses.",
}) {
  const ref = useRef(null);
  const inView = useInView(ref);

  const safeBrands = useMemo(() => brands.filter(Boolean), [brands]);

  return (
    <section
      ref={ref}
      className="relative min-h-[200vh] w-full bg-black py-20"
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-white text-4xl md:text-5xl font-baskerville">
          {title}
        </h2>
        <p className="text-white/60 mt-4 max-w-xl">{subtitle}</p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {safeBrands.map((brand, i) => (
          <div key={i} className="h-[500px]">
            <BrandMediaCard brand={brand} />
          </div>
        ))}
      </div>

      {/* STYLES */}
      <style>{`
        .burn-stroke{
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.5);
          font-size: 28px;
        }
        .burn-core{
          color: white;
          font-size: 28px;
        }
      `}</style>
    </section>
  );
}
