import React from "react";
import Home from "./Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Location from "./components/D/Location.jsx";
import BlogsPage from "./MediaPR/BlogsPage.jsx";
import BlogDetails from "./MediaPR/BlogDetails.jsx";

const App = () => {
  return (
    <>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* BOUTIQUES */}
        <Route path="/location" element={<Location />} />

        {/* CITY PAGE */}
        <Route
          path="/city/:city"
          element={<Location />}
        />

        {/* INDIVIDUAL BOUTIQUE PAGE */}
        <Route
          path="/boutique/:city/:slug"
          element={<Location />}/>

          
    
        <Route path="/media-pr" element={<BlogsPage />} />

        {/* SINGLE BLOG PAGE */}
        <Route path="/media-pr/:id" element={<BlogDetails />} />
        

        {/* FALLBACK */}
        <Route path="*" element={<Home />} />

      </Routes>
    </>
  );
};

export default App;