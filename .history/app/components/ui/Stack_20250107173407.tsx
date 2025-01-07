"use client";
import React, { useEffect } from "react";
import {
  SiFramer,
  SiFigma,
  SiNotion,
  SiAirtable,
  SiZapier,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
} from "react-icons/si";
import { FaLemon } from "react-icons/fa";
import { color, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stackItems = [
  {
    id: 1,
    name: "Framer",
    icon: <SiFramer size={100} />,
    color: "text-green-200",
  },
  {
    id: 2,
    name: "Figma",
    icon: <SiFigma size={100} />,
    color: "text-green-200",
  },
  {
    id: 3,
    name: "React",
    icon: <SiReact size={100} />,
    color: "text-green-200",
  },
  {
    id: 4,
    name: "Node.js",
    icon: <SiNodedotjs size={100} />,
    color: "text-green-200",
  },
  {
    id: 5,
    name: "MongoDB",
    icon: <SiMongodb size={100} />,
    color: "text-green-200",
  },
  {
    id: 6,
    name: "Docker",
    icon: <SiDocker size={100} />,
    color: "text-green-200",
  },
];

const itemVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 3,
    },
  },
};

export const Stack = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section className="bg-white max-w-[250px] mx-auto">
      fieofwe
      <div className=" text-center bg-green-200">mimfowef</div>
    </section>
  );
};
