/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import image from "../../Home/assets/Hublot.jpg";

export default function Hero({
  
  title = "Attar United",
  subtitle = "The distinguished home of Chopard, Hublot, Graff, Azza Fahmy, Gerald Charles, and Saint-Louis in the Kingdom of Saudi Arabia.",
}) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_35%,rgba(255,255,255,0.03),transparent_60%)]" />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/20 via-black/5 to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-20">
        <div>
          <h1 className="uppercase font-baskerville text-[#986a4c] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-white/75 font-baskerville text-sm sm:text-base md:text-xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

    </section>
  );
}