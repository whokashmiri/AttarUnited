import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const timeline = [
  {
    year: "2012",
    title: "Where Passion Became Purpose",
    text:
      "Attar United was born from a profound appreciation for time, beauty, and craftsmanship. Guided by heritage and inspired by excellence, Omar and Mohammed Saddik Attar transformed a lifelong passion into a vision—one that would redefine the luxury watch and jewelry experience in Saudi Arabia."
  },
  {
    year: "2013-2015",
    title: "Introducing Timeless Elegance",
    text:
      "With the arrival of Chopard in the Kingdom, Attar United began shaping a new language of luxury—where intimacy, artistry, and personal connection took center stage. These early years laid the foundation for enduring partnerships with the world’s most prestigious maisons, establishing Attar United as a trusted name in high watchmaking and fine jewelry."
  },
  {
    year: "2016",
    title: "A Moment That Spoke to the World",
    text:
      "The opening of Hublot’s largest boutique globally marked a defining chapter in Attar United’s journey. More than a milestone, it was a statement of confidence—reflecting Saudi Arabia’s rising presence on the global luxury stage and Attar United’s role as a partner capable of delivering excellence at scale."
  },
  {
    year: "2017-2019",
    title: "Strengthening the Pillars of Prestige",
    text:
      "During this defining period, Attar United focused on strengthening its core maisons, Chopard and Hublot, expanding their presence across the Kingdom’s key luxury destinations. With boutiques established in Riyadh, Al Khobar, and Jeddah, these years were dedicated to deepening brand partnerships, refining the client experience, and creating immersive spaces that reflected the distinct identities of each maison. This strategic expansion laid the foundation for Attar United’s next era of iconic brand introductions."
  },
  {
    year: "2020",
    title: "– Icons Aligned –",
    text:
      "In a year that tested resilience worldwide, Attar United reached new heights. The unveiling of Chopard’s flagship boutique in Riyadh and the introduction of Graff to Saudi Arabia marked a powerful alignment of vision, prestige, and trust—positioning Attar United among the region’s most distinguished luxury retailers."
  },
  {
    year: "2021",
    title: "The Poetry of Crystal",
    text:
      "Attar United expanded its universe of craftsmanship with the arrival of Saint Louis. Bringing centuries of French crystal artistry to the Kingdom, this chapter added a new dimension of refinement and celebrated beauty beyond timepieces."
  },
  {
    year: "2023",
    title: "Honoring Artistry and Independence",
    text:
      "A year defined by creative expression and individuality, Attar United became the exclusive retailer for Azza Fahmy in Saudi Arabia—celebrating heritage through contemporary design. In the same year, the partnership with Gerald Charles led to the launch of the world’s first mono-brand boutique, reaffirming a commitment to independent haute horlogerie."
  },
  {
    year: "2024",
    title: "Celebration of Craft and Community",
    text:
      "The grand opening of Azza Fahmy was more than a milestone—it was a celebration of shared values, artistry, and meaningful connections. An intimate gathering of the brand’s closest friends and clients reflected Attar United’s belief that true luxury is deeply personal."
  },
  {
    year: "2025",
    title: "The Future, Crafted in Time",
    text:
      " Attar United enters a new chapter with the opening of flagship Chopard and Hublot boutiques at Solitaire Mall. These spaces embody the future of luxury retail in Saudi Arabia—where innovation meets tradition, and every moment is curated with intention, elegance, and enduring vision."
  }
];



export default function StoryTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % timeline.length);

  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? timeline.length - 1 : prev - 1
    );

  return (
    <section className="bg-black text-white py-40 overflow-hidden">
      {/* TITLE */}
      <h2 className="text-center font-baskerville text-4xl md:text-6xl tracking-[0.3em] mb-32">
        OUR STORY
      </h2>

      {/* ================= WATCH + BUTTONS (FIXED AREA) ================= */}
      <div className="relative flex items-center justify-center h-[360px] md:h-[420px] w-full">
        
        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="
            absolute left-8 md:left-32
            top-1/2 -translate-y-1/2
            w-10 h-10
            rounded-full
            border border-yellow-400/60
            text-yellow-400 text-xl
            flex items-center justify-center
            hover:scale-110
            hover:shadow-[0_0_15px_rgba(255,215,120,0.6)]
            transition
          "
        >
          ‹
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          aria-label="Next"
          className="
            absolute right-8 md:right-32
            top-1/2 -translate-y-1/2
            w-10 h-10
            rounded-full
            border border-yellow-400/60
            text-yellow-400 text-xl
            flex items-center justify-center
            hover:scale-110
            hover:shadow-[0_0_15px_rgba(255,215,120,0.6)]
            transition
          "
        >
          ›
        </button>

        {/* WATCH CIRCLE */}
        <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full border border-yellow-400/40 flex items-center justify-center">
          
          {/* Glow */}
          <div className="absolute inset-0 rounded-full shadow-[0_0_80px_rgba(255,215,120,0.25)]" />

          {/* Center Year */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="font-baskerville text-4xl md:text-5xl tracking-widest text-yellow-400">
                {timeline[activeIndex].year}
              </div>
              <div className="mt-2 text-xs tracking-[0.3em] text-gray-400">
                Timeline
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ================= STORY (MOVING AREA) ================= */}
      <div className="mt-24 max-w-xl mx-auto text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-baskerville text-3xl mb-6">
              {timeline[activeIndex].title}
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              {timeline[activeIndex].text}
            </p>

            <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-yellow-400 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
