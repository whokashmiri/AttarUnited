import React from "react";
import Home from "./Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Location from "./components/D/Location.jsx";
import BlogsPage from "./MediaPR/BlogsPage.jsx";
import BlogDetails from "./MediaPR/BlogDetails.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import About from "./components/OurStory/About.jsx";
import Brands from "./components/Crazy/Brands.jsx";
import Boutiques from "./components/D/Boutiques.jsx";
import AfterSales from "./components/After-sell/AfterSales.jsx";

const App = () => {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/about" element={<About />} />
       <Route path="/boutiques" element={<Boutiques />} />
      <Route path="/brands" element={<Brands />} />
        <Route path="/after-sales" element={<AfterSales />} />
         <Route path="/media-pr" element={<BlogsPage />} />

      

      {/* BOUTIQUES LANDING PAGE */}
      <Route
        path="/location"
        element={<Location />}
      />

      {/* CITY PAGE */}
      <Route
        path="/city/:city"
        element={<Location />}
      />

      {/* BRAND PAGE */}
      <Route
        path="/brand/:city/:brand"
        element={<Location />}
      />

      {/* BOUTIQUE DETAILS PAGE */}
      <Route
        path="/boutique/:city/:slug"
        element={<Location />}
      />

      {/* MEDIA */}
      <Route
        path="/media-pr"
        element={<BlogsPage />}
      />

      {/* BLOG DETAILS */}
      <Route
        path="/media-pr/:id"
        element={<BlogDetails />}
      />

      {/* FALLBACK */}
      <Route
        path="*"
        element={<Home />}
      />
    </Routes>
  );
};

export default App;