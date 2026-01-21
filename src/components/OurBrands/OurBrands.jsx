/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

/**
 * OurBrands (Premium Media Cards) — 200vh Section
 * - Section height: 200vh (twice viewport height)
 * - 3 cards per 100vh (6 cards total across 200vh)
 * - Each card cycles: 3 images + 1 video
 * - RANDOM intervals per card
 */

const DEFAULT_BRANDS = [
  {
    name: "Chopard",
    media: [
      { type: "image", src: "https://images.pexels.com/photos/9978921/pexels-photo-9978921.jpeg" },
      { type: "image", src: "https://images.pexels.com/photos/9978930/pexels-photo-9978930.jpeg" },
      { type: "image", src: "https://images.pexels.com/photos/10189189/pexels-photo-10189189.jpeg" },
      { type: "video", src: "https://www.pexels.com/download/video/20117683/" },
    ],
  },
  {
    name: "Hublot",
    media: [
      { type: "image", src: "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_2x/public/2026-01/Classic-Fusion-Chronograph-Titanium-Sage-Green-45-mm-Soldier.png?itok=mKENK2p8" },
      { type: "image", src: "https://www.hublot.com/sites/default/files/styles/global_medium_desktop_1x/public/2025-04/megamenu_big_bang_d.jpg?itok=R9D0krnO" },
      { type: "image", src: "https://www.hublot.com/sites/default/files/styles/global_medium_desktop_1x/public/2025-04/megamenu_exceptional_d.jpg?itok=-NT5JkfT" },
      { type: "video", src: "https://www.hublot.com/sites/default/files/2026-01/big-bang-original-unico-loop-2-optim.mp4" },
    ],
  },
  {
    name: "Graff",
    media: [
      { type: "image", src: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg" },
      { type: "image", src: "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg" },
      { type: "image", src: "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg" },
      { type: "video", src: "https://www.pexels.com/download/video/9421508/" },
    ],
  },
  {
    name: "Azza Fahmy",
    media: [
      { type: "image", src: "https://images.pexels.com/photos/1191533/pexels-photo-1191533.jpeg" },
      { type: "image", src: "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg" },
      { type: "image", src: "https://images.pexels.com/photos/1457801/pexels-photo-1457801.jpeg" },
      { type: "video", src: "https://www.pexels.com/download/video/6469640/" },
    ],
  },
  {
    name: "Gerald Charles",
    media: [
      { type: "image", src: "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg" },
      { type: "image", src: "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg" },
      { type: "image", src: "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg" },
      { type: "video", src: "https://videos.pexels.com/video-files/7989655/7989655-hd_1280_720_30fps.mp4" },
    ],
  },
  {
    name: "Saint Louis",
    media: [
      { type: "image", src: "https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg" },
      { type: "image", src: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg" },
      { type: "image", src: "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg" },
      { type: "video", src: "https://videos.pexels.com/video-files/3195390/3195390-hd_1280_720_30fps.mp4" },
    ],
  },
];

function rand(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function BurnTitle({ children }) {
  return (
    <div className="relative inline-block select-none">
      <div className="burn-stroke font-serif uppercase tracking-[0.14em]">{children}</div>
      <div className="burn-core absolute inset-0 font-serif uppercase tracking-[0.14em]">{children}</div>
      <div className="burn-embers absolute inset-0 font-serif uppercase tracking-[0.14em]">{children}</div>
    </div>
  );
}

function BrandMediaCard({ brand, index }) {
  const item = brand.media[index];
  const isVideo = item?.type === "video";

  return (
    <motion.div
      className="
        group relative w-full h-full overflow-hidden rounded-2xl
        border border-white/10 bg-white/3 backdrop-blur-xl
        shadow-[0_30px_100px_rgba(0,0,0,0.55)]
      "
      initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      {/* Media */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${brand.name}-${index}-${item?.src}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {isVideo ? (
              <video
                className="h-full w-full object-cover"
                src={item.src}
                muted
                playsInline
                loop
                autoPlay
                preload="auto"
              />
            ) : (
              <img
                src={item.src}
                alt={`${brand.name} media`}
                className="h-full w-full object-cover"
                draggable={false}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/25 via-black/10 to-black/70" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_60%_at_50%_25%,rgba(255,255,255,0.10),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/0 transition duration-300 group-hover:ring-white/12" />

      {/* Title */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
        <div className="text-[10px] tracking-[0.38em] uppercase ">Our Brand</div>
        <div className="mt-2 leading-none">
          <BurnTitle className="text-[#986a4c]">{brand.name}</BurnTitle>
        </div>
        <div className="mt-3 flex items-center gap-2 text-white/55">
          <span className="h-px w-10 bg-white/20" />
          <span className="text-[10px] tracking-[0.35em] uppercase">Discover</span>
        </div>
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
  const inView = useInView(ref, { amount: 0.2 });

  const safeBrands = useMemo(() => brands.slice(0, 6), [brands]);

  const [indices, setIndices] = useState(() => safeBrands.map(() => 0));

  useEffect(() => {
    setIndices(safeBrands.map(() => 0));
  }, [safeBrands]);

  useEffect(() => {
    if (!inView) return;

    const timers = safeBrands.map((brand, cardIdx) => {
      const current = brand.media[indices[cardIdx]];
      const ms = current?.type === "video" ? rand(5500, 8500) : rand(1900, 3600);

      return window.setTimeout(() => {
        setIndices((prev) => {
          const next = [...prev];
          const max = brand.media.length;
          next[cardIdx] = (prev[cardIdx] + 1) % max;
          return next;
        });
      }, ms);
    });

    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [inView, safeBrands, indices]);

  return (
    <section ref={ref} className="relative min-h-[200vh] w-full overflow-hidden bg-black">
      {/* Premium lighting */}
      {/* <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_60%_at_50%_18%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/4 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black to-transparent" /> */}

      {/* Header */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-12">
        <p className="text-[10px] sm:text-xs tracking-[0.38em] uppercase text-white/55">
          Attar United
        </p>
        <h2 className="mt-3 sm:mt-4 font-serif text-white/92 leading-none text-3xl sm:text-4xl md:text-5xl tracking-tight">
          {title}
        </h2>
        <p className="mt-3 sm:mt-4 max-w-2xl text-white/70 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-5 sm:mt-6 h-px w-full max-w-md bg-white/10" />
      </div>

      {/* Cards grid - 3 cards per row, 2 rows = 200vh total */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* First row - 3 cards */}
          {safeBrands.slice(0, 3).map((brand, i) => (
            <div key={brand.name} className="h-[85vh] sm:h-[75vh]">
              <BrandMediaCard brand={brand} index={indices[i] ?? 0} />
            </div>
          ))}
          
          {/* Second row - 3 cards */}
          {safeBrands.slice(3, 6).map((brand, i) => (
            <div key={brand.name} className="h-[85vh] sm:h-[75vh]">
              <BrandMediaCard brand={brand} index={indices[i + 3] ?? 0} />
            </div>
          ))}
        </div>
      </div>

      {/* Burn CSS */}
      <style>{`
        .burn-stroke{
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.55);
          text-shadow: 0 0 18px rgba(255,255,255,0.06);
          font-size: clamp(22px, 2.2vw, 34px);
          line-height: 1;
        }
        .burn-core{
          color: rgba(255,255,255,0.92);
          font-size: clamp(22px, 2.2vw, 34px);
          line-height: 1;
          filter: drop-shadow(0 6px 16px rgba(255,255,255,0.08));
          opacity: 0.92;
        }
        .burn-embers{
          font-size: clamp(22px, 2.2vw, 34px);
          line-height: 1;
          color: transparent;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,245,220,0.55) 18%,
            rgba(255,255,255,0.92) 36%,
            rgba(255,232,180,0.60) 52%,
            transparent 72%
          );
          -webkit-background-clip: text;
          background-clip: text;
          filter: blur(0.15px) drop-shadow(0 0 22px rgba(255,215,140,0.10));
          opacity: 0.85;
          animation: emberSweep 3.6s ease-in-out infinite;
          mix-blend-mode: screen;
        }
        @keyframes emberSweep {
          0%   { transform: translateX(-18%); opacity: 0.65; }
          45%  { opacity: 0.95; }
          100% { transform: translateX(18%); opacity: 0.65; }
        }
      `}</style>
    </section>
  );
}