"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import React, { useRef } from "react";
import ParallaxClouds from "./Clouds";

export const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null); // Keeps it flexible

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #557BAD, #8BAAC4, #5D97C9, #0F62AB, #000)",
      }}
      className="overflow-x-clip min-h-screen pt-12 flex items-center justify-center"
    >
      <div className="container mx-auto relative space-y-6">
        <Image
          src="/avatar.png"
          alt="avatar"
          className="mx-auto"
          width={250}
          height={250}
        />
        <h1 className="text-blue-200 font-extrabold text-7xl">Lets create</h1>
        <TypeAnimation
          className="text-7xl text-white inline-block"
          sequence={["experience", 1000, "websites", 1000, "designs", 1000]}
        />
      </div>
      <ParallaxClouds />
    </div>
  );
};
