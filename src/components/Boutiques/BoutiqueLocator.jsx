/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Notes:
 * - mapEmbed is stored as a React element (iframe). We render it directly.
 * - Riyadh selection reveals Sketchfab 3D background + animated premium gradient overlay.
 */

const STORES = [
  // ================= RIYADH =================
  {
    city: "Riyadh",
    brand: "Chopard",
    name: "Panorama Mall",
    address: "Panorama Mall, Tahlia Street, Riyadh",
    tel: "(011) 2815300",
    mapEmbed: (
      <iframe
        title="Chopard Panorama"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.0346449157814!2d46.66769481041565!3d24.69133575191352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d22e7de414b%3A0x9f174c469be46d0f!2sChopard%20Panorama!5e0!3m2!1sen!2ssa!4v1770804760855!5m2!1sen!2ssa"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },
  {
    city: "Riyadh",
    brand: "Chopard",
    name: "Kingdom Centre Tower",
    address: "Kingdom Centre, Olaya Street, Riyadh",
    tel: "(011) 2110017",
    mapEmbed: (
      <iframe
        title="Chopard Kingdom"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.4501969335024!2d46.672944110416445!3d24.7114199511145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03089562d471%3A0x59b3d24e51d48d3e!2sChopard%20Kingdom%20Mall%20Boutique!5e0!3m2!1sen!2ssa!4v1770804896908!5m2!1sen!2ssa"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },
  {
    city: "Riyadh",
    brand: "Chopard",
    name: "Solitaire Mall",
    address: "As Sahafah district, King Abdulaziz Road",
    tel: "(011) 51 27 299",
    mapEmbed: (
      <iframe
        title="Chopard Solitaire"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.870248037814!2d46.64916141041916!3d24.79989614758745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3003499f4c3%3A0xd2967854986cf1e0!2sChopard!5e0!3m2!1sen!2ssa!4v1770805166154!5m2!1sen!2ssa"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },
  {
    city: "Riyadh",
    brand: "Hublot",
    name: "Panorama Mall",
    address: "Panorama Mall, Tahlia Street, Riyadh",
    tel: "(011) 4821360",
    mapEmbed: (
      <iframe
        title="Hublot Panorama"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14500.102049951345!2d46.651424687158205!3d24.691649700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1cccb5b74dd7%3A0xbce6b864d96e137a!2sHublot%20Riyadh%20Panorama%20Mall%20Boutique!5e0!3m2!1sen!2ssa!4v1770805245403!5m2!1sen!2ssa"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },
  {
    city: "Riyadh",
    brand: "Hublot",
    name: "Kingdom Centre Tower",
    address: "Kingdom Centre, Olaya Street, Riyadh",
    tel: "(011) 2111391",
    mapEmbed: (
      <iframe
        title="Hublot Kingdom Centre"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58000.365619879485!2d46.62041726187313!3d24.6917411856889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03c1c66947b7%3A0x794f14270e9a6313!2sHublot%20Riyadh%20Kingdom%20Center%20Boutique!5e0!3m2!1sen!2ssa!4v1770805302637!5m2!1sen!2ssa"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },
  {
    city: "Riyadh",
    brand: "Hublot",
    name: "Solitaire Mall",
    address: "As Sahafah district, King Abdulaziz Road",
    tel: "(011) 51 27 266",
    mapEmbed: (
      <iframe
        title="Hublot Solitaire"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.847145130301!2d46.649031060419254!3d24.800687097555823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee309887b1743%3A0x82252a158935cb62!2sHublot%20Riyadh%20Solitaire%20Mall%20Boutique!5e0!3m2!1sen!2ssa!4v1770805474575!5m2!1sen!2ssa"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },
  {
    city: "Riyadh",
    brand: "Saint Louis",
    name: "Olaya Towers",
    address: "Olaya Street, Riyadh",
    tel: "(012) 603 9760",
    mapEmbed: (
      <iframe
        title="Saint Louis Crystal Riyadh"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.8636025934534!2d46.680243960415865!3d24.697215101679724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03a4908fe097%3A0xf4aaa8de5672ccc0!2sSaint%20Louis%20Crystal%20Riyadh!5e0!3m2!1sen!2ssa!4v1770805564148!5m2!1sen!2ssa"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },
  {
    city: "Riyadh",
    brand: "Graff",
    name: "Kingdom Centre Tower",
    address: "Kingdom Centre, Olaya Street, Riyadh",
    tel: "(011) 2111492",
    mapEmbed: (
      <iframe
        title="Graff Kingdom Centre"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.45435105859!2d46.67246421041625!3d24.71127725112015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f02d3ed0bdc37%3A0x60df455fecd63a34!2sGraff%20Riyadh%2C%20The%20Kingdom%20Centre!5e0!3m2!1sen!2ssa!4v1770805724555!5m2!1sen!2ssa"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },
  {
    city: "Riyadh",
    brand: "Graff",
    name: "Olaya Towers",
    address: "Olaya Street, Riyadh",
    tel: "(011) 2699593",
    mapEmbed: (
      <iframe
        title="Graff Olaya"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28995.624928231977!2d46.654391201436084!3d24.711319676190975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03006b73123f%3A0xf6ff00b7ae531680!2sGraff%20Riyadh%2C%20Olaya!5e0!3m2!1sen!2ssa!4v1770805777483!5m2!1sen!2ssa"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },
  {
    city: "Riyadh",
    brand: "Azza Fahmy",
    name: "Kingdom Centre Tower",
    address: "King Fahd Rd, Al Olaya, Riyadh",
    tel: "(011) 2111492",
    mapEmbed: (
      <iframe
        title="Azza Fahmy Boutique"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.4509567296127!2d46.67296091041629!3d24.711393851115442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f030077681477%3A0xfc71dbd0d4cef62d!2sAzza%20Fahmy%20Boutique!5e0!3m2!1sen!2ssa!4v1770805816994!5m2!1sen!2ssa"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },

  // ================= JEDDAH =================
  {
    city: "Jeddah",
    brand: "Chopard",
    name: "Al Basateen Mall",
    address: "Al Basateen Mall, Prince Mohammad Bin Abdulaziz St., Jeddah",
    tel: "(012) 6126299",
    mapEmbed: (
      <iframe
        title="Chopard Boutique Jeddah"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.905534169821!2d39.15079321032326!3d21.550548769571364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3db45048d941d%3A0x423de7cdf149e1c6!2sChopard%20Boutique%20Jeddah!5e0!3m2!1sen!2ssa!4v1770804993717!5m2!1sen!2ssa"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },
  {
    city: "Jeddah",
    brand: "Hublot",
    name: "El Khayyat Center",
    address: "21553 El Khayyat Center, Tahlia Street, Al Andalus, Jeddah",
    tel: "(012) 6774125",
    mapEmbed: (
      <iframe
        title="Hublot Jeddah El Khayyat"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.9499190705646!2d39.149178110323135!3d21.548813469632233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c575ae58f3fb%3A0xf113b23fac78910f!2sHublot%20Jeddah%20El%20Khayyat%20Center%20Boutique!5e0!3m2!1sen!2ssa!4v1770805338082!5m2!1sen!2ssa"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },

  // ================= KHOBAR =================
  {
    city: "Khobar",
    brand: "Chopard",
    name: "Al-Shaikh Avenue",
    address: "Al-Shaikh Avenue, King Salman Road, Al-Khobar",
    tel: "(013) 8022882",
    mapEmbed: (
      <iframe
        title="Chopard Boutique Khobar"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.5332252099306!2d50.21582251046868!3d26.309227885669575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e85142811c83%3A0x995c591be6778395!2sChopard%20Boutique!5e0!3m2!1sen!2ssa!4v1770805095499!5m2!1sen!2ssa"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },
  {
    city: "Khobar",
    brand: "Hublot",
    name: "Al-Shaikh Avenue",
    address: "Al-Shaikh Avenue, King Salman Road, Al Khobar",
    tel: "(013) 8021377",
    mapEmbed: (
      <iframe
        title="Hublot Al Khobar Boutique"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.538342366836!2d50.2158094104686!3d26.309062085676587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e8514232d259%3A0xacf6321591fc18a!2sHublot%20Al%20Khobar%20Boutique!5e0!3m2!1sen!2ssa!4v1770805398283!5m2!1sen!2ssa"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
  },
];

const CITIES = ["Riyadh", "Jeddah", "Khobar"];

// Best-effort: autostart + hide UI
const skParams =
  "?autostart=1&ui_infos=0&ui_controls=0&ui_stop=0&ui_watermark=0&ui_help=0&ui_inspector=0&ui_settings=0&ui_theme=dark&transparent=1";

const SKETCHFAB_BG = {
  Riyadh: {
    title: "Kingdom Centre - Riyadh",
    embedSrc: `https://sketchfab.com/models/2700ecf8e8a44686953f4a5405857698/embed${skParams}`,
  },
  Jeddah: {
    title: "jeddah tower - saudi arabia",
    embedSrc: `https://sketchfab.com/models/32421788ba8a4f7c88e1db920327b1ec/embed${skParams}`,
  },
  Khobar: {
    title: "Palm tree A23",
    embedSrc: `https://sketchfab.com/models/f755d263d99f4af7abda3eabf7220168/embed${skParams}`,
  },
};

export default function BoutiqueLocatorLuxury() {
  const [city, setCity] = useState(null);
  const [brand, setBrand] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);

  const brands = useMemo(() => {
    if (!city) return [];
    return [...new Set(STORES.filter((s) => s.city === city).map((s) => s.brand))];
  }, [city]);

  const stores = useMemo(() => {
    if (!city || !brand) return [];
    return STORES.filter((s) => s.city === city && s.brand === brand);
  }, [city, brand]);

  const mapEmbedEl = selectedStore?.mapEmbed ?? null;

  const activeBg = city ? SKETCHFAB_BG[city] : null;

  const infoMessage = !city
    ? "Select a city to view boutiques."
    : !brand
    ? `Select a brand to view boutiques in ${city}.`
    : null;

  const noStoreMessage =
    brand && stores.length === 0 ? `No boutiques found for ${brand} in ${city}.` : null;

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* ========= Base premium gradients ========= */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,215,140,0.10),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_85%,rgba(180,140,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/80 to-black" />
      </div>

      {/* ========= 3D background per selected city ========= */}
      <AnimatePresence>
        {activeBg && (
          <motion.div
            key={`bg-${city}`}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.03, filter: "blur(6px)" }}
            transition={{ duration: 1.05, ease: [0.16, 0.84, 0.2, 1] }}
          >
            {/* subtle breathing so it feels alive - with hover animation */}
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1, rotate: 0 }}
              animate={{ 
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.5 }
              }}
            >
              <iframe
                title={activeBg.title}
                src={activeBg.embedSrc}
                className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                style={{ zIndex: 1 }}
                frameBorder="0"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
              />
            </motion.div>

            {/* premium overlays (DON'T make too dark) - with pointer-events-none to allow 3D interaction */}
            <div className="absolute inset-0 bg-black/22 pointer-events-none" />
            <div className="absolute inset-0 bg-linear-to-b from-black/12 via-black/30 to-black/70 pointer-events-none" />

            {/* UI mask areas (top/bottom) to visually reduce Sketchfab chrome */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/55 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/70 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========= Foreground ========= */}
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="mt-4 text-4xl md:text-5xl font-light tracking-wide">
            Boutique Locator - Royal & Premium Experience
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left */}
          <div className="lg:col-span-5">
            <div className="flex gap-10 justify-center lg:justify-start mb-10">
              {CITIES.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setCity(c);
                    setBrand(null);
                    setSelectedStore(null);
                  }}
                  className={`tracking-[0.35em] uppercase text-sm transition ${
                    city === c ? "text-white" : "text-white/40 hover:text-white/70"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <AnimatePresence>
              {city && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="flex flex-wrap gap-3 justify-center lg:justify-start"
                >
                  {brands.map((b) => (
                    <button
                      key={b}
                      onClick={() => {
                        setBrand(b);
                        setSelectedStore(null);
                      }}
                      className={`px-4 py-2 rounded-full border transition text-sm tracking-wide ${
                        brand === b
                          ? "border-white/40 text-white bg-white/5"
                          : "border-white/10 text-white/60 hover:text-white hover:border-white/25"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {brand && stores.length > 0 && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="mt-8 space-y-4"
                >
                  {stores.map((store, idx) => {
                    const isActive =
                      selectedStore?.name === store.name &&
                      selectedStore?.city === store.city &&
                      selectedStore?.brand === store.brand;

                    return (
                      <motion.button
                        type="button"
                        key={`${store.city}-${store.brand}-${store.name}-${idx}`}
                        onClick={() => setSelectedStore(store)}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: idx * 0.05 }}
                        className={`w-full text-left border-b border-white/10 pb-6 cursor-pointer group transition ${
                          isActive ? "opacity-100" : "opacity-90 hover:opacity-100"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-6">
                          <div>
                            <h3 className="text-2xl font-light tracking-wide group-hover:text-white transition">
                              {store.name}
                            </h3>
                            <p className="text-white/60 mt-2">{store.address}</p>
                            <p className="text-white/40 mt-1 text-sm">{store.tel}</p>
                          </div>

                          <div className="hidden sm:block text-xs tracking-[0.35em] uppercase text-white/35 pt-2">
                            View
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            )}

            {infoMessage && (
              <p className="text-center text-white/40 text-sm mt-8">{infoMessage}</p>
            )}
            {noStoreMessage && (
              <p className="text-center text-white/40 text-sm mt-6">{noStoreMessage}</p>
            )}

            <div className="mt-10 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* Right: Map Panel */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/3 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_80px_rgba(0,0,0,0.65)]">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div>
                  <p className="text-xs tracking-[0.35em] uppercase text-white/50">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    {selectedStore
                      ? `${selectedStore.name} • ${selectedStore.city}`
                      : city
                      ? `${city} • Select a boutique`
                      : "Select a city to begin"}
                  </p>
                </div>
                <div className="text-xs text-white/45">
                  {selectedStore ? "Boutique Map" : "Map Panel"}
                </div>
              </div>

              <div className="relative aspect-video w-full">
                <AnimatePresence mode="wait">
                  {mapEmbedEl ? (
                    <motion.div
                      key="map-el"
                      className="absolute inset-0 w-full h-full"
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {mapEmbedEl}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="map-placeholder"
                      className="absolute inset-0 w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,140,0.10),transparent_55%)]" />
                      <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/35 to-black/70" />

                      <div className="relative h-full w-full flex items-center justify-center text-center px-10">
                        <div>
                          <p className="text-xs tracking-[0.45em] uppercase text-white/60">
                            Map Placeholder
                          </p>
                          <h3 className="mt-3 text-2xl font-light">
                            Select a boutique
                          </h3>
                          <p className="mt-3 text-white/55 max-w-md">
                            Choose a store from the list to show its map here.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),inset_0_-80px_120px_rgba(0,0,0,0.65)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
