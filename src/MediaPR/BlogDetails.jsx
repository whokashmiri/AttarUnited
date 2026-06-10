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
  const currentIndex = blogs.findIndex(
  (item) => item.id === Number(id)
);

const nextBlog =
  currentIndex !== -1 &&
  currentIndex < blogs.length - 1
    ? blogs[currentIndex + 1]
    : null;

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

 {nextBlog && (
  <div className="max-w-6xl mx-auto px-6 pb-24">
    <div className="border-t border-gray-300 pt-16">

      <p className="uppercase text-sm tracking-[0.3em] text-gray-500 mb-8">
        Next Article
      </p>

      <div
        onClick={() =>
          navigate(`/media-pr/${nextBlog.id}`)
        }
        className="grid md:grid-cols-2 gap-10 items-center cursor-pointer group"
      >
        <div className="overflow-hidden">
          <img
            src={nextBlog.image}
            alt={nextBlog.title}
            className="w-full h-[300px] object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">
            {nextBlog.date}
          </p>

          <h3 className="text-3xl md:text-5xl font-serif text-[#9b6b4d] leading-tight">
            {nextBlog.title}
          </h3>

          <span className="inline-block mt-8 border-b border-black pb-1 text-sm uppercase tracking-[0.3em]">
            Read Next →
          </span>
        </div>
      </div>

    </div>
  </div>
)}
      <Footer/>
    </section>
  );
}