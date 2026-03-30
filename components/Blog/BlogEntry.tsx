"use client";
import React from "react";
import Link from "next/link";

type Props = {
  date: string;
  title: string;
  views: string;
  slug: string;
};

const BlogEntry = ({ date, title, views, slug }: Props) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-4 border-b border-gray-800 hover:bg-white/5 px-4 rounded-lg transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
        <span className="text-gray-500 font-medium text-sm tabular-nums min-w-[60px]">
          {date}
        </span>
        <h3 className="text-lg font-bold text-white group-hover:text-green-300 transition-colors duration-300">
          {title}
        </h3>
      </div>
      <span className="text-gray-600 text-sm mt-1 sm:mt-0 font-medium tabular-nums">
        {views} views
      </span>
    </Link>
  );
};

export default BlogEntry;
