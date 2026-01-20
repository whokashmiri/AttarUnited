/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../assets/attar-logo.png";

/**
 * Attar United Navbar (Tailwind + Framer Motion)
 * - Left: Burger icon opens full-screen overlay menu
 * - Center: PNG Logo (ALWAYS perfectly centered using CSS grid)
 * - Right: Language toggle (EN/AR)
 * - Overlay links:
 *   Home, About Us, Our Brands, Boutiques, After Sales Service,
 *   Media & PR, Careers, Contact Us
 *
 * Requirements:
 * - Must be rendered inside a Router (<BrowserRouter/> or <HashRouter/>)
 * - Tailwind configured
 * - framer-motion installed
 */

function Hamburger({ open }) {
  return (
    <div className="relative h-5 w-7">
      <span
        className={[
          "absolute left-0 top-0.5 h-0.5 w-full bg-white/95 transition-all duration-300",
          open ? "translate-y-2 rotate-45" : "",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-2.25 h-0.5 w-full bg-white/95 transition-all duration-300",
          open ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />
      <span
        className={[
          "absolute left-0 top-4 h-0.5 w-full bg-white/95 transition-all duration-300",
          open ? "-translate-y-2 -rotate-45" : "",
        ].join(" ")}
      />
    </div>
  );
}

function GlassIconButton({ children, onClick, className = "", ariaLabel, ariaExpanded }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      className={[
        "inline-flex items-center justify-center",
        "h-11 w-14 rounded-full",
        "border border-white/18 bg-white/6 backdrop-blur-md",
        "text-white/90 hover:bg-white/10 hover:text-white transition",
        "focus:outline-none focus:ring-2 focus:ring-white/20",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function MenuLink({ to, label, onClick }) {
  return (
    <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.98 }} className="w-fit">
      <Link
        to={to}
        onClick={onClick}
        className="group relative block w-fit text-[28px] sm:text-[34px] md:text-[44px] font-semibold tracking-tight text-white/90 hover:text-white transition"
      >
        <span className="relative">
          {label}
          <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-white/80 transition-all duration-300 group-hover:w-full" />
        </span>
      </Link>
    </motion.div>
  );
}

function AttarMenuOverlay({ open, onClose, lang, toggleLang }) {
  const overlay = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.22 } },
    exit: { opacity: 0, transition: { duration: 0.18 } },
  };

  const panel = {
    hidden: { y: "-6%", opacity: 0, filter: "blur(10px)" },
    show: {
      y: "0%",
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      y: "-4%",
      opacity: 0,
      filter: "blur(10px)",
      transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const list = {
    hidden: {},
    show: { transition: { staggerChildren: 0.075, delayChildren: 0.12 } },
    exit: { transition: { staggerChildren: 0.055, staggerDirection: -1 } },
  };

  const item = {
    hidden: { y: 14, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.32 } },
    exit: { y: 10, opacity: 0, transition: { duration: 0.2 } },
  };

  const labels = {
    en: {
      home: "Home",
      about: "About Us",
      brands: "Our Brands",
      boutiques: "Boutiques",
      afterSales: "After Sales Service",
      media: "Media & PR",
      careers: "Careers",
      contact: "Contact Us",
      close: "Close",
      skip: "Skip to content",
    },
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      brands: "علاماتنا التجارية",
      boutiques: "المتاجر",
      afterSales: "خدمة ما بعد البيع",
      media: "الإعلام والعلاقات العامة",
      careers: "الوظائف",
      contact: "تواصل معنا",
      close: "إغلاق",
      skip: "تخطي إلى المحتوى",
    },
  };

  const t = labels[lang] || labels.en;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="attar-overlay"
          className="fixed inset-0 z-80"
          initial="hidden"
          animate="show"
          exit="exit"
          variants={overlay}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />

          {/* Panel */}
          <motion.div
            className="relative mx-auto flex h-screen max-w-300 flex-col px-6 py-7"
            variants={panel}
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" onClick={onClose} className="inline-flex items-center">
                <img
                  src={Logo}
                  alt="Attar United"
                  className="h-8 sm:h-9 md:h-10 w-auto object-contain select-none opacity-95"
                  draggable={false}
                />
              </Link>

              {/* Controls */}
              <div className="flex items-center gap-3">
                <GlassIconButton
                  onClick={toggleLang}
                  ariaLabel="Toggle language"
                  className="w-auto"
                >
                  <span className="px-4 text-xs font-semibold tracking-wide">
                    {lang === "en" ? "EN" : "AR"}
                  </span>
                </GlassIconButton>

                <button
                  onClick={onClose}
                  className="rounded-full border border-white/18 bg-white/6 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-md hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  {t.close}
                </button>
              </div>
            </div>

            {/* Links */}
            <motion.nav
              className="mt-14 flex flex-1 flex-col justify-center"
              variants={list}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.div variants={item} className="mb-6">
                <MenuLink to="/" label={t.home} onClick={onClose} />
              </motion.div>
              <motion.div variants={item} className="mb-6">
                <MenuLink to="/about" label={t.about} onClick={onClose} />
              </motion.div>
              <motion.div variants={item} className="mb-6">
                <MenuLink to="/brands" label={t.brands} onClick={onClose} />
              </motion.div>
              <motion.div variants={item} className="mb-6">
                <MenuLink to="/boutiques" label={t.boutiques} onClick={onClose} />
              </motion.div>
              <motion.div variants={item} className="mb-6">
                <MenuLink to="/after-sales" label={t.afterSales} onClick={onClose} />
              </motion.div>
              <motion.div variants={item} className="mb-6">
                <MenuLink to="/media" label={t.media} onClick={onClose} />
              </motion.div>
              <motion.div variants={item} className="mb-6">
                <MenuLink to="/careers" label={t.careers} onClick={onClose} />
              </motion.div>
              <motion.div variants={item} className="mb-6">
                <MenuLink to="/contact" label={t.contact} onClick={onClose} />
              </motion.div>

              <motion.div variants={item} className="mt-10 text-white/55">
                <p className="text-sm">{t.skip}</p>
              </motion.div>
            </motion.nav>

            {/* Subtle bottom gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-white/10 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar({ initialLang = "en", onLangChange, sticky = true }) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(initialLang);

  const isRTL = useMemo(() => lang === "ar", [lang]);

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleLang = () => {
    const next = lang === "en" ? "ar" : "en";
    setLang(next);
    onLangChange?.(next);
  };

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className={[sticky ? "fixed" : "absolute", "inset-x-0 top-0 z-60"].join(" ")}>
        {/* Top navbar line (GRID => logo always centered) */}
        <div className="mx-auto grid max-w-300 grid-cols-3 items-center px-6 py-5">
          {/* Left burger */}
          <div className="flex justify-start">
            <GlassIconButton
              onClick={() => setOpen((v) => !v)}
              ariaLabel="Open menu"
              ariaExpanded={open}
            >
              <Hamburger open={open} />
            </GlassIconButton>
          </div>

          {/* Center logo (ALWAYS centered) */}
          <div className="flex justify-center">
            <Link to="/" onClick={closeMenu} className="inline-flex items-center">
              <img
                src={Logo}
                alt="Attar United"
                className="h-9 sm:h-10 md:h-11 w-auto object-contain select-none opacity-95"
                draggable={false}
              />
            </Link>
          </div>

          {/* Right language toggle */}
          <div className="flex justify-end">
            <GlassIconButton onClick={toggleLang} ariaLabel="Toggle language" className="w-auto">
              <span className="px-4 text-xs font-semibold tracking-wide">
                {lang === "en" ? "EN" : "AR"}
              </span>
            </GlassIconButton>
          </div>
        </div>

        {/* Optional top fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-black/35 to-transparent" />
      </header>

      <AttarMenuOverlay open={open} onClose={closeMenu} lang={lang} toggleLang={toggleLang} />
    </>
  );
}
