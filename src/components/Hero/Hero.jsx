import React, { useMemo, useRef } from "react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

/**
 * Hero (Improved + Fixed)
 * - More scroll space so effect stays visible longer
 * - Sticky hero (stays in view while you scroll through the section)
 * - Background: smooth zoom + gentle drift + tiny rotate
 * - Title: bigger + parallax X (left -> right) + tiny Y drift
 * - "Less is more": clean vignette + fade overlays
 *
 * Note:
 * - This version FIXES the error "brightness.to is not a function"
 *   by using useMotionTemplate instead of .to()
 *
 * Usage:
 * <Hero
 *   bg="/images/attar-hero.jpg"
 *   title="Attar United"
 *   subtitle="Official Retailer of Chopard, Hublot, Graff..."
 * />
 */

export default function Hero({
  bg = "https://images.pexels.com/photos/4295004/pexels-photo-4295004.jpeg",
  title = "Attar United",
  subtitle = "Official Retailer of Chopard, Hublot, Graff, Azza Fahmy, Gerald Charles and Saint Louis in Saudi Arabia.",
}) {
  const ref = useRef(null);

  // Track scroll progress relative to THIS section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // ---- Raw transforms (premium, not too aggressive)
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1.0, 1.32]);
  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const rotateRaw = useTransform(scrollYProgress, [0, 1], ["0deg", "0.8deg"]);

  // Optional brightness (kept subtle)
  const brightnessRaw = useTransform(scrollYProgress, [0, 1], [0.98, 1.06]);

  const titleXRaw = useTransform(scrollYProgress, [0, 1], ["-22%", "22%"]);
  const titleYRaw = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const subOpacityRaw = useTransform(scrollYProgress, [0, 0.35, 1], [1, 1, 0.72]);
  const textLiftRaw = useTransform(scrollYProgress, [0, 1], [0, -8]);

  // ---- Springs (smooth, no jerks)
  const springCfg = useMemo(() => ({ stiffness: 85, damping: 26, mass: 0.95 }), []);

  const scale = useSpring(scaleRaw, springCfg);
  const bgY = useSpring(yRaw, springCfg);
  const rotate = useSpring(rotateRaw, { stiffness: 70, damping: 28, mass: 1 });

  const brightness = useSpring(brightnessRaw, {
    stiffness: 60,
    damping: 30,
    mass: 1.1,
  });

  const titleX = useSpring(titleXRaw, { stiffness: 80, damping: 24, mass: 1 });
  const titleY = useSpring(titleYRaw, { stiffness: 80, damping: 24, mass: 1 });

  const subOpacity = useSpring(subOpacityRaw, { stiffness: 60, damping: 30, mass: 1.1 });
  const textLift = useSpring(textLiftRaw, { stiffness: 70, damping: 28, mass: 1 });

  // ✅ Correct Framer Motion v10+ way to build CSS filter from MotionValue
  const filter = useMotionTemplate`brightness(${brightness})`;

  return (
    // More scrolling space: tweak between 160vh–220vh as you like
    <section ref={ref} className="relative h-[180vh] w-full overflow-hidden bg-black">
      {/* Sticky viewport so hero stays visible longer while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background motion layer */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{
            y: bgY,
            scale,
            rotate,
            filter,
          }}
        >
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${bg})` }}
          />
        </motion.div>

        {/* Less-is-more overlays (clean) */}
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_35%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/10 to-black/55" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-screen max-w-300 items-end px-6 pb-20">
          <motion.div className="w-full" style={{ y: textLift }}>
            {/* Bigger title */}
            <motion.h1
              className="
                select-none text-white/95 font-serif
                text-6xl sm:text-7xl md:text-8xl lg:text-9xl
                leading-[0.92] tracking-tight
              "
              style={{ x: titleX, y: titleY }}
            >
              {title}
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              className="mt-6 max-w-190 text-white/75 text-sm sm:text-base md:text-lg leading-relaxed"
              style={{ opacity: subOpacity }}
            >
              {subtitle}
            </motion.p>

            {/* Minimal scroll hint */}
            <motion.div
              className="mt-10 flex items-center gap-3 text-white/65"
              style={{ opacity: subOpacity }}
            >
              <span className="inline-block h-px w-12 bg-white/35" />
              <span className="text-xs tracking-[0.35em] uppercase">Scroll</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Optional top fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-linear-to-b from-black/35 to-transparent" />
      </div>

      {/* Spacer end (helps sticky feel smooth) */}
      <div className="h-px" />
    </section>
  );
}
