import React from "react";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "3D Portfolio",
    description:
      "An immersive, fully interactive 3D portfolio that seamlessly integrates 2D elements, providing a dynamic and engaging experience for users to explore the app in a visually compelling environment.",
    image: "images/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tools: [
      "TypeScript",
      "React",
      "React-Three-Fiber",
      "Three.js",
      "GSAP",
      "HTML",
      "CSS",
    ],
  },
  {
    id: 2,
    title: "2D Portfolio",
    description:
      "A dynamic portfolio featuring engaging animations, designed to serve as a 2D component within my 3D portfolio project.",
    image: "images/two-portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tools: [
      "TypeScript",
      "React",
      "Next.js",
      "Framer Motion",
      "Parallax",
      "HTML",
      "Tailwind CSS",
      "Vercel",
    ],
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "Developed a fully functional Netflix clone with user authentication, movie browsing, subscription management, and recurring payments, delivering an immersive streaming experience.",
    image: "images/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GG1627/Netflix-clone",
    previewUrl: "https://movieappv2-8361c.web.app/",
    tools: [
      "JavaScript",
      "React",
      "Redux",
      "Firebase",
      "Stripe",
      "API",
      "HTML",
      "CSS",
    ],
  },
  {
    id: 4,
    title: "Game Twin",
    description:
      "Developed a web application that uses Quick Sort and Cocktail Sort algorithms to provide personalized video game recommendations based on parameters such as Metacritic ratings and achievements, leveraging a dataset of over 470,000 games.",
    image: "images/gameTwin.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GG1627/Game-Twin",
    previewUrl: "https://game-twin.onrender.com/",
    tools: ["C++", "Python", "Django", "Flask", "HTML", "CSS"],
  },
  {
    id: 5,
    title: "Manim Data Structures",
    description:
      "Collaborating on an open-source project to develop a Python plugin with the Manim library for animating and visualizing data structures, enhancing the understanding of complex algorithms.",
    image: "images/manim.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ufosc/manim-data-structures",
    previewUrl: "",
    tools: ["Python", "Manim", "Mobjects"],
  },
  {
    id: 6,
    title: "Minesweeper",
    description:
      "Recreated the classic Minesweeper game with full functionality, including a timer, mine count, flag placement, and leaderboard, offering an engaging and complete user experience.",
    image: "images/minesweeper.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GG1627/MineSweeper",
    previewUrl: "",
    tools: ["C++", "SFML", "Chronos"],
  },
];

export const Projects = () => {
  return (
    <>
      <h2
        className="text-center text-6xl font-bold text-[#5D97C9] mt-4 mb-10 font-lexend"
        id="Projects"
      >
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 px-10">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            tools={project.tools}
          />
        ))}
      </div>
    </>
  );
};
