import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import a1 from "../OurBrands/assets/C3.webp";
import a2 from "../OurBrands/assets/H3.jpg";
import a3 from "../OurBrands/assets/A3.webp";
import a4 from "../OurBrands/assets/ST (3).jpg";
import a5 from "../OurBrands/assets/A2.webp";
import a6 from "../OurBrands/assets/GC2.webp";

const brands = [
  {
    name: "Chopard",
    image: a1,
    desc:
      "A legacy of Swiss precision and refined elegance, Chopard blends haute horlogerie with exceptional jewelry craftsmanship."
  },
  {
    name: "Hublot",
    image: a2,
    desc:
      "Bold, innovative, and unapologetically modern — Hublot redefines luxury with fusion materials and daring design."
  },
  {
    name: "Graff",
    image: a3,
    desc:
      "Home to the world’s most extraordinary diamonds, Graff transforms rare stones into timeless works of art."
  },
  {
    name: "St Louis",
    image: a4,
    desc:
      "Centuries of crystal mastery, where French heritage meets luminous artistry and refined tradition."
  },
  {
    name: "Azza Fahmy",
    image: a5,
    desc:
      "A poetic dialogue between heritage and modernity, inspired by Middle Eastern culture and symbolism."
  },
  {
    name: "Gerald Charles",
    image: a6,
    desc:
      "Architectural watchmaking with a bold spirit, founded on innovation, curves, and mechanical excellence."
  }
];

export default function CrazyBrands() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="relative bg-black text-white overflow-hidden py-40"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center font-baskerville text-4xl md:text-6xl tracking-[0.3em] mb-32"
      >
        OUR MAISON SELECTION
      </motion.h2>

      {/* Brands – SCROLL ONE BY ONE */}
      <div className="flex flex-col gap-48 max-w-7xl mx-auto px-10">

      {brands.map((brand, index) => {
  const itemRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 80%", "end 20%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 0.95]);

  return (
    <motion.div
      ref={itemRef}
      key={index}
      style={{ opacity, y }}
      className={`
        flex flex-col lg:flex-row items-center gap-24
        min-h-screen
        ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}
      `}
    >
      {/* IMAGE */}
      <motion.div
        style={{ scale }}
        className="
          relative
          w-[420px] h-[620px]
          xl:w-[520px] xl:h-[760px]
          rounded-[2.5rem]
          overflow-hidden
        "
      >
        {/* gold glow */}
        <div className="absolute -inset-10 bg-gradient-to-tr from-yellow-500/40 via-yellow-300/10 to-transparent blur-[120px]" />

        <motion.img
          src={brand.image}
          alt={brand.name}
          className="relative z-10 w-full h-full object-cover rounded-[2.5rem]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-20" />
      </motion.div>

      {/* TEXT */}
      <motion.div
        style={{ opacity }}
        className="max-w-lg"
      >
        <h3 className="font-baskerville text-4xl xl:text-5xl tracking-wide mb-8">
          {brand.name}
        </h3>

        <p className="text-gray-400 text-xl leading-relaxed">
          {brand.desc}
        </p>

        <div className="mt-10 h-px w-32 bg-gradient-to-r from-yellow-400 to-transparent" />
      </motion.div>
    </motion.div>
  );
})}

      </div>
    </section>
  );
} 