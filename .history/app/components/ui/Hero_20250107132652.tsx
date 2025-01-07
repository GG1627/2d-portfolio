"use client";
import Image from "next/image";
import profilepic from "../assets/profilepic.png";
import { TypeAnimation } from "react-type-animation";
import React, { useRef } from "react";
import ParallaxClouds from "./Clouds";

export const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null); // Keeps it flexible

  return (
    <div className="relative">
      <ParallaxClouds />
      {/* Your other Hero content here, e.g., text, images, etc. */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
        <h1>Welcome to My Website</h1>
        {/* Add any other hero content */}
      </div>
    </div>
  );
};
