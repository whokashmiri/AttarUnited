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
      "With the arrival of Chopard in the Kingdom, Attar United began shaping a new language of luxury—where intimacy, artistry, and personal connection took center stage. These early years laid the foundation for enduring partnerships with the world's most prestigious maisons, establishing Attar United as a trusted name in high watchmaking and fine jewelry."
  },
  {
    year: "2016",
    title: "A Moment That Spoke to the World",
    text:
      "The opening of Hublot's largest boutique globally marked a defining chapter in Attar United's journey. More than a milestone, it was a statement of confidence—reflecting Saudi Arabia's rising presence on the global luxury stage and Attar United's role as a partner capable of delivering excellence at scale."
  },
  {
    year: "2017 - 2019",
    title: "Strengthening the Pillars of Prestige",
    text:
      "During this defining period, Attar United focused on strengthening its core maisons, Chopard and Hublot, expanding their presence across the Kingdom's key luxury destinations. With boutiques established in Riyadh, Al Khobar, and Jeddah, these years were dedicated to deepening brand partnerships, refining the client experience, and creating immersive spaces that reflected the distinct identities of each maison."
  },
  {
    year: "2020",
    title: "Icons Aligned",
    text:
      "In a year that tested resilience worldwide, Attar United reached new heights. The unveiling of Chopard's flagship boutique in Riyadh and the introduction of Graff to Saudi Arabia marked a powerful alignment of vision, prestige, and trust—positioning Attar United among the region's most distinguished luxury retailers."
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
      "A year defined by creative expression and individuality, Attar United became the exclusive retailer for Azza Fahmy in Saudi Arabia—celebrating heritage through contemporary design. In the same year, the partnership with Gerald Charles led to the launch of the world's first mono-brand boutique, reaffirming a commitment to independent haute horlogerie."
  },
  {
    year: "2024",
    title: "Celebration of Craft and Community",
    text:
      "The grand opening of Azza Fahmy was more than a milestone—it was a celebration of shared values, artistry, and meaningful connections. An intimate gathering of the brand's closest friends and clients reflected Attar United's belief that true luxury is deeply personal."
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

  // Watch animation
  const minuteRotation = activeIndex * 360;
  const hourRotation = activeIndex * 30;

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % timeline.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? timeline.length - 1 : prev - 1));
  };

  const arrowBase = `
    rounded-full
    border border-[#c6ac69]/40
    bg-black/50
    backdrop-blur-xl
    text-[#c6ac69]
    flex items-center justify-center
    hover:scale-110
    hover:shadow-[0_0_30px_rgba(198,172,105,0.5)]
    transition-all duration-300
    shrink-0
  `;

  return (
    <section className="relative bg-black text-white py-20 sm:py-28 md:py-32 lg:py-40 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,172,105,0.08),transparent_60%)]" />

      {/* TITLE */}
      <h2
        className="
          text-center
          font-baskerville
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          tracking-[0.2em] sm:tracking-[0.28em] lg:tracking-[0.35em]
          mb-12 sm:mb-16 md:mb-24 lg:mb-32
          relative
          z-10
          px-4
        "
      >
        OUR STORY
      </h2>

      {/* MAIN */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        {/* CONTENT */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            lg:items-start
            justify-between
            gap-14 sm:gap-16 md:gap-20 lg:gap-28
          "
        >
          {/* =========================================
              WATCH
          ========================================= */}
          <div className="relative flex flex-col items-center justify-center shrink-0">
            {/* CROWN + WATCH BODY WRAPPER */}
            <div className="relative flex items-center justify-center">
            {/* CROWN */}
            <div
              className="
                absolute
                -right-2 sm:-right-3 md:-right-4 lg:-right-5
                top-1/2
                -translate-y-1/2

                w-3 h-10
                sm:w-4 sm:h-12
                md:w-5 md:h-16
                lg:w-6 lg:h-20

                rounded-r-3xl

                bg-linear-to-b
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

                w-56 h-56
                sm:w-72 sm:h-72
                md:w-85 md:h-85
                lg:w-100 lg:h-100
                xl:w-115 xl:h-115

                rounded-full

                bg-linear-to-br
                from-[#2a2a2a]
                via-[#0a0a0a]
                to-black

                border-8 sm:border-10 md:border-12 lg:border-14 xl:border-16
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
                  inset-2 sm:inset-3 md:inset-4

                  rounded-full

                  border border-[#e0c790]/20
                "
              />

              {/* INNER RING */}
              <div
                className="
                  absolute
                  inset-6 sm:inset-8 md:inset-10

                  rounded-full

                  border border-[#c6ac69]/10
                "
              />

              {/* HOURS */}
              {[...Array(12)].map((_, i) => {
                const angle = i * 30;
                const isMajor = i % 3 === 0;

                return (
                  <div
                    key={i}
                    className="absolute inset-0 flex justify-center"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <div
                      className={`
                        rounded-full
                        mt-2.5 sm:mt-3 md:mt-4 lg:mt-5
                        ${
                          isMajor
                            ? "w-1 h-5 sm:h-6 md:h-8 lg:h-10 bg-[#f1d28c]"
                            : "w-0.5 h-4 sm:h-5 md:h-6 lg:h-7 bg-[#c6ac69]"
                        }
                      `}
                    />
                  </div>
                );
              })}

              {/* ATTAR UNITED */}
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="
                  absolute
                  top-14 sm:top-16 md:top-20 lg:top-22.5
                  left-1/2
                  -translate-x-1/2

                  text-center
                "
              >
                <div
                  className="
                    text-[#f4d38e]
                    uppercase

                    tracking-[0.25em] sm:tracking-[0.35em]

                    text-[8px] sm:text-[10px] md:text-[11px] lg:text-sm

                    font-light

                    drop-shadow-[0_0_12px_rgba(244,211,142,0.95)]
                  "
                >
                  ATTAR UNITED
                </div>

                <div
                  className="
                    mt-1
                    w-16 sm:w-20 md:w-24
                    h-px
                    mx-auto

                    bg-linear-to-r
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
                  animate={{ rotate: hourRotation }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="
                    absolute

                    w-1 sm:w-1.5
                    h-16 sm:h-20 md:h-24 lg:h-28

                    rounded-full

                    bg-linear-to-t
                    from-[#8b6a3f]
                    via-[#c6ac69]
                    to-[#f5d38c]

                    origin-bottom

                    shadow-[0_0_18px_rgba(198,172,105,0.4)]
                  "
                  style={{
                    bottom: "50%",
                    left: "50%",
                    marginLeft: "-2px"
                  }}
                />

                {/* MINUTE HAND */}
                <motion.div
                  animate={{ rotate: minuteRotation }}
                  transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                  className="
                    absolute

                    w-0.5
                    h-24 sm:h-28 md:h-32 lg:h-40

                    rounded-full

                    bg-linear-to-t
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

                    w-4 h-4
                    sm:w-5 sm:h-5
                    md:w-6 md:h-6

                    rounded-full

                    bg-linear-to-br
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

                  pb-12 sm:pb-16 md:pb-20 lg:pb-24
                "
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center px-2"
                  >
                    <div
                      className={`
                        font-baskerville
                        text-[#f4d38e]
                        leading-none

                        drop-shadow-[0_0_18px_rgba(244,211,142,0.5)]

                        ${
                          timeline[activeIndex].year.length > 6
                            ? "text-lg sm:text-xl md:text-2xl lg:text-4xl tracking-[0.02em] sm:tracking-[0.04em]"
                            : "text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-[0.08em] sm:tracking-[0.12em]"
                        }
                      `}
                    >
                      {timeline[activeIndex].year}
                    </div>

                    <div
                      className="
                        mt-2 sm:mt-3 md:mt-4

                        text-[8px] sm:text-[9px] md:text-[10px]
                        uppercase

                        tracking-[0.3em] sm:tracking-[0.5em]

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

            {/* DESKTOP ARROWS (lg and up) — below the watch */}
            <div className="hidden lg:flex items-center justify-center gap-6 mt-10">
              <button
                onClick={prev}
                aria-label="Previous"
                className={`${arrowBase} w-12 h-12 xl:w-14 xl:h-14 text-3xl`}
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className={`${arrowBase} w-12 h-12 xl:w-14 xl:h-14 text-3xl`}
              >
                ›
              </button>
            </div>
          </div>

          {/* MOBILE / TABLET ARROWS (below lg) — between watch and text, pinned to edges */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <button
              onClick={prev}
              aria-label="Previous"
              className={`${arrowBase} w-11 h-11 sm:w-12 sm:h-12 text-2xl sm:text-3xl`}
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className={`${arrowBase} w-11 h-11 sm:w-12 sm:h-12 text-2xl sm:text-3xl`}
            >
              ›
            </button>
          </div>

          {/* =========================================
              STORY CONTENT
          ========================================= */}
          <div
            className="
              w-full
              max-w-xl lg:max-w-2xl
              flex
              flex-col
            "
          >
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
                    text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                    mb-4 sm:mb-6 md:mb-8
                    text-white
                    leading-tight
                    text-center lg:text-left
                  "
                >
                  {timeline[activeIndex].title}
                </h3>

                {/* TEXT */}
                <p
                  className="
                    text-gray-400
                    text-base sm:text-lg md:text-xl
                    leading-relaxed
                    text-center lg:text-left
                  "
                >
                  {timeline[activeIndex].text}
                </p>

                {/* LINE */}
                {/* <div
                  className="
                    mt-8 sm:mt-10 md:mt-12
                    h-px
                    w-32 sm:w-40 md:w-44
                    mx-auto lg:mx-0

                    bg-linear-to-r
                    from-[#c6ac69]
                    to-transparent
                  "
                /> */}

                {/* =========================================
                    PREMIUM LUXURY TIMELINE
                ========================================= */}
                <div className="mt-10 sm:mt-11 md:mt-16 ">
                  {/* Progress Rail */}
                  <div className="relative px-2 sm:px-4">
                    {/* Background Rail */}
                   <div className="absolute left-2 right-2 sm:left-4 sm:right-4 top-6 h-0.5 rounded-full bg-[#262626]" />

                    {/* Active Progress */}
                    <motion.div
                       transition={{ duration: 0.6, ease: "easeInOut" }}
  className="
    absolute
    left-2 sm:left-4
    top-6
    h-0.5
    rounded-full
    bg-linear-to-r
    from-[#8c6a34]
    via-[#f5d38c]
    to-[#c6ac69]
    shadow-[0_0_12px_rgba(198,172,105,.5)]
  "
                      style={{
                        width: `calc(${
                          (activeIndex / (timeline.length - 1)) * 100
                        }% - 8px)`
                      }}
                    />

                    {/* Timeline Items */}
                  <div className="relative flex justify-start lg:justify-between items-start gap-2 sm:gap-3 md:gap-4 overflow-x-auto luxury-scrollbar pt-2 pb-5">
                      {timeline.map((item, index) => {
                        const active = activeIndex === index;

                        return (
                          <button
                            key={item.year}
                            onClick={() => setActiveIndex(index)}
                            className="
                              group
                              flex
                              flex-col
                              items-center
                              shrink-0
                              cursor-pointer
                              min-w-fit px-2
                            "
                          >
                            {/* Gold Marker */}
                            <motion.div
                              whileHover={{ scale: 1.0 }}
                              animate={{ scale: active ? 1.0 : 1 }}
                              transition={{ duration: 0.35 }}
                              className={`
                               
                                relative
                                w-4 h-4
sm:w-5 sm:h-5
md:w-6 md:h-6
                                rounded-full
                                flex
                                items-center
                                justify-center
                                transition-all
                                duration-300
                                  mt-1
                                ${
                                  active
                                    ? `
                                      border border-[#f5d38c]
                                      bg-linear-to-br
                                      from-[#fff6dc]
                                      via-[#ddb86d]
                                      to-[#8c6630]
                                      shadow-[0_0_25px_rgba(198,172,105,.7)]
                                      
                                    `
                                    : `
                                      border border-[#4f3c20]
                                      bg-[#111]
                                      group-hover:border-[#c6ac69]
                                    `
                                }
                              `}
                            >
                              {/* Glow */}
                              {active && (
                                <motion.div
                                  layoutId="timelineGlow"
                                  className="
                                    absolute
                                    inset-0
                                    rounded-full
                                    bg-[#c6ac69]/20
                                    blur-lg
                                  "
                                />
                              )}

                              {/* Center Dot */}
                              <div
                                className={`
                                  w-2 h-2 sm:w-2.5 sm:h-2.5
                                  rounded-full
                                  z-10

                                  ${active ? "bg-white" : "bg-[#7b6235]"}
                                `}
                              />
                            </motion.div>

                            {/* Year */}
                            <motion.span
                              animate={{
                                color: active ? "#f5d38c" : "#777777",
                                scale: active ? 1.05 : 1
                              }}
                              transition={{ duration: 0.35 }}
                              className="
                                mt-3 sm:mt-4 md:mt-5
                                whitespace-nowrap
                                font-baskerville
                                text-sm sm:text-base md:text-lg
                                tracking-widest sm:tracking-[0.18em]
                                transition-colors
                              "
                            >
                              {item.year}
                            </motion.span>

                            {/* Luxury Underline */}
                            <div className="h-4 flex items-center justify-center">
                              <motion.div
                                animate={{
                                  scaleX: active ? 1 : 0,
                                  opacity: active ? 1 : 0
                                }}
                                transition={{ duration: 0.35 }}
                                className="
                                  mt-3 sm:mt-4
                                  h-0.5
                                  w-10 sm:w-12
                                  origin-center
                                  rounded-full
                                  bg-linear-to-r
                                  from-transparent
                                  via-[#e4c47d]
                                  to-transparent
                                "
                              />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}