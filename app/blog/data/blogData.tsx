import React from "react";
import { Digitalnomadblog } from "./posts/how-i-reached-remote-work";

export type BlogPostData = {
  title: string;
  date: string;
  views: string;
  content: React.ReactNode;
};

export const blogPostsContent: Record<string, BlogPostData> = {
  "Digitalnomadblog": Digitalnomadblog,
  // Future posts can be added here
};
