"use client";
import Image from "next/image";
import Avatar from "../assets/avatar.png";
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
      <div className="container mx-auto relative">
        <Image
          src="/assets/avatar.png"
          alt="avatar"
          className="mx-auto"
          width={250}
          height={250}
        />
      </div>
      <ParallaxClouds />
    </div>
  );
};
