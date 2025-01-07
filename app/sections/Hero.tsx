"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import React, { useRef } from "react";
import ParallaxClouds from "../components/Clouds";

export const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null); // Keeps it flexible

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #557BAD, #8BAAC4, #5D97C9, #0F62AB, #0a0a0a)",
      }}
      className="overflow-x-clip min-h-screen pt-12 flex items-center justify-center relative"
    >
      <div className="container mx-auto space-y-6 flex items-center justify-center flex-col text-center">
        <Image
          src="/avatar.png"
          alt="avatar"
          className="mx-auto"
          width={250}
          height={250}
        />
        <h1 className="text-blue-200 font-extrabold text-7xl">Lets create</h1>
        <TypeAnimation
          className="text-7xl text-white inline-block font-extrabold"
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          sequence={["experience", 1000, "websites", 1000, "designs", 1000]}
        />
        <p className="text-blue-200 text-2xl font-semibold max-w-[500px]">
          My name is Gael and I am a computer engineer at UF
        </p>
        <ParallaxClouds />
      </div>
    </div>
  );
};
