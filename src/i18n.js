import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About Us",
        brands: "Our Brands",
        boutiques: "Boutiques",
        afterSales: "After Sales Service",
        media: "Media & PR",
        careers: "Careers",
        contact: "Contact Us",
      },
    },
    ar: {
      translation: {
        home: "الرئيسية",
        about: "من نحن",
        brands: "علاماتنا التجارية",
        boutiques: "المتاجر",
        afterSales: "خدمة ما بعد البيع",
        media: "الإعلام والعلاقات العامة",
        careers: "الوظائف",
        contact: "تواصل معنا",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
