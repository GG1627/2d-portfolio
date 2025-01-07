"use client";
import Image from "next/image";
import profilepic from "../assets/profilepic.png";
import { TypeAnimation } from "react-type-animation";
import React, { useRef } from "react";
import { Clouds } from "./Clouds";

export const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement | null>(null); // Explicitly define the type

  return (
    <>
      <Clouds parallaxRef={parallaxRef} />
    </>
  );
};
