import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from "framer-motion";
import { useRef } from "react";

import a1 from "../OurBrands/assets/C3.webp";
import a2 from "../OurBrands/assets/H3.jpg";
import a3 from "../OurBrands/assets/A3.webp";
import a4 from "../OurBrands/assets/ST (3).jpg";
import a5 from "../OurBrands/assets/A2.webp";
import a6 from "../OurBrands/assets/GC2.webp";

const brands = [
  { name: "Chopard", image: a1 },
  { name: "Hublot", image: a2 },
  { name: "Graff", image: a3 },
  { name: "St Louis", image: a4 },
  { name: "Azza Fahmy", image: a5 },
  { name: "Gerald Charles", image: a6 },
];

// duplicated for infinite loop
const loopBrands = [...brands, ...brands];

// layout constants
const CARD_WIDTH = 300;
const GAP = 56;
const STEP = CARD_WIDTH + GAP;
const TOTAL_WIDTH = STEP * brands.length;

export default function OurBrandsHero() {
  const ref = useRef(null);

  // START FROM CENTER (important)
  const x = useMotionValue(-TOTAL_WIDTH / 2);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // HARD LOOP — NEVER ENDS
  const wrapX = (value) => {
    if (value <= -TOTAL_WIDTH) return value + TOTAL_WIDTH;
    if (value >= 0) return value - TOTAL_WIDTH;
    return value;
  };

  const moveLeft = () => {
    animate(x, wrapX(x.get() + STEP), {
      type: "spring",
      stiffness: 140,
      damping: 22,
    });
  };

  const moveRight = () => {
    animate(x, wrapX(x.get() - STEP), {
      type: "spring",
      stiffness: 140,
      damping: 22,
    });
  };

  return (
    <section
      ref={ref}
      className="relative bg-black text-white py-40 overflow-hidden"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-baskerville text-center text-4xl md:text-6xl tracking-[0.25em] mb-6"
      >
        OUR LUXURY BRANDS
      </motion.h2>

      {/* SUBTITLE */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="max-w-3xl mx-auto text-center text-gray-400 text-lg mb-24"
      >
        A refined selection of the world’s most prestigious watch and jewelry maisons.
      </motion.p>

      {/* LEFT BUTTON */}
      <LuxuryArrow direction="left" onClick={moveLeft} />

      {/* RIGHT BUTTON */}
      <LuxuryArrow direction="right" onClick={moveRight} />

      {/* CAROUSEL */}
      <div className="relative max-w-[1400px] mx-auto overflow-hidden">
        <motion.div
          style={{ x, scale }}
          className="flex gap-14 font-baskerville"
        >
          {loopBrands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -12 }}
              className="
                relative w-[300px] h-[460px]
                rounded-3xl overflow-hidden
                bg-neutral-900 flex-shrink-0
                shadow-[0_30px_70px_rgba(0,0,0,0.65)]
              "
            >
              <motion.img
                src={brand.image}
                alt={brand.name}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

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

/* ===== LUXURY BUTTON COMPONENT ===== */
function LuxuryArrow({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        absolute top-1/2 -translate-y-1/2 z-20
        ${direction === "left" ? "left-6" : "right-6"}
        text-yellow-300/60
        text-6xl
        font-light
        tracking-widest
        transition-all duration-300
        hover:text-yellow-300
        hover:scale-110
        active:scale-95
        select-none
      `}
    >
      {direction === "left" ? "‹" : "›"}
    </button>
  );
}
