"use client";
import { Hero } from "./sections/Hero";
import { Stack } from "./sections/Stack";
import { Projects } from "./sections/Projects";
import { Navbar } from "./sections/Navbar";
import About from "./sections/About";
import { Contact } from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div
      style={{
        overflowY: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
