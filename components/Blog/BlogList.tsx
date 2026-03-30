"use client";
import React from "react";
import BlogEntry from "./BlogEntry";

const blogPosts = [
  {
    year: "2026",
    posts: [
      { date: "Oct 04", title: "Digital Nomad in Bali", views: "2,129", slug: "Digitalnomadblog" },
      { date: "Mar 02", title: "Writing RFCs", views: "2,364", slug: "writing-rfcs" },
      { date: "Oct 04", title: "Building Server-Driven UIs", views: "2,129", slug: "building-server-driven-uis" },
      { date: "Mar 02", title: "Writing RFCs", views: "2,364", slug: "writing-rfcs" },
    ],
  }
];

const BlogList = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-white">
      {blogPosts.map((group) => (
        <div key={group.year} className="mb-12">
          <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-2 text-green-300">
            {group.year}
          </h2>
          <div className="space-y-2">
            {group.posts.map((post, index) => (
              <BlogEntry
                key={index}
                date={post.date}
                title={post.title}
                views={post.views}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogList;
