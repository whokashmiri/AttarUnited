// BlogsPage.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import blogs from "./blogs";

export default function BlogsPage() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f5f5f3] min-h-screen px-6 md:px-16 py-20">
      <h1 className="text-5xl font-serif text-[#9b6b4d] mb-20">
        Media & PR
      </h1>

      <div className="space-y-24">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
          >
            {/* IMAGE */}
            <div>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-105 object-cover"
              />
            </div>

            {/* CONTENT */}
            <div>
              <p className="uppercase text-gray-500 tracking-wide text-sm mb-4">
                {blog.date}
              </p>

              <h2 className="text-4xl font-serif text-[#9b6b4d] leading-tight">
                {blog.title}
              </h2>

              <p className="mt-7 text-xl leading-10 text-[#222]">
                {blog.short}
              </p>

              {/* OPEN PARTICULAR BLOG */}
              <button
                onClick={() => navigate(`/media-pr/${blog.id}`)}
                className="mt-8 border-b border-black text-xl"
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}