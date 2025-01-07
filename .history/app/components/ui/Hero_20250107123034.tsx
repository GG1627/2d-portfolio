"use client";
import Image from "next/image";
import profilepic from "../assets/profilepic.png";
import { useRef } from "react";
import { Clouds } from "./Clouds";

export const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <>
      <Clouds parallaxRef={parallaxRef} />
    </>
  );
};
