"use client";

import { redirect } from "next/navigation";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="bg-primary w-screen min-h-screen flex flex-col items-center justify-center text-center text-primary_text">
      <h1 className="text-4xl font-semibold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">Oops! The page you are looking for does not exist.</p>
      <button onClick={() => redirect("/")} className="bg-blue-500 text-white px-6 py-2 rounded">
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFoundPage;
