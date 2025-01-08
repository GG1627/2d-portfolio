import { Hero } from "./sections/Hero";
import { Stack } from "./sections/Stack";
import { Projects } from "./sections/Projects";
import { Navbar } from "./sections/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Hero />
      {/* <Projects />
      <Stack /> */}
    </div>
  );
}
