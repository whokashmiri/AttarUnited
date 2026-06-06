/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/* =========================================
   TIMELINE DATA
========================================= */
const timeline = [
  {
    year: "2012",
    title: "Where Passion Became Purpose",
    text:
      "Attar United was born from a profound appreciation for time, beauty, and craftsmanship. Guided by heritage and inspired by excellence, Omar and Mohammed Saddik Attar transformed a lifelong passion into a vision—one that would redefine the luxury watch and jewelry experience in Saudi Arabia."
  },

  {
    year: "2013 - 2015",
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
    year: "2017 - 2019",
    title: "Strengthening the Pillars of Prestige",
    text:
      "During this defining period, Attar United focused on strengthening its core maisons, Chopard and Hublot, expanding their presence across the Kingdom’s key luxury destinations. With boutiques established in Riyadh, Al Khobar, and Jeddah, these years were dedicated to deepening brand partnerships, refining the client experience, and creating immersive spaces that reflected the distinct identities of each maison."
  },

  {
    year: "2020",
    title: "Icons Aligned",
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
      "Attar United enters a new chapter with the opening of flagship Chopard and Hublot boutiques at Solitaire Mall. These spaces embody the future of luxury retail in Saudi Arabia—where innovation meets tradition, and every moment is curated with intention, elegance, and enduring vision."
  }
];

/* =========================================
   COMPONENT
========================================= */
export default function StoryTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % timeline.length);
  };

  const prev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? timeline.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-black text-white py-40 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,172,105,0.08),transparent_60%)]" />

      {/* TITLE */}
      <h2
        className="
          text-center
          font-baskerville
          text-4xl md:text-6xl
          tracking-[0.35em]
          mb-32
          relative
          z-10
        "
      >
        OUR STORY
      </h2>

      {/* MAIN */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="
            absolute
            -left-3 md:-left-20
            top-1/2
            -translate-y-1/2
            z-50

            w-14 h-14
            rounded-full

            border border-[#c6ac69]/40
            bg-black/50
            backdrop-blur-xl

            text-[#c6ac69]
            text-3xl

            flex items-center justify-center

            hover:scale-110
            hover:shadow-[0_0_30px_rgba(198,172,105,0.5)]

            transition-all duration-300
          "
        >
          ‹
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          aria-label="Next"
          className="
            absolute
            -right-3 md:-right-20
            top-1/2
            -translate-y-1/2
            z-50

            w-14 h-14
            rounded-full

            border border-[#c6ac69]/40
            bg-black/50
            backdrop-blur-xl

            text-[#c6ac69]
            text-3xl

            flex items-center justify-center

            hover:scale-110
            hover:shadow-[0_0_30px_rgba(198,172,105,0.5)]

            transition-all duration-300
          "
        >
          ›
        </button>

        {/* CONTENT */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-28
          "
        >

          {/* =========================================
              WATCH
          ========================================= */}
          <div className="relative flex items-center justify-center flex-shrink-0">

            {/* TOP STRAP */}
            <div
              className="
                absolute
                -top-44

                w-32
                h-48

                rounded-t-[60px]

                bg-gradient-to-b
                from-[#4a311b]
                via-[#6f4f2d]
                to-[#24150a]

                border-x border-[#9f7b4c]/30

                shadow-[0_30px_60px_rgba(0,0,0,0.9)]
              "
            />

            {/* BOTTOM STRAP */}
            <div
              className="
                absolute
                -bottom-44

                w-32
                h-48

                rounded-b-[60px]

                bg-gradient-to-b
                from-[#24150a]
                via-[#6f4f2d]
                to-[#4a311b]

                border-x border-[#9f7b4c]/30

                shadow-[0_-30px_60px_rgba(0,0,0,0.9)]
              "
            />

            {/* CROWN */}
            <div
              className="
                absolute
                right-[-20px]
                top-1/2
                -translate-y-1/2

                w-6
                h-20

                rounded-r-3xl

                bg-gradient-to-b
                from-[#f0d7a0]
                via-[#c69c63]
                to-[#6f4b27]

                border-r border-[#f0d7a0]/40

                shadow-[0_0_25px_rgba(198,172,105,0.5)]
              "
            />

            {/* WATCH BODY */}
            <div
              className="
                relative

                w-[340px]
                h-[340px]

                md:w-[460px]
                md:h-[460px]

                rounded-full

                bg-gradient-to-br
                from-[#2a2a2a]
                via-[#0a0a0a]
                to-[#000]

                border-[16px]
                border-[#c6ac69]

                shadow-[0_0_100px_rgba(198,172,105,0.25)]

                overflow-hidden
              "
            >

              {/* GLASS REFLECTION */}
              <div
                className="
                  absolute
                  inset-0

                  bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_36%)]
                "
              />

              {/* OUTER RING */}
              <div
                className="
                  absolute
                  inset-4

                  rounded-full

                  border border-[#e0c790]/20
                "
              />

              {/* INNER RING */}
              <div
                className="
                  absolute
                  inset-10

                  rounded-full

                  border border-[#c6ac69]/10
                "
              />

              {/* HOURS */}
              {[...Array(12)].map((_, i) => {
                const angle = i * 30;

                return (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `rotate(${angle}deg)`
                    }}
                  >
                    <div
                      className={`
                        absolute
                        rounded-full

                        ${
                          i % 3 === 0
                            ? "w-[4px] h-10 bg-[#f1d28c]"
                            : "w-[2px] h-7 bg-[#c6ac69]"
                        }
                      `}
                      style={{
                        transform: "translate(-50%, -195px)"
                      }}
                    />
                  </div>
                );
              })}

              {/* ATTAR UNITED */}
              <motion.div
                animate={{
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity
                }}
                className="
                  absolute
                  top-[90px]
                  left-1/2
                  -translate-x-1/2

                  text-center
                "
              >
                <div
                  className="
                    text-[#f4d38e]
                    uppercase

                    tracking-[0.35em]

                    text-[11px]
                    md:text-sm

                    font-light

                    drop-shadow-[0_0_12px_rgba(244,211,142,0.95)]
                  "
                >
                  ATTAR UNITED
                </div>

                <div
                  className="
                    mt-1
                    w-24
                    h-px
                    mx-auto

                    bg-gradient-to-r
                    from-transparent
                    via-[#f4d38e]
                    to-transparent
                  "
                />
              </motion.div>

              {/* WATCH HANDS */}
              <div className="absolute inset-0 flex items-center justify-center">

                {/* HOUR HAND */}
                <motion.div
                  animate={{
                    rotate: activeIndex * 38
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut"
                  }}
                  className="
                    absolute

                    w-[6px]
                    h-28

                    rounded-full

                    bg-gradient-to-t
                    from-[#8b6a3f]
                    via-[#c6ac69]
                    to-[#f5d38c]

                    origin-bottom

                    shadow-[0_0_18px_rgba(198,172,105,0.4)]
                  "
                  style={{
                    bottom: "50%",
                    left: "50%",
                    marginLeft: "-3px"
                  }}
                />

                {/* MINUTE HAND */}
                <motion.div
                  animate={{
                    rotate: activeIndex * 38 + 120
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut"
                  }}
                  className="
                    absolute

                    w-[2px]
                    h-40

                    rounded-full

                    bg-gradient-to-t
                    from-white/40
                    to-white

                    origin-bottom
                  "
                  style={{
                    bottom: "50%",
                    left: "50%",
                    marginLeft: "-1px"
                  }}
                />

                {/* CENTER */}
                <div
                  className="
                    absolute

                    w-6
                    h-6

                    rounded-full

                    bg-gradient-to-br
                    from-[#f5d38c]
                    via-[#c6ac69]
                    to-[#7b5731]

                    border-2 border-[#f5d38c]/50

                    shadow-[0_0_25px_rgba(198,172,105,0.8)]
                  "
                />
              </div>

              {/* YEAR */}
              <div
                className="
                  absolute
                  inset-0

                  flex
                  items-end
                  justify-center

                  pb-24
                "
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                  >
                    <div
                      className={`
                        font-baskerville
                        text-[#f4d38e]
                        leading-none

                        drop-shadow-[0_0_18px_rgba(244,211,142,0.5)]

                        ${
                          timeline[activeIndex].year.length > 6
                            ? "text-2xl md:text-4xl tracking-[0.04em]"
                            : "text-5xl md:text-7xl tracking-[0.12em]"
                        }
                      `}
                    >
                      {timeline[activeIndex].year}
                    </div>

                    <div
                      className="
                        mt-4

                        text-[10px]
                        uppercase

                        tracking-[0.5em]

                        text-gray-500
                      "
                    >
                      Timeline
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* =========================================
              STORY CONTENT
          ========================================= */}
          <div className="max-w-2xl">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8 }}
              >

                {/* TITLE */}
                <h3
                  className="
                    font-baskerville
                    text-4xl md:text-5xl
                    mb-8
                    text-white
                    leading-tight
                  "
                >
                  {timeline[activeIndex].title}
                </h3>

                {/* TEXT */}
                <p
                  className="
                    text-gray-400
                    text-lg md:text-xl
                    leading-relaxed
                  "
                >
                  {timeline[activeIndex].text}
                </p>

                {/* LINE */}
                <div
                  className="
                    mt-12
                    h-px
                    w-44

                    bg-gradient-to-r
                    from-[#c6ac69]
                    to-transparent
                  "
                />

              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}