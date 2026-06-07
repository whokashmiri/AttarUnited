// BlogsPage.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import blogs from "./blogs";
import Navbar from "../Layout/Navbar";
import Footer from "../components/Footer/Footer";

export default function BlogsPage() {
  const navigate = useNavigate();

  return (
    <section className="bg-black min-h-screen px-6 md:px-16 py-20">
        <Navbar/>
      <h1 className="text-5xl font-serif text-[#9b6b4d] mb-20">
        Media & PR
      </h1>

      <div className="space-y-24">
        {blogs.map((blog , index) => (
          <div
  key={blog.id}
  className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
>
          {index % 2 === 0 ? (
  <>
    {/* IMAGE */}
    <div className="overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[500px] object-cover transition duration-700 hover:scale-105"
      />
    </div>

    {/* TEXT */}
    <div>
      <p className="uppercase text-gray-200 tracking-[0.2em] text-sm mb-4">
        {blog.date}
      </p>

      <h2 className="text-4xl md:text-5xl font-serif text-[#9b6b4d] leading-tight">
        {blog.title}
      </h2>

      <p className="mt-8 text-lg leading-9 text-white">
        {blog.full}
      </p>

      <button
        onClick={() => navigate(`/media-pr/${blog.id}`)}
        className="mt-8 inline-flex items-center border-b border-black pb-1 text-sm text-gray-300 transition"
      >
        Read More
      </button>
    </div>
  </>
) : (
  <>
    {/* TEXT */}
    <div className="order-2 md:order-1">
      <p className="uppercase text-gray-500 tracking-[0.2em] text-sm mb-4">
        {blog.date}
      </p>

      <h2 className="text-4xl md:text-5xl font-serif text-[#9b6b4d] leading-tight">
        {blog.title}
      </h2>

      <p className="mt-8 text-lg leading-9 text-white">
        {blog.full}
      </p>

      <button
        onClick={() => navigate(`/media-pr/${blog.id}`)}
        className="mt-8 inline-flex items-center border-b border-black pb-1text-sm text-gray-300 transition"
      >
        Read More
      </button>
    </div>

    {/* IMAGE */}
    <div className="order-1 md:order-2 overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[500px] object-cover transition duration-700 hover:scale-105"
      />
    </div>
  </>
)}
          </div>
        ))}
      </div>
      <Footer/>
    </section>
  );
}