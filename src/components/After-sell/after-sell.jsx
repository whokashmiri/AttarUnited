import { motion } from "framer-motion";

export default function AfterSell() {
  return (
    <section className="bg-black text-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT – TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-baskerville text-4xl md:text-6xl tracking-[0.25em] text-yellow-400 mb-10">
            AFTER SALES SERVICE
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            At Attar United, our relationship with time does not end at the moment of purchase.
            Our After-Sales Service reflects a commitment to excellence, precision, and care —
            ensuring every timepiece and jewel continues to perform with the same brilliance
            as the day it was acquired.
          </p>

          <p className="text-gray-500 text-lg leading-relaxed mt-6 max-w-xl">
            From certified maintenance and expert craftsmanship to personalized client care,
            each service experience is guided by heritage, trust, and uncompromising standards.
          </p>

          {/* GOLD LINE */}
          <div className="mt-10 h-px w-40 bg-gradient-to-r from-yellow-400 to-transparent" />
        </motion.div>

        {/* RIGHT – IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl shadow-[0_0_120px_rgba(255,215,120,0.15)]" />

          <motion.img
            src="https://johantgenjewelers.net/wp-content/uploads/2017/06/IMG_9442.jpg"
            alt="After Sales Service"
            className="
              relative z-10
              w-full h-[70vh]
              object-cover
              rounded-2xl
              shadow-[0_40px_120px_rgba(0,0,0,0.9)]
            "
            whileHover={{
              scale: 1.05,
              rotateY: 4,
              rotateX: -2,
            }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

      </div>
    </section>
  );
}
