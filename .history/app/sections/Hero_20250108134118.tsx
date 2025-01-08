"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import React from "react";
import ParallaxClouds from "../components/Clouds";
import Avatar from "./../assets/avatar.png";

export const Hero = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #557BAD, #8BAAC4, #5D97C9, #0F62AB, #0a0a0a)",
      }}
      className="overflow-x-clip min-h-screen pb-2 flex items-center justify-center relative"
      id="Home"
    >
      <div className="container mx-auto space-y-10 flex items-center justify-center flex-col text-center">
        <div className="w-[320px] h-[320px] rounded-full overflow-hidden bg-slate-200">
          <Image
            src={Avatar}
            alt="avatar"
            className="object-cover"
            width={320}
            height={320}
          />
        </div>
        <h1 className="text-blue-200 font-extrabold text-8xl">Hi, I'm Gael!</h1>
        <p className="text-blue-200 text-2xl font-semibold max-w-[500px]">
          Computer Engineer @ UF
        </p>
        <TypeAnimation
          className="text-7xl text-white inline-block font-extrabold"
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          sequence={[
            "leader",
            1000,
            "creative",
            1000,
            "passionate",
            1000,
            "driven",
            1000,
            "adaptable",
            1000,
            "ambitious",
            1000,
          ]}
        />
        <ParallaxClouds />
      </div>
    </div>
  );
};
