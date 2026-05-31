"use client";
import React from "react";
import Link from "next/link";
import { HiArrowLeft, HiOutlineClock, HiOutlineEye } from "react-icons/hi2";
import ParticlesHero from "../Home/Hero/ParticleBackGround";

type BlogPostProps = {
  title: string;
  date: string;
  views: string;
  content: React.ReactNode;
};

const BlogPost = ({ title, date, views, content }: BlogPostProps) => {
  return (
    <article className="bg-[#050505] min-h-screen text-white selection:bg-green-500/30">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex flex-col items-center justify-center overflow-hidden">
        <ParticlesHero />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-green-300 transition-colors mb-8 group"
          >
            <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-r from-white via-white to-gray-500">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-gray-400 text-sm font-medium">
            <div className="flex items-center gap-2">
              <HiOutlineClock className="w-4 h-4 text-green-400" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineEye className="w-4 h-4 text-green-400" />
              <span>{views} views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 bg-[#050505] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <div className="h-px bg-linear-to-r from-transparent via-gray-800 to-transparent max-w-4xl mx-auto mb-16" />

        <div className="max-w-3xl mx-auto px-6 pb-32">
          <div className="prose prose-invert prose-green max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-lg
            prose-img:rounded-2xl prose-img:shadow-2xl
            prose-a:text-green-400 prose-a:no-underline hover:prose-a:text-green-300
            prose-strong:text-white prose-code:text-green-300">
            {content}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
