import React from "react";
import BlogPost from "@/components/Blog/BlogPost";
import { notFound } from "next/navigation";

// This would typically come from a CMS or local markdown files
// For now, we'll use a local mapping for the example.
const blogPostsContent: Record<string, { title: string, date: string, views: string, content: React.ReactNode }> = {
  "Digitalnomadblog": {
    title: "Digital Nomad in Bali",
    date: "Oct 04, 2026",
    views: "2,129",
    content: (
      <>
        <p>
          Bali has long been the mecca for digital nomads, and for good reason. From the lush rice terraces of Ubud to the vibrant surf breaks of Canggu, this island offers a unique blend of productivity and paradise.
        </p>
        <h2>The Canggu Vibe</h2>
        <p>
          Canggu is where the modern nomad thrives. With world-class coworking spaces like Dojo and Tropical Nomad, you're never far from high-speed internet and a community of like-minded individuals. The "work hard, play hard" mentality is palpable here.
        </p>
        <blockquote>
          "The best office in the world is the one that allows you to see the sunset over the Indian Ocean after a productive day of coding."
        </blockquote>
        <h2>Productivity in Paradise</h2>
        <p>
          Many people ask: "How do you actually get work done in Bali?" The secret lies in the routine. Waking up early for a surf or yoga session sets the tone for a focused afternoon. The relatively low cost of living also means you can afford a comfortable workspace and nutritious food, which are essential for long-term productivity.
        </p>
        <h3>Top Tips for New Nomads:</h3>
        <ul>
          <li><strong>Get an International Driving Permit:</strong> You'll want a scooter to get around.</li>
          <li><strong>Invest in a good VPN:</strong> Essential for security and accessing home services.</li>
          <li><strong>Join local communities:</strong> Facebook groups and Slack channels are great for networking.</li>
        </ul>
        <p>
          Whether you're a software engineer, a designer, or a writer, Bali provides an environment that fosters creativity and growth. It's not just about the beaches; it's about the feeling of freedom and the community you build along the way.
        </p>
      </>
    )
  },
  "writing-rfcs": {
    title: "Writing RFCs",
    date: "Mar 02, 2026",
    views: "2,364",
    content: (
      <>
        <p>Request for Comments (RFCs) are a crucial part of the engineering process at many top-tier tech companies. They allow for asynchronous collaboration and ensure that technical designs are thoroughly vetted before implementation begins.</p>
        <h2>Why Write RFCs?</h2>
        <p>RFCs help in surfacing potential issues early, aligning stakeholders, and providing a historical record of architectural decisions.</p>
      </>
    )
  },
  "building-server-driven-uis": {
    title: "Building Server-Driven UIs",
    date: "Oct 04, 2026",
    views: "2,129",
    content: (
      <>
        <p>Server-Driven UI (SDUI) is a powerful pattern that allows developers to update the layout and behavior of an application without requiring a new client-side deployment.</p>
      </>
    )
  }
};

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
