import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import a1 from "../OurBrands/assets/C3.webp";/*chopard*/
import a2 from "../OurBrands/assets/H3.jpg";/*hublot*/
import a3 from "../OurBrands/assets/A3.webp";/*graff*/
import a4 from "../OurBrands/assets/ST (3).jpg";/*st.louis*/
import a5 from "../OurBrands/assets/A2.webp";/*azza fahmy*/
import a6 from "../OurBrands/assets/GC2.webp";/*gerald charles*/

const brands = [
  { name: "Chopard", image: a1 },
  { name: "Hublot", image: a2 },
  { name: "Graff", image: a3 },
  { name: "St Louis", image: a4 },
  { name: "Azza Fahmy", image: a5 },
  { name: "Gerald Charles", image: a6 },
];

// duplicate for seamless loop
const loopBrands = [...brands, ...brands];

export default function OurBrandsHero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={ref}
      className="relative bg-black text-white py-40 overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-baskerville text-center text-4xl md:text-6xl tracking-[0.25em] mb-6"
      >
        OUR LUXURY BRANDS
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="max-w-3xl mx-auto text-center text-gray-400 text-lg mb-28 leading-relaxed"
      >
        A refined selection of the world’s most prestigious watch and jewelry maisons.
      </motion.p>

      {/* ===== CAROUSEL WRAPPER (shows 4 cards only) ===== */}
      <div className="relative max-w-[1400px] mx-auto overflow-hidden">
        <motion.div
          style={{ scale }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-14 font-baskerville"
        >
          {loopBrands.map((brand, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -18, 0, 14, 0] }}
              transition={{
                duration: 7 + (index % 4),
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ y: -12 }}
              className="
                relative rounded-3xl overflow-hidden bg-neutral-900
                w-[300px] h-[460px]
                shadow-[0_30px_70px_rgba(0,0,0,0.65)]
                flex-shrink-0
              "
            >
              {/* Image */}
              <motion.img
                src={brand.image}
                alt={brand.name}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Brand name */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-xl xl:text-2xl tracking-[0.12em] text-white/90">
                  {brand.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
