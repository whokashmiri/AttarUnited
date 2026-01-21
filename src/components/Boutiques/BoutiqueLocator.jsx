/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * BoutiqueLocator (Premium / Modern)
 * Layout: Full screen (100vh) split into 3 columns:
 * 1) Cities (Jeddah / Riyadh / Dammam)
 * 2) Stores / addresses (cards) for selected city
 * 3) Media panel (default video; changes on address hover to map)
 *
 * Interactions:
 * - Hover/click city => updates address cards (animated)
 * - Hover address => media panel switches to map (smooth crossfade)
 * - Mouse leave => returns to city default video
 *
 * Notes:
 * - Replace videoSrc + mapEmbed with your real assets/links.
 * - Map uses <iframe>. For best UX, keep it pointer-events-none while hovered unless user clicks “Open map”.
 */

const DATA = {
  Jeddah: {
    videoSrc: "https://videos.pexels.com/video-files/857195/857195-hd_1280_720_30fps.mp4",
    stores: [
      {
        name: "Attar United — Boutique A",
        address: "Tahlia Street, Jeddah 21524, Saudi Arabia",
        phone: "+966 12 6142913",
        hours: "Sat–Thu 10:00–22:00",
        mapEmbed:
          "https://www.google.com/maps?q=Jeddah%20Saudi%20Arabia&output=embed",
      },
      {
        name: "Attar United — Boutique B",
        address: "Red Sea Mall, Jeddah, Saudi Arabia",
        phone: "+966 12 6142913",
        hours: "Daily 10:00–23:00",
        mapEmbed:
          "https://www.google.com/maps?q=Red%20Sea%20Mall%20Jeddah&output=embed",
      },
    ],
  },
  Riyadh: {
    videoSrc: "https://videos.pexels.com/video-files/856929/856929-hd_1280_720_30fps.mp4",
    stores: [
      {
        name: "Attar United — Panorama Mall",
        address: "Panorama Mall, Riyadh, Saudi Arabia",
        phone: "+966 12 6142913",
        hours: "Sat–Thu 10:00–22:00",
        mapEmbed:
          "https://www.google.com/maps?q=Panorama%20Mall%20Riyadh&output=embed",
      },
      {
        name: "Attar United — Kingdom Centre",
        address: "Kingdom Centre, Riyadh, Saudi Arabia",
        phone: "+966 12 6142913",
        hours: "Daily 10:00–23:00",
        mapEmbed:
          "https://www.google.com/maps?q=Kingdom%20Centre%20Riyadh&output=embed",
      },
    ],
  },
  Dammam: {
    videoSrc: "https://videos.pexels.com/video-files/855563/855563-hd_1280_720_30fps.mp4",
    stores: [
      {
        name: "Attar United — Al Khobar",
        address: "Al Khobar, Eastern Province, Saudi Arabia",
        phone: "+966 12 6142913",
        hours: "Sat–Thu 10:00–22:00",
        mapEmbed:
          "https://www.google.com/maps?q=Al%20Khobar%20Saudi%20Arabia&output=embed",
      },
      {
        name: "Attar United — Dhahran",
        address: "Dhahran Mall, Dhahran, Saudi Arabia",
        phone: "+966 12 6142913",
        hours: "Daily 10:00–23:00",
        mapEmbed:
          "https://www.google.com/maps?q=Dhahran%20Mall&output=embed",
      },
    ],
  },
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function BurnTitle({ children }) {
  return (
    <div className="relative inline-block select-none">
      <div className="burn-stroke font-serif uppercase tracking-[0.16em]">
        {children}
      </div>
      <div className="burn-core absolute inset-0 font-serif uppercase tracking-[0.16em]">
        {children}
      </div>
      <div className="burn-embers absolute inset-0 font-serif uppercase tracking-[0.16em]">
        {children}
      </div>
    </div>
  );
}

function CityItem({ active, label, onEnter, onClick }) {
  return (
    <motion.button
      type="button"
      onMouseEnter={onEnter}
      onFocus={onEnter}
      onClick={onClick}
      className={cn(
        "group w-full text-left rounded-2xl px-5 py-4",
        "border backdrop-blur-xl transition",
        active
          ? "border-white/18 bg-white/[0.06]"
          : "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
      )}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="text-[11px] tracking-[0.38em] uppercase text-white/55">
            City
          </div>
          <div className="mt-2 text-2xl sm:text-3xl font-serif text-white/90 leading-none">
            {label}
          </div>
          <div className="mt-3 h-px w-0 bg-white/35 transition-all duration-500 group-hover:w-full" />
        </div>

        <div className="text-white/55 transition-transform duration-300 group-hover:translate-x-0.5">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </motion.button>
  );
}

function StoreCard({ store, active, onEnter, onLeave }) {
  return (
    <motion.div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={cn(
        "relative rounded-2xl p-5",
        "border border-white/10 bg-white/[0.03] backdrop-blur-xl",
        "shadow-[0_25px_90px_rgba(0,0,0,0.50)] transition",
        active ? "ring-1 ring-white/14 bg-white/[0.05]" : "hover:bg-white/[0.04]"
      )}
      initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: 10, filter: "blur(6px)" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-[11px] tracking-[0.38em] uppercase text-white/55">
            Boutique
          </div>

          <div className="mt-2 font-serif text-xl sm:text-2xl text-white/92 leading-tight">
            {store.name}
          </div>

          <p className="mt-3 text-white/70 text-sm sm:text-base leading-relaxed">
            {store.address}
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/60">
            <span className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1">
              {store.hours}
            </span>
            <span className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1">
              {store.phone}
            </span>
          </div>
        </div>

        <div className="mt-1 text-white/55">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11.5a2 2 0 100-4 2 2 0 000 4z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* subtle bottom sheen */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/[0.06] to-transparent opacity-70" />
    </motion.div>
  );
}

export default function BoutiqueLocator({
  defaultCity = "Jeddah",
  cities = ["Jeddah", "Riyadh", "Dammam"],
}) {
  const [city, setCity] = useState(defaultCity);
  const [hoverStoreIdx, setHoverStoreIdx] = useState(null);

  const cityData = DATA[city] ?? DATA.Jeddah;
  const stores = cityData.stores;

  const activeStore =
    hoverStoreIdx != null ? stores[hoverStoreIdx] : null;

  // When city changes, reset hovered store so media goes back to video
  useEffect(() => {
    setHoverStoreIdx(null);
  }, [city]);

  const headerVariants = {
    hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Premium lighting */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_60%_at_50%_18%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/[0.04] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto h-full max-w-[1200px] px-6">
        {/* Title row */}
        <motion.div
          className="pt-14"
          variants={headerVariants}
          initial="hidden"
          animate="show"
        >
          <p className="text-[11px] sm:text-xs tracking-[0.38em] uppercase text-white/55">
            Attar United
          </p>
          <h2 className="mt-4 font-serif text-white/92 leading-none text-4xl sm:text-5xl md:text-6xl tracking-tight">
            Boutiques Locator
          </h2>
          <p className="mt-5 max-w-[760px] text-white/70 text-base sm:text-lg leading-[1.85]">
            Explore our boutiques across Saudi Arabia. Hover an address to preview the location.
          </p>

          <div className="mt-8 h-px w-full max-w-[520px] bg-white/10" />
        </motion.div>

        {/* 3 columns */}
        <div className="mt-10 grid h-[calc(100vh-260px)] grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Column 1: Cities */}
          <div className="lg:col-span-3">
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-4">
              <div className="px-2 pb-3">
                <div className="text-[11px] tracking-[0.38em] uppercase text-white/55">
                  Cities
                </div>
                <div className="mt-3 h-px w-16 bg-white/12" />
              </div>

              <div className="mt-3 space-y-3">
                {cities.map((c) => (
                  <CityItem
                    key={c}
                    label={c}
                    active={c === city}
                    onEnter={() => setCity(c)}
                    onClick={() => setCity(c)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Stores */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] tracking-[0.38em] uppercase text-white/55">
                    Stores
                  </div>
                  <div className="mt-2 font-serif text-2xl text-white/90 leading-none">
                    {city}
                  </div>
                </div>
                <div className="text-white/55 text-xs tracking-[0.35em] uppercase">
                  Hover Address
                </div>
              </div>

              <div className="mt-5 h-px w-full bg-white/10" />

              <div className="mt-6 space-y-4 overflow-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <AnimatePresence mode="popLayout">
                  {stores.map((s, idx) => (
                    <StoreCard
                      key={`${city}-${s.name}`}
                      store={s}
                      active={hoverStoreIdx === idx}
                      onEnter={() => setHoverStoreIdx(idx)}
                      onLeave={() => setHoverStoreIdx(null)}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Column 3: Media */}
          <div className="lg:col-span-4">
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
              {/* Crossfade between default city video and active store map */}
              <AnimatePresence mode="wait">
                {activeStore ? (
                  <motion.div
                    key={`${city}-${activeStore.name}-map`}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <iframe
                      title={`${activeStore.name} map`}
                      src={activeStore.mapEmbed}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{ border: 0 }}
                    />
                    {/* Overlays for premium look */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />
                    <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_60%_at_50%_20%,rgba(255,255,255,0.10),transparent_60%)]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key={`${city}-video`}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <video
                      className="h-full w-full object-cover"
                      src={cityData.videoSrc}
                      muted
                      playsInline
                      autoPlay
                      loop
                      preload="auto"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/65" />
                    <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_60%_at_50%_22%,rgba(255,255,255,0.10),transparent_60%)]" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Media label */}
              <div className="pointer-events-none absolute inset-x-0 top-0 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] tracking-[0.38em] uppercase text-white/60">
                      Preview
                    </div>
                    <div className="mt-3 leading-none text-white/95">
                      <BurnTitle>{activeStore ? "LOCATION" : "CITY FILM"}</BurnTitle>
                    </div>
                  </div>

                  <div className="mt-1 text-white/55">
                    <div className="rounded-full border border-white/14 bg-white/[0.05] px-3 py-1 text-[10px] tracking-[0.35em] uppercase">
                      {city}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/75 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Burn effect CSS */}
      <style>{`
        .burn-stroke{
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.55);
          text-shadow: 0 0 18px rgba(255,255,255,0.06);
          font-size: clamp(18px, 1.6vw, 24px);
          line-height: 1;
        }
        .burn-core{
          color: rgba(255,255,255,0.92);
          font-size: clamp(18px, 1.6vw, 24px);
          line-height: 1;
          filter: drop-shadow(0 6px 16px rgba(255,255,255,0.08));
          opacity: 0.92;
        }
        .burn-embers{
          font-size: clamp(18px, 1.6vw, 24px);
          line-height: 1;
          color: transparent;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,245,220,0.55) 18%,
            rgba(255,255,255,0.92) 36%,
            rgba(255,232,180,0.60) 52%,
            transparent 72%
          );
          -webkit-background-clip: text;
          background-clip: text;
          filter: blur(0.15px) drop-shadow(0 0 22px rgba(255,215,140,0.10));
          opacity: 0.85;
          animation: emberSweep 3.6s ease-in-out infinite;
          mix-blend-mode: screen;
        }
        @keyframes emberSweep {
          0%   { transform: translateX(-18%); opacity: 0.65; }
          45%  { opacity: 0.95; }
          100% { transform: translateX(18%); opacity: 0.65; }
        }
      `}</style>
    </section>
  );
}
