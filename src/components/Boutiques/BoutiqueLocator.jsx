/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DATA = {
  Jeddah: {
    video: "https://videos.pexels.com/video-files/857195/857195-hd_1280_720_30fps.mp4",
    stores: [
      {
        name: "Attar United — Tahlia",
        meta: "Flagship Boutique",
        address: "Tahlia Street, Jeddah",
        map: "https://www.google.com/maps?q=Tahlia%20Street%20Jeddah&output=embed",
      },
      {
        name: "Attar United — Red Sea Mall",
        meta: "Luxury Retail",
        address: "Red Sea Mall, Jeddah",
        map: "https://www.google.com/maps?q=Red%20Sea%20Mall%20Jeddah&output=embed",
      },
    ],
  },
  Riyadh: {
    video: "https://videos.pexels.com/video-files/856929/856929-hd_1280_720_30fps.mp4",
    stores: [],
  },
};

export default function BoutiqueLocatorCinematic() {
 const [city, setCity] = useState("Jeddah");
const [activeStore, setActiveStore] = useState(null);


  const cityData = DATA[city];

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* HERO MEDIA */}
      <div className="relative h-[70vh] w-full">
        <AnimatePresence mode="wait">
          {activeStore !== null ? (
            <motion.iframe
              key="map"
              src={cityData.stores[activeStore].map}
              className="absolute inset-0 h-full w-full"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            />
          ) : (
            <motion.video
              key={city}
              src={cityData.video}
              autoPlay
              loop
              muted
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

        {/* CITY TABS */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-10">
          {Object.keys(DATA).map((c) => (
            <button
              key={c}
              onClick={() => {
                setCity(c);
                setActiveStore(null);
              }}
              className={`text-sm tracking-[0.4em] uppercase transition ${
                c === city ? "text-white" : "text-white/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* BOUTIQUE TIMELINE */}
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12">
          <p className="text-xs tracking-[0.4em] text-white/50 uppercase">
            Boutiques
          </p>
          <h2 className="mt-4 font-baskerville text-4xl">
            {city}
          </h2>
        </div>

        <div className="space-y-10">
          {cityData.stores.map((store, idx) => (
            <motion.div
              key={store.name}
              onMouseEnter={() => setActiveStore(idx)}
              onMouseLeave={() => setActiveStore(null)}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-6">
                <div className="w-24 text-xs tracking-[0.35em] text-white/40">
                  {store.meta}
                </div>

                <div className="flex-1 border-b border-white/10 pb-6">
                  <h3 className="font-baskerville text-2xl group-hover:text-white transition">
                    {store.name}
                  </h3>
                  <p className="mt-3 text-white/60 max-w-xl">
                    {store.address}
                  </p>
                </div>
              </div>

              {/* Focus Glow */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute left-32 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
