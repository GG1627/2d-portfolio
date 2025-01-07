import Image from "next/image";
import { Hero } from "./sections/Hero";
import { Navbar } from "./sections/Navbar";
import { Stack } from "./sections/Stack";

export default function Home() {
  return (
    <div>
      <Hero />
      <Stack />

      {/* <Navbar /> */}
    </div>
  );
}
