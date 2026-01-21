/* eslint-disable no-unused-vars */
import React, { useMemo, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

export default function Hero({
  bg = "https://images.pexels.com/photos/4295004/pexels-photo-4295004.jpeg",
  title = "Attar United",
  subtitle = "The distinguished home of Chopard, Hublot, Graff, Azza Fahmy, Gerald Charles, and Saint‑Louis in the Kingdom of Saudi Arabia — your official destination for the world’s most exceptional luxury maisons..",
}) {
  const ref = useRef(null);

  // With h-screen, we still want scroll-based motion.
  // We track progress across the viewport using the target section.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // progress as you scroll past the hero
  });

  // ✅ Default a bit zoomed OUT -> zoom IN when scrolling
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1.0, 1.32]);
  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const rotateRaw = useTransform(scrollYProgress, [0, 1], ["0deg", "0.6deg"]);
  const brightnessRaw = useTransform(scrollYProgress, [0, 1], [0.98, 1.06]);

  const titleXRaw = useTransform(scrollYProgress, [0, 1], ["-10%", "16%"]);


  const titleYRaw = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  const subOpacityRaw = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 0.75]);
  const textLiftRaw = useTransform(scrollYProgress, [0, 1], [0, -10]);

  // Springs (smooth)
  const springCfg = useMemo(() => ({ stiffness: 85, damping: 26, mass: 0.95 }), []);
  const scale = useSpring(scaleRaw, springCfg);
  const bgY = useSpring(yRaw, springCfg);
  const rotate = useSpring(rotateRaw, { stiffness: 70, damping: 28, mass: 1 });

  const brightness = useSpring(brightnessRaw, { stiffness: 60, damping: 30, mass: 1.1 });
  const filter = useMotionTemplate`brightness(${brightness})`;

  const titleX = useSpring(titleXRaw, { stiffness: 80, damping: 24, mass: 1 });
  const titleY = useSpring(titleYRaw, { stiffness: 80, damping: 24, mass: 1 });
  const subOpacity = useSpring(subOpacityRaw, { stiffness: 60, damping: 30, mass: 1.1 });
  const textLift = useSpring(textLiftRaw, { stiffness: 70, damping: 28, mass: 1 });

  return (
    // ✅ Full screen hero (no extra black screen area)
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background motion layer */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY, scale, rotate, filter }}
      >
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${bg})` }}
        />
      </motion.div>

      {/* Clean overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_35%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/10 to-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-300 items-end px-6 pb-20">
        <motion.div className="w-full" style={{ y: textLift }}>
          <motion.h1
            className=" uppercase
              select-none text-[#986a4c] font-serif
              text-6xl sm:text-7xl md:text-8xl lg:text-9xl
              leading-[0.92] tracking-tight
            "
            style={{ x: titleX, y: titleY }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-190 text-white/75 font-serif text-sm sm:text-base md:text-lg leading-relaxed"
            style={{ opacity: subOpacity }}
          >
            {subtitle}
          </motion.p>

       
        </motion.div>
      </div>

      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-linear-to-b from-black/35 to-transparent" />
    </section>
  );
}
