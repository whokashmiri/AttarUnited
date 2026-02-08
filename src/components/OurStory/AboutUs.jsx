/* eslint-disable no-unused-vars */
import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";


function StrokeFillTitle({ text = "ATTAR UNITED", progress }) {
  const fillW = useSpring(useTransform(progress, [0, 1], ["0%", "100%"]), {
    stiffness: 70,
    damping: 24,
    mass: 1,
  });

  const strokeOpacity = useSpring(useTransform(progress, [0, 1], [1, 0.35]), {
    stiffness: 60,
    damping: 26,
    mass: 1,
  });

  const glowOpacity = useSpring(useTransform(progress, [0, 0.6, 1], [0, 0.18, 0.06]), {
    stiffness: 55,
    damping: 28,
    mass: 1.1,
  });

  return (
    <div className="relative w-full">
      <motion.div
        className="pointer-events-none absolute -inset-x-8 -inset-y-6 blur-2xl"
        style={{
          opacity: glowOpacity,
          background:
            "radial-gradient(60% 70% at 30% 50%, rgba(255,255,255,0.22), transparent 60%)",
        }}
      />

      <svg className="block w-full" viewBox="0 0 1200 180" preserveAspectRatio="xMinYMid meet" aria-label={text}>
        {/* Stroke layer */}
        <motion.text
          x="0"
          y="135"
          style={{ opacity: strokeOpacity }}
          className="select-none"
          fill="transparent"
          stroke="rgba(255,255,255,0.92)"
          strokeWidth="2"
          strokeLinejoin="round"
          fontFamily='ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
          fontSize="120"
          letterSpacing="0.06em"
        >
          {text}
        </motion.text>

        {/* Fill reveal mask */}
        <mask id="reveal">
          <motion.rect x="0" y="0" height="200" fill="white" style={{ width: fillW }} />
        </mask>

        <text
          x="0"
          y="135"
          className="select-none "
          fill="rgb(152, 106, 76)"
          fontFamily='ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
          fontSize="120"
          letterSpacing="0.06em"
          mask="url(#reveal)"
        >
          {text}
        </text>
      </svg>
    </div>
  );
}

export default function AboutUs() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 35%"],
  });

  const springCfg = useMemo(() => ({ stiffness: 70, damping: 26, mass: 1 }), []);

  const contentY = useSpring(useTransform(scrollYProgress, [0, 1], [22, 0]), springCfg);
  const contentOpacity = useSpring(useTransform(scrollYProgress, [0, 0.35, 1], [0, 1, 1]), {
    stiffness: 60,
    damping: 28,
    mass: 1,
  });

  const lineW = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 60,
    damping: 22,
    mass: 0.9,
  });

  const shimmerX = useSpring(useTransform(scrollYProgress, [0, 1], ["-30%", "120%"]), {
    stiffness: 55,
    damping: 26,
    mass: 1.1,
  });

  const variants = {
    wrap: { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } },
    item: {
      hidden: { y: 14, opacity: 0, filter: "blur(6px)" },
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
      <div className="relative min-h-[92vh] w-full">
        {/* Premium subtle lighting */}

      {/* Premium lighting */}
      {/* <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_60%_at_50%_18%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/4 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black to-transparent" /> */}

        <motion.div
          className="relative z-10 mx-auto flex min-h-[92vh] max-w-300 items-end px-6 pb-24"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.div
            className="w-full max-w-245"
            variants={variants.wrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            {/* Eyebrow */}
            <motion.p
              variants={variants.item}
              className="text-xs sm:text-sm tracking-[0.38em] uppercase text-white/60"
            >
              Official Retailer in Saudi Arabia
            </motion.p>

            {/* Title */}
            <motion.div variants={variants.item} className="mt-5 text-[#986a4c]">
              <StrokeFillTitle text="ATTAR UNITED" progress={scrollYProgress} />
            </motion.div>

            {/* Divider */}
            <motion.div variants={variants.item} className="mt-8 relative h-px w-full max-w-140">
              <div className="absolute inset-0 bg-white/10" />
              <motion.div className="absolute left-0 top-0 h-px bg-white/55" style={{ width: lineW }} />
              <motion.div
                className="absolute -top-1.5 h-3 w-24 rounded-full blur-md opacity-45"
                style={{
                  x: shimmerX,
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
                }}
              />
            </motion.div>

            {/* ✅ Royal lead block (no uppercase, nicer rhythm) */}
            <motion.div variants={variants.item} className="mt-10 max-w-215">
              <div className="relative pl-6 sm:pl-7">
                {/* Accent line (royal feel) */}
                <div className="absolute left-0 top-1 bottom-1 w-px bg-white/25" />

                <p className="font-baskerville text-white/70 text-base sm:text-lg leading-relaxed tracking-[0.01em]">
                  Official Retailer of Chopard, Hublot, Graff, Azza Fahmy, Gerald Charles and Saint Louis in Saudi Arabia.
                </p>

                <p className="mt-6 font-baskerville text-white/70 text-base sm:text-lg leading-[1.85]">
                  Attar United offers an exquisite array of brilliantly crafted watches for those looking for the unique
                  and incomparable.
                </p>

                <p className="mt-4 font-baskerville text-white/65 text-base sm:text-lg leading-[1.85]">
                  Over the past decade, Attar United has provided a unique and personalized customer experience that has
                  changed the way buyers in the Kingdom of Saudi Arabia shop for timeless pieces.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
