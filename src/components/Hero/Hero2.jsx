/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

export default function Hero({
  videos = [],
  title = "Luxury Essentials",
  subtitle = "The distinguished home of Chopard, Hublot, Graff, Azza Fahmy, Gerald Charles, and Saint-Louis in the Kingdom of Saudi Arabia.",
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smooth = (value) =>
    useSpring(value, {
      stiffness: 50,
      damping: 20,
      mass: 1,
    });

  const tileScale = smooth(
    useTransform(scrollYProgress, [0, 1], [1, 1.08])
  );

  const textOpacity = smooth(
    useTransform(scrollYProgress, [0, 0.45], [1, 0])
  );

  const heroVideos = videos.slice(0, 5);

  return (
    <section
      ref={ref}
      className="relative mt-15 h-[200vh] w-full bg-black"
    >
      <div className="sticky top-0 h-screen overflow-hidden ">
        {/* =====================================================
            VIDEO GRID
        ===================================================== */}
        <div className="absolute inset-0">
          <div className="grid h-full grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 p-2 md:p-4">
            {heroVideos.map((video, index) => (
              <motion.div
                key={index}
                style={{ scale: tileScale }}
                className="group relative overflow-hidden rounded-xl bg-black"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  src={video}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 " />

                {/* Luxury Gradient */}
                <div className="absolute inset-0" />

                {/* Side Glow */}
                <div className="absolute inset-0" />

                {/* Luxury Vignette */}
                <div
                  className="absolute inset-0"
                  style={{
                    boxShadow:
                      "inset 0 0 120px",
                  }}
                />

                {/* Border */}
                <div className="absolute inset-0 border border-amber-700/30" />

                {/* Corner Accents */}
                <div className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-amber-500/50" />
                <div className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-amber-500/50" />
                <div className="absolute left-3 bottom-3 h-5 w-5 border-l-2 border-b-2 border-amber-500/50" />
                <div className="absolute right-3 bottom-3 h-5 w-5 border-r-2 border-b-2 border-amber-500/50" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================
            GLOBAL OVERLAYS
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0 bg-black/15 z-10" />

        <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 " />

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-linear-to-b from-black via-black/80 to-transparent z-20" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.08),transparent_70%)] z-10" />

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <motion.div
          style={{
            opacity: textOpacity,
          }}
          className="absolute inset-0 z-30 flex items-end"
        >
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10 pb-16 md:pb-24">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-14 bg-linear-to-r from-amber-600 to-transparent" />

                <span className="text-xs uppercase tracking-[0.35em] text-amber-500/90">
                  Luxury Essentials
                </span>
              </div>

              <h1 className="font-baskerville text-4xl sm:text-5xl md:text-6xl lg:text-7x5 uppercase leading-[0.95] tracking-wide text-[#986a4c] drop-shadow-xl">
                {title}
              </h1>

              <p className="mt-6 max-w-2xl text-sm md:text-lg leading-relaxed text-white/80">
                {subtitle}
              </p>

              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}