"use client";
import Image from "next/image";
import profilepic from "../assets/profilepic.png";
import { TypeAnimation } from "react-type-animation";
import React, { useRef } from "react";
import { Clouds } from "./Clouds";

export const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null); // Keeps it flexible

  return (
    <>
      <Clouds parallaxRef={parallaxRef} />
    </>
  );
};
