import { Hero } from "./sections/Hero";
import { Stack } from "./sections/Stack";
import { Projects } from "./sections/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Stack />
    </div>
  );
}
