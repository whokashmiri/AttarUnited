/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring as framerUseSpring } from "framer-motion";

export default function Hero({
  images = [],
  title = "Attar United",
  subtitle = "The distinguished home of Chopard, Hublot, Graff, Azza Fahmy, Gerald Charles, and Saint-Louis in the Kingdom of Saudi Arabia.",
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const spring = (v, cfg = {}) =>
    framerUseSpring(v, { stiffness: 70, damping: 28, mass: 1, ...cfg });

  // Zoom factor for the active image
  const zoomFactor = 1.12;

  // Define transforms for each image individually (sequential fade in/out)
  const o1 = spring(useTransform(scrollYProgress, [0, 0.16, 1], [1, 1, 0]));
  const s1 = spring(useTransform(scrollYProgress, [0, 0.16], [1, zoomFactor]));

  const o2 = spring(useTransform(scrollYProgress, [0, 0.16, 0.32, 1], [0, 0, 1, 0]));
  const s2 = spring(useTransform(scrollYProgress, [0.16, 0.32], [1, zoomFactor]));

  const o3 = spring(useTransform(scrollYProgress, [0, 0.32, 0.48, 1], [0, 0, 1, 0]));
  const s3 = spring(useTransform(scrollYProgress, [0.32, 0.48], [1, zoomFactor]));

  const o4 = spring(useTransform(scrollYProgress, [0, 0.48, 0.64, 1], [0, 0, 1, 0]));
  const s4 = spring(useTransform(scrollYProgress, [0.48, 0.64], [1, zoomFactor]));

  const o5 = spring(useTransform(scrollYProgress, [0, 0.64, 0.80, 1], [0, 0, 1, 0]));
  const s5 = spring(useTransform(scrollYProgress, [0.64, 0.80], [1, zoomFactor]));

  const o6 = spring(useTransform(scrollYProgress, [0, 0.80, 1], [0, 0, 1]));
  const s6 = spring(useTransform(scrollYProgress, [0.80, 1], [1, zoomFactor]));

  const layers = [
    { img: images[0], opacity: o1, scale: s1 },
    { img: images[1], opacity: o2, scale: s2 },
    { img: images[2], opacity: o3, scale: s3 },
    { img: images[3], opacity: o4, scale: s4 },
    { img: images[4], opacity: o5, scale: s5 },
    { img: images[5], opacity: o6, scale: s6 },
  ];

  return (
    <section ref={ref} className="relative h-[600vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* IMAGE STACK */}
        <div className="absolute inset-0">
          {layers.map(
            (layer, i) =>
              layer.img && (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  style={{
                    opacity: layer.opacity,
                    scale: layer.scale,
                    zIndex: layer.zIndex,
                  }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${layer.img})` }}
                  />
                </motion.div>
              )
          )}
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_35%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/10 to-black/55" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex h-full max-w-300 items-end px-6 pb-20">
          <div>
            <h1 className="uppercase text-[#986a4c] font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.92]">
              {title}
            </h1>
            <p className="mt-6 max-w-190 text-white/75 font-serif text-sm sm:text-base md:text-lg">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
