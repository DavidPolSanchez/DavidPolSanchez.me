import React from "react";
import BlogPost from "@/components/Blog/BlogPost";
import { notFound } from "next/navigation";

import { blogPostsContent } from "../data/blogData";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = blogPostsContent[slug];

  if (!post) {
    notFound();
  }

  return (
    <BlogPost
      title={post.title}
      date={post.date}
      views={post.views}
      content={post.content}
    />
  );
}
