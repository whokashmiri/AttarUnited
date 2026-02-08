/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring as framerUseSpring,
} from "framer-motion";

/**
 * SCROLL CINEMATIC HERO
 * - Sticky hero
 * - Sequential image cross-fade
 * - Slow zoom on active image
 * - Supports any number of images
 */

export default function Hero({
  images = [],
  title = "Attar United",
  subtitle = "The distinguished home of Chopard, Hublot, Graff, Azza Fahmy, Gerald Charles, and Saint-Louis in the Kingdom of Saudi Arabia.",
}) {
  const ref = useRef(null);

  /* --------------------------------------------
   Scroll progress for entire hero section
  --------------------------------------------- */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /* --------------------------------------------
   Spring helper (smooth cinematic motion)
  --------------------------------------------- */
  const spring = (value) =>
    framerUseSpring(value, {
      stiffness: 70,
      damping: 28,
      mass: 1,
    });

  /* --------------------------------------------
   Config
  --------------------------------------------- */
  const zoomFactor = 1.08;
  const imageCount = images.length || 1;
  const segment = 1 / imageCount;

  /* --------------------------------------------
   Build animation layers dynamically
  --------------------------------------------- */
  const layers = images.map((img, index) => {
    const start = index * segment;
    const fadeIn = start + segment * 0.25;
    const fadeOut = start + segment * 0.85;

    const opacity = spring(
      useTransform(
        scrollYProgress,
        [start, fadeIn, fadeOut, start + segment],
        [index === 0 ? 1 : 0, 1, 1, 0]
      )
    );

    const scale = spring(
      useTransform(scrollYProgress, [start, start + segment], [1, zoomFactor])
    );

    return {
      img,
      opacity,
      scale,
      zIndex: imageCount - index,
    };
  });

  /* --------------------------------------------
   Render
  --------------------------------------------- */
  return (
    <section
      ref={ref}
      className="relative h-[800vh] w-full bg-black"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* ==========================================
           IMAGE STACK
        =========================================== */}
        <div className="absolute inset-0">
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 will-change-transform"
              style={{
                opacity: layer.opacity,
                scale: layer.scale,
                zIndex: layer.zIndex,
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${layer.img})`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* ==========================================
           CINEMATIC OVERLAYS
        =========================================== */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_35%,rgba(255,255,255,0.03),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/20 via-black/5 to-black/40" />

        {/* ==========================================
           HERO TEXT CONTENT
        =========================================== */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-20">
          <div>
            <h1 className="uppercase text-[#986a4c] font-baskerville text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.92]">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-white/75 font-baskerville text-sm sm:text-base md:text-lg">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
