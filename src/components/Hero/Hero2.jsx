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

export default function Hero({
  videos = [],
  images = [],
  title = "Attar United",
  subtitle = "The distinguished home of Chopard, Hublot, Graff, Azza Fahmy, Gerald Charles, and Saint-Louis in the Kingdom of Saudi Arabia.",
}) {
  const ref = useRef(null);

  /* =========================================================
     MERGE MEDIA
  ========================================================= */
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

  /* =========================================================
     RANDOM ACTIVE INDEXES
  ========================================================= */
  const [indexes, setIndexes] = useState([0, 1, 2]);

  useEffect(() => {
    if (media.length < 3) return;

    const generateIndexes = () => {
      const arr = [...Array(media.length).keys()]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      setIndexes(arr);
    };

    generateIndexes();

    const interval = setInterval(generateIndexes, 4000);

    return () => clearInterval(interval);
  }, [media]);

  /* =========================================================
     SCROLL
  ========================================================= */
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

  const leftScale = smooth(
    useTransform(scrollYProgress, [0, 1], [1, 1.1])
  );

  const rightScale = smooth(
    useTransform(scrollYProgress, [0, 1], [1, 1.05])
  );

  const textOpacity = smooth(
    useTransform(scrollYProgress, [0, 0.5], [1, 0])
  );

  /* =========================================================
     MEDIA CARD
  ========================================================= */
  const MediaCard = ({ item, scale }) => {
    if (!item) return null;

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
              scale: 1.05,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.03,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            {item.type === "video" ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="h-full w-full object-cover"
                src={item.src}
              />
            ) : (
              <img
                src={item.src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section
      ref={ref}
      className="relative h-[250vh] w-full bg-black"
    >
      {/* =========================================================
          STICKY CONTAINER
      ========================================================== */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* =========================================================
            GRID
        ========================================================== */}
        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          {/* LEFT BIG */}
          <div className="relative h-full">
            <MediaCard
              item={media[indexes[0]]}
              scale={leftScale}
            />
          </div>

          {/* RIGHT */}
          <div className="grid h-full grid-rows-2">
            <div className="relative h-full">
              <MediaCard
                item={media[indexes[1]]}
                scale={rightScale}
              />
            </div>

            <div className="relative h-full">
              <MediaCard
                item={media[indexes[2]]}
                scale={rightScale}
              />
            </div>
          </div>
        </div>

        {/* =========================================================
            OVERLAYS
        ========================================================== */}

        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />

        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]" />

        {/* =========================================================
            TEXT
        ========================================================== */}
        <motion.div
          style={{
            opacity: textOpacity,
          }}
          className="absolute bottom-0 left-0 z-20 w-full"
        >
          <div className="mx-auto max-w-7xl px-6 pb-20">
            <div className="max-w-3xl">
              <h1 className="font-baskerville uppercase text-[#986a4c] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-wide">
                {title}
              </h1>

              <p className="mt-6 max-w-2xl text-sm sm:text-base md:text-xl leading-relaxed text-white/75 font-baskerville">
                {subtitle}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}