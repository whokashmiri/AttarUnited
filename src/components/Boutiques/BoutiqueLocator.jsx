/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORES = [
  // ================= RIYADH =================
  {
    city: "Riyadh",
    brand: "Chopard",
    name: "Panorama Mall",
    address: "Panorama Mall, Tahlia Street, Riyadh",
    tel: "(011) 2815300",
  },
  {
    city: "Riyadh",
    brand: "Chopard",
    name: "Kingdom Centre Tower",
    address: "Kingdom Centre, Olaya Street, Riyadh",
    tel: "(011) 2110017",
  },
  {
    city: "Riyadh",
    brand: "Chopard",
    name: "Solitaire Mall",
    address: "As Sahafah district, King Abdulaziz Road",
    tel: "(011) 51 27 299",
  },
  {
    city: "Riyadh",
    brand: "Hublot",
    name: "Panorama Mall",
    address: "Panorama Mall, Tahlia Street, Riyadh",
    tel: "(011) 4821360",
  },
  {
    city: "Riyadh",
    brand: "Hublot",
    name: "Kingdom Centre Tower",
    address: "Kingdom Centre, Olaya Street, Riyadh",
    tel: "(011) 2111391",
  },
  {
    city: "Riyadh",
    brand: "Hublot",
    name: "Solitaire Mall",
    address: "As Sahafah district, King Abdulaziz Road",
    tel: "(011) 51 27 266",
  },
  {
    city: "Riyadh",
    brand: "Saint Louis",
    name: "Olaya Towers",
    address: "Olaya Street, Riyadh",
    tel: "(012) 603 9760",
  },
  {
    city: "Riyadh",
    brand: "Graff",
    name: "Kingdom Centre Tower",
    address: "Kingdom Centre, Olaya Street, Riyadh",
    tel: "(011) 2111492",
  },
  {
    city: "Riyadh",
    brand: "Graff",
    name: "Olaya Towers",
    address: "Olaya Street, Riyadh",
    tel: "(011) 2699593",
  },
  {
    city: "Riyadh",
    brand: "Azza Fahmy",
    name: "Kingdom Centre Tower",
    address: "King Fahd Rd, Al Olaya, Riyadh",
    tel: "(011) 2111492",
  },

  // ================= JEDDAH =================
  {
    city: "Jeddah",
    brand: "Chopard",
    name: "Al Basateen Mall",
    address:
      "Al Basateen Mall, Prince Mohammad Bin Abdulaziz St., Jeddah",
    tel: "(012) 6126299",
  },
  {
    city: "Jeddah",
    brand: "Hublot",
    name: "El Khayyat Center",
    address:
      "21553 El Khayyat Center, Tahlia Street, Al Andalus, Jeddah",
    tel: "(012) 6774125",
  },

  // ================= KHOBAR =================
  {
    city: "Khobar",
    brand: "Chopard",
    name: "Al-Shaikh Avenue",
    address:
      "Al-Shaikh Avenue, King Salman Road, Al-Khobar",
    tel: "(013) 8022882",
  },
  {
    city: "Khobar",
    brand: "Hublot",
    name: "Al-Shaikh Avenue",
    address:
      "Al-Shaikh Avenue, King Salman Road, Al Khobar",
    tel: "(013) 8021377",
  },
];

const VIDEOS = {
  Riyadh:
    "https://videos.pexels.com/video-files/856929/856929-hd_1280_720_30fps.mp4",
  Jeddah:
    "https://videos.pexels.com/video-files/857195/857195-hd_1280_720_30fps.mp4",
  Khobar:
    "https://videos.pexels.com/video-files/3195394/3195394-hd_1280_720_30fps.mp4",
};

export default function BoutiqueLocatorLuxury() {
  const [city, setCity] = useState(null);
  const [brand, setBrand] = useState(null);
  const [activeStore, setActiveStore] = useState(null);

  const brands = useMemo(() => {
    if (!city) return [];
    return [...new Set(STORES.filter(s => s.city === city).map(s => s.brand))];
  }, [city]);

  const stores = useMemo(() => {
    if (!city || !brand) return [];
    return STORES.filter(s => s.city === city && s.brand === brand);
  }, [city, brand]);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}
      <div className="relative h-[70vh] w-full">
        <AnimatePresence mode="wait">
          {activeStore ? (
            <motion.iframe
              key="map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                activeStore.address
              )}&output=embed`}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          ) : city ? (
            <motion.video
              key={city}
              src={VIDEOS[city]}
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          ) : (
            <div className="absolute inset-0 bg-black" />
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-6 py-24">

        {/* CITIES */}
        <div className="flex justify-center gap-12 mb-16">
          {["Riyadh", "Jeddah", "Khobar"].map((c) => (
            <button
              key={c}
              onClick={() => {
                setCity(c);
                setBrand(null);
                setActiveStore(null);
              }}
              className={`tracking-[0.4em] uppercase text-sm transition ${
                city === c ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* BRANDS */}
        <AnimatePresence>
          {city && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-center gap-10 mb-20"
            >
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => {
                    setBrand(b);
                    setActiveStore(null);
                  }}
                  className={`text-lg font-light tracking-wide transition ${
                    brand === b
                      ? "text-white"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {b}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* STORES */}
        <div className="space-y-10 max-w-3xl mx-auto">
          <AnimatePresence>
            {stores.map((store, idx) => (
              <motion.div
                key={store.name + idx}
                onMouseEnter={() => setActiveStore(store)}
                onMouseLeave={() => setActiveStore(null)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border-b border-white/10 pb-8 cursor-pointer group"
              >
                <h3 className="text-2xl font-baskerville group-hover:text-white transition">
                  {store.name}
                </h3>
                <p className="text-white/60 mt-2">{store.address}</p>
                <p className="text-white/40 mt-1 text-sm">{store.tel}</p>

                <div className="h-px w-0 bg-white group-hover:w-full transition-all duration-700 mt-4" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
