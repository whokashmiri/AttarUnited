// pages/BlogDetails.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogs from "./blogs";
import Navbar from "../Layout/Navbar";
import Footer from "../components/Footer/Footer";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <div className="h-screen flex items-center justify-center">
        Blog not found
      </div>
    );
  }

  return (
    <section className="bg-[#f5f5f3] min-h-screen">
        <Navbar/>
      {/* HERO IMAGE */}
      <div className="w-full h-87.5 md:h-150 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <button
          onClick={() => navigate(-1)}
          className="mb-10 border-b border-black text-lg"
        >
          Back
        </button>

        <p className="uppercase text-gray-500 tracking-wide text-sm mb-5">
          {blog.date}
        </p>

        <h1 className="text-4xl md:text-6xl font-serif text-[#9b6b4d] leading-tight">
          {blog.title}
        </h1>

        <div className="mt-10 space-y-8 text-[1.2rem] leading-[2.3rem] text-[#222]">
          {blog.full
            .trim()
            .split("\n")
            .filter(Boolean)
            .map((para, index) => (
              <p key={index}>{para}</p>
            ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
}