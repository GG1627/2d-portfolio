import Image from "next/image";
import { Hero } from "./sections/Hero";
import { Navbar } from "./sections/Navbar";
import { Stack } from "./sections/Stack";
import { Projects } from "./sections/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Stack />

      {/* <Navbar /> */}
    </div>
  );
}
