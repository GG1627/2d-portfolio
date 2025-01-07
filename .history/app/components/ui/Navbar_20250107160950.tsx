"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#Portfolio" },
  { title: "Stack", path: "#Stack" },
  { title: "Contact", path: "#Contact" },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(true);
  };

  return <>Navbar</>;
};
