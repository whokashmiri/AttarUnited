/* eslint-disable no-unused-vars */
import React, { useMemo, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

/**
 * AttarUnitedPremiumSection (Tailwind + Framer Motion)
 * Premium / royal feel:
 * - Cinematic scroll reveal
 * - Parallax background drift + subtle zoom
 * - Elegant line + shimmer accent
 * - Staggered typography entrance
 * - Smooth (spring) motion everywhere
 *
 * Drop into any page. Works great under your Navbar.
 */

export default function AboutUs({
  bg = "https://images.pexels.com/photos/4295004/pexels-photo-4295004.jpeg",
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"], // reveal as it enters; settles mid-way
  });

  const springCfg = useMemo(() => ({ stiffness: 70, damping: 26, mass: 1 }), []);

  // Background: tiny parallax + tiny zoom (very premium)
  const bgScale = useSpring(useTransform(scrollYProgress, [0, 1], [1.06, 1.16]), springCfg);
  const bgY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "10%"]), springCfg);

  // Subtle brightness only (no heavy blur)
  const brightness = useSpring(useTransform(scrollYProgress, [0, 1], [0.95, 1.05]), {
    stiffness: 55,
    damping: 28,
    mass: 1.05,
  });
  const filter = useMotionTemplate`brightness(${brightness})`;

  // Content motion
  const contentY = useSpring(useTransform(scrollYProgress, [0, 1], [26, 0]), springCfg);
  const contentOpacity = useSpring(useTransform(scrollYProgress, [0, 0.35, 1], [0, 1, 1]), {
    stiffness: 60,
    damping: 28,
    mass: 1,
  });

  const titleX = useSpring(useTransform(scrollYProgress, [0, 1], [-22, 0]), {
    stiffness: 70,
    damping: 24,
    mass: 0.95,
  });

  const lineW = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 60,
    damping: 22,
    mass: 0.9,
  });

  const shimmerX = useSpring(useTransform(scrollYProgress, [0, 1], ["-40%", "120%"]), {
    stiffness: 55,
    damping: 26,
    mass: 1.1,
  });

  const cardScale = useSpring(useTransform(scrollYProgress, [0, 1], [0.985, 1.0]), {
    stiffness: 60,
    damping: 24,
    mass: 1,
  });

  const variants = {
    wrap: {
      hidden: {},
      show: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
    },
    item: {
      hidden: { y: 16, opacity: 0, filter: "blur(6px)" },
      show: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      },
    },
  };

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-black">
      {/* Background block */}
      <div className="relative h-[92vh] min-h-170 w-full">
        <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale, filter }}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
          />
        </motion.div>

        {/* Premium overlays (minimal + royal) */}
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/25 to-black/70" />
        <div className="absolute inset-0 [background:radial-gradient(70%_60%_at_50%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-black/55 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/75 to-transparent" />

        {/* Content */}
        <motion.div
          className="relative z-10 mx-auto flex h-full max-w-300 items-end px-6 pb-20"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.div
            className="w-full max-w-230"
            variants={variants.wrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            {/* Eyebrow */}
            <motion.p
              variants={variants.item}
              className="text-[11px] sm:text-xs tracking-[0.38em] uppercase text-white/70"
            >
              Official Retailer in Saudi Arabia
            </motion.p>

            {/* Title */}
            <motion.h2
              variants={variants.item}
              className="mt-4 font-serif text-white/95 leading-[0.9] tracking-tight
                         text-5xl sm:text-6xl md:text-7xl lg:text-[86px]"
              style={{ x: titleX }}
            >
              ATTAR UNITED
            </motion.h2>

            {/* Royal divider (animated line + shimmer) */}
            <motion.div variants={variants.item} className="mt-7 relative h-px w-full max-w-130">
              <div className="absolute inset-0 bg-white/15" />
              <motion.div className="absolute left-0 top-0 h-px bg-white/55" style={{ width: lineW }} />
              <motion.div
                className="absolute -top-1.5 h-3 w-24 rounded-full blur-md opacity-60"
                style={{
                  x: shimmerX,
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent)",
                }}
              />
            </motion.div>

            {/* Lead */}
            <motion.p
              variants={variants.item}
              className="mt-7 text-white/80 text-base sm:text-lg leading-relaxed max-w-[840px]"
            >
              Official Retailer of Chopard, Hublot, Graff, Azza Fahmy, Gerald Charles and Saint Louis
              in Saudi Arabia.
            </motion.p>

            {/* Body */}
            <motion.div variants={variants.item} className="mt-6 space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
              <p>
                Attar United offers an exquisite array of brilliantly crafted watches for those looking for the
                unique and incomparable.
              </p>
              <p>
                Over the past decade, Attar United has provided a unique and personalized customer experience that
                has changed the way buyers in the Kingdom of Saudi Arabia shop for timeless pieces.
              </p>
            </motion.div>

            {/* Premium actions */}
            <motion.div variants={variants.item} className="mt-10 flex flex-wrap items-center gap-3">
              <button
                className="rounded-full bg-white text-black px-6 py-3 text-sm font-semibold tracking-wide
                           hover:bg-white/90 transition focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Explore Our Brands
              </button>

              <button
                className="rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/90
                           px-6 py-3 text-sm font-semibold tracking-wide hover:bg-white/10 transition
                           focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                Boutiques Locator
              </button>
            </motion.div>

            {/* Floating premium card (subtle) */}
            <motion.div
              variants={variants.item}
              className="mt-12 inline-flex"
              style={{ scale: cardScale }}
            >
              <div
                className="rounded-2xl border border-white/12 bg-white/6 backdrop-blur-xl
                           px-5 py-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
              >
                <p className="text-white/80 text-xs tracking-[0.3em] uppercase">Concierge</p>
                <p className="mt-2 text-white/90 text-sm">
                  Personalized guidance for luxury watches and jewelry.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
