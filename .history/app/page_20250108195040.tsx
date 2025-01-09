import { Hero } from "./sections/Hero";
import { Stack } from "./sections/Stack";
import { Projects } from "./sections/Projects";
import { Navbar } from "./sections/Navbar";
import About from "./sections/About";
import { Contact } from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="no-scrollbar">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}
