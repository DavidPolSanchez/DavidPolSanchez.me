import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My Latest <span className="text-green-300"> Blogs </span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16">
        <div>
          <BlogCard
            image="/images/blogdigitalnomad.jpg"
            title="Understanding React Hooks: A Comprehensive Guide"
            date="August 15, 2023"
            tags={["React", "JavaScript", "hooks"]}
          />
        </div>
        <div>
          <BlogCard
            image="/images/blogsocialmedia.png"
            title="Understanding React Hooks: A Comprehensive Guide"
            date="August 15, 2023"
            tags={["React", "JavaScript", "hooks"]}
          />
        </div>
        <div>
          <BlogCard
            image="/images/blogcomingsoon.png"
            title="Understanding React Hooks: A Comprehensive Guide"
            date="August 15, 2023"
            tags={["React", "JavaScript", "hooks"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
