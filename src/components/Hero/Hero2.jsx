/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

/**
 * 3 DIV CINEMATIC HERO
 *
 * Layout:
 *
 * ┌──────────────────────┬──────────────────────┐
 * │                      │       DIV 2          │
 * │       DIV 1          ├──────────────────────┤
 * │      BIG MEDIA       │       DIV 3          │
 * │                      │                      │
 * └──────────────────────┴──────────────────────┘
 *
 * Features:
 * - ONLY 3 DIVS
 * - Images & videos interchange automatically
 * - Smooth cinematic transitions
 * - Slow zoom
 * - Floating movement
 * - Luxury overlays
 */

export default function Hero({
  videos = [],
  images = [],
  title = "Attar United",
  subtitle = "The distinguished home of Chopard, Hublot, Graff, Azza Fahmy, Gerald Charles, and Saint-Louis in the Kingdom of Saudi Arabia.",
}) {
  const ref = useRef(null);

  /* ----------------------------------------------------s
     MERGE ALL MEDIA
  ---------------------------------------------------- */
  const media = useMemo(() => {
    const vids = videos.map((src) => ({
      type: "video",
      src,
    }));

    const imgs = images.map((src) => ({
      type: "image",
      src,
    }));

    return [...vids, ...imgs];
  }, [videos, images]);

  /* ----------------------------------------------------
     ACTIVE MEDIA INDEXES
  ---------------------------------------------------- */
  const [indexes, setIndexes] = useState([0, 1, 2]);

  /* ----------------------------------------------------
     AUTO INTERCHANGE
  ---------------------------------------------------- */
  useEffect(() => {
    if (media.length <= 3) return;

    const interval = setInterval(() => {
      const shuffled = [...media]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((_, i) => i);

      setIndexes(shuffled);
    }, 5000);

    return () => clearInterval(interval);
  }, [media]);

  /* ----------------------------------------------------
     SCROLL ANIMATION
  ---------------------------------------------------- */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const smooth = (value) =>
    useSpring(value, {
      stiffness: 45,
      damping: 22,
      mass: 1,
    });

  const leftScale = smooth(
    useTransform(scrollYProgress, [0, 1], [1, 1.12])
  );

  const rightScale = smooth(
    useTransform(scrollYProgress, [0, 1], [1, 1.08])
  );

  const textOpacity = smooth(
    useTransform(scrollYProgress, [0, 0.5], [1, 0])
  );

  /* ----------------------------------------------------
     MEDIA CARD
  ---------------------------------------------------- */
  const MediaCard = ({ item, scale }) => {
    return (
      <motion.div
        style={{ scale }}
        className="relative h-full w-full overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={item.src}
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.05,
            }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            {item.type === "video" ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
                src={item.src}
              />
            ) : (
              <img
                src={item.src}
                className="h-full w-full object-cover"
                alt=""
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25" />

            {/* Luxury Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/10" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section
      ref={ref}
      className="relative h-[500vh] w-full bg-black"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* =========================================================
            3 DIV LAYOUT
        ========================================================== */}
        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          {/* =========================================================
              DIV 1 (BIG)
          ========================================================== */}
          <div className="h-full">
            {media[indexes[0]] && (
              <MediaCard
                item={media[indexes[0]]}
                scale={leftScale}
              />
            )}
          </div>

          {/* =========================================================
              RIGHT SIDE
          ========================================================== */}
          <div className="grid h-full grid-rows-2">
            {/* DIV 2 */}
            <div className="h-full">
              {media[indexes[1]] && (
                <MediaCard
                  item={media[indexes[1]]}
                  scale={rightScale}
                />
              )}
            </div>

            {/* DIV 3 */}
            <div className="h-full">
              {media[indexes[2]] && (
                <MediaCard
                  item={media[indexes[2]]}
                  scale={rightScale}
                />
              )}
            </div>
          </div>
        </div>

        {/* =========================================================
            GLOBAL OVERLAYS
        ========================================================== */}

        {/* Luxury Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]" />

        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/70" />

        {/* Grain */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* =========================================================
            TEXT CONTENT
        ========================================================== */}
        <motion.div
          style={{
            opacity: textOpacity,
          }}
          className="absolute bottom-0 left-0 z-20 w-full"
        >
          <div className="mx-auto max-w-7xl px-6 pb-20">
            <div className="max-w-3xl">
              <h1 className="uppercase font-baskerville text-[#986a4c] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-wide">
                {title}
              </h1>

              <p className="mt-6 max-w-2xl text-white/75 font-baskerville text-sm sm:text-base md:text-xl leading-relaxed">
                {subtitle}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}