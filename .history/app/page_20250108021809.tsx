import { Hero } from "./sections/Hero";
import { Stack } from "./sections/Stack";
import { Projects } from "./sections/Projects";
import { Navbar } from "./sections/Navbar";
import { About } from "./sections/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Stack />
    </div>
  );
}
