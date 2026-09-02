/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import heroVideo from "../OurBrands/assets/hublot.mp4";

export default function Hero({
  title = "Attar United",
  subtitle = "A legacy of excellence, bringing together the world's most celebrated names in fine watchmaking, jewelry, and luxury craftsmanship.",
}) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* Background Video */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Luxury Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_35%,rgba(255,255,255,0.04),transparent_60%)]" />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/20 via-black/5 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-20 md:pb-24">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-baskerville text-4xl uppercase tracking-wide text-[#986a4c] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mt-6 max-w-3xl font-baskerville text-sm leading-relaxed text-white/80 sm:text-base md:text-xl"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}