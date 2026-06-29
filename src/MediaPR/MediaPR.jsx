// pages/MediaPR.jsx

import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import blogs from "./blogs";

export default function MediaPR() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-black px-6 md:px-14 py-20">
      <h2 className="font-baskerville text-4xl text-center md:text-6xl tracking-[0.25em] text-white mb-16 uppercase">
        Media & PR
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        {blogs.slice(0, 3).map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <p className="text-gray-500 uppercase text-sm mb-5">
              {blog.date}
            </p>

            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-70 object-cover"
            />

            <h3 className="mt-8 text-[2rem] leading-tight font-serif text-white">
              {blog.title}
            </h3>

            <p className="mt-5 text-lg text-gray-200 leading-8">
              {blog.short}
            </p>

            {/* GO TO ALL BLOGS PAGE */}
            <button
              onClick={() => navigate("/media-pr")}
              className="mt-7 cursor-pointer border-b border-black text-lg text-gray-400"
            >
              Read more
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}