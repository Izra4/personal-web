"use client";
import React from "react";
import Navbar from "../_components/navigation/index";
import Description from "./_components/description";
import Heading from "./_components/header";
import ProfileImage from "./_components/image";

const DashboardPage = () => {
  return (
    <div className="bg-primary w-screen min-h-screen lg:h-screen flex flex-col">
      <title>Izra.me | Home</title>
      <Navbar />

      {/* Desktop */}
      <div className="hidden lg:flex w-full h-screen">
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-col max-w-3xl 2xl:max-w-5xl 2xl:pl-40 px-20 pt-16">
            <div className="2xl:mt-36">
              <Heading />
              <Description />
            </div>
          </div>
          <ProfileImage />
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex justify-center items-center">
        <div className="flex flex-col max-w-3xl 2xl:max-w-5xl px-10 pt-4">
          <Heading />
          <ProfileImage />
          <Description />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
