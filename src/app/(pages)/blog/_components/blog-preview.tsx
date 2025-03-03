"use client";

import React from "react";
import Image from "next/image";

interface BlogPreviewProps {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  lexend: string;
  poppins: string;
}

const BlogPreview = ({ title, content, imageUrl, lexend, poppins, id }: BlogPreviewProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col">
      <Image
        src={imageUrl || "/test.jpg"}
        width={0}
        height={0}
        sizes="100vw"
        alt={""}
        style={{ width: "100%", height: "auto", borderRadius: "8px 8px 0 0" }}
        className="p-2"
      />
      <div className="px-3 pb-3">
        <div className="min-h-16 max-h-16">
          <h2 className={`text-2xl font-semibold text-primary_text mb-2 ${lexend}`}>
            {title || "Blog Title Here"}
          </h2>
        </div>
        <div className="mt-2 font-medium min-h-24 max-h-24 mb-2">
          <p className={`text-sm text-primary_text mb-4 ${poppins} line-clamp-5`}>
            {content ||
              "This is a short preview of the blog content. It gives readers a glimpse of what to expect in the full post."}
          </p>
        </div>
        <div className="flex justify-end items-end">
          <button
            className={`${poppins} bg-[#962727] hover:bg-secondary_text text-white px-4 py-2 
                       rounded-md text-sm transition-all duration-300 ease-in-out`}
            onClick={() => (window.location.href = `/blog/${id}`)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
