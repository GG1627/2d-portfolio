"use client";
import Image from "next/image";
import profilepic from "../assets/profilepic.png";
import { TypeAnimation } from "react-type-animation";
import React, { useRef } from "react";
import ParallaxClouds from "./Clouds";

export const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null); // Keeps it flexible

  return (
    <div className="overflow-x-clip min-h-screen pt-12 flex items-center justify-center bg-[linear-gradient(180deg, #557bad, #8Baac4, #5d97c9, #0f62ab, #000)]">
      <ParallaxClouds />
    </div>
  );
};
