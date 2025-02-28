import React from "react";
import Navbar from "../_components/navigation";
import { Lexend, Poppins } from "next/font/google";
import BlogPreview from "./_components/blog-preview";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const BlogPage: React.FC = () => {
  // Data contoh untuk blog
  const blogPosts = [
    {
      id: 1,
      title: "TRPC: Apa, Kenapa dan Bagaimana",
      content: "Discover the power of TRPC and how it simplifies backend development.",
      imageUrl: "https://via.placeholder.com/400x250",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      content:
        "Discover advanced techniques for building beautiful UIs with Tailwind CSS framework. Discover advanced techniques for building beautiful UIs with Tailwind CSS framesfdgawbgfaassaddasd",
      imageUrl: "https://via.placeholder.com/400x250",
    },
    {
      id: 3,
      title: "Next.js for Beginners",
      content: "An introduction to Next.js framework and how it simplifies React development. ",
      imageUrl: "https://via.placeholder.com/400x250",
    },
    {
      id: 4,
      title: "TypeScript Tips and Tricks",
      content:
        "Improve your TypeScript skills with these practical tips from experienced developers.",
      imageUrl: "https://via.placeholder.com/400x250",
    },
  ];

  return (
    <div className="bg-primary min-h-screen flex flex-col overflow-x-hidden">
      <title>Iz.me | Experience</title>
      <Navbar />
      <div className="w-full flex-1 text-primary_text p-8 overflow-y-auto overflow-x-hidden">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Blog Previews */}
          {blogPosts.map((post) => (
            <BlogPreview
              poppins={poppins.className}
              lexend={lexend.className}
              key={post.id}
              title={post.title}
              content={post.content}
              imageUrl={""}
              id={post.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
