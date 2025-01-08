import React from "react";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "3D Portfolio",
    description: "A fully interactive 3D portfolio with integrated 2D elements",
    image: "images/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tools: ["Three.js", "React", "React-three-fiber", "Typescript", "Gsap"],
  },
  {
    id: 2,
    title: "2D Portfolio",
    description:
      "Portfolio built to be used as 2D aspect in 3D Portfolio Project.",
    image: "images/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tools: ["Three.js", "React", "React-three-fiber", "Typescript", "Gsap"],
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "A fully functional Netflix Clone app built to be user friendly and made to be interactive as original Netlfix",
    image: "images/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tools: ["Three.js", "React", "React-three-fiber", "Typescript", "Gsap"],
  },
  {
    id: 4,
    title: "Game Twin",
    description:
      "Application made with algorithms, merge sort and cocktail sort to give video game recommendations based on certain attributes such as metacritic rating, etc",
    image: "images/gameTwin.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/GG1627/Game-Twin",
    previewUrl: "https://game-twin.onrender.com/",
    tools: ["C++", "Python", "Django", "Flask"],
  },
  {
    id: 5,
    title: "Manim Data Structures",
    description: "Plug in built to help visualize data structures",
    image: "images/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tools: ["Three.js", "React", "React-three-fiber", "Typescript", "Gsap"],
  },
  {
    id: 6,
    title: "Minesweeper",
    description:
      "Reendition of the classic minesweeper game built to be fully functional with timer, mine count, flag placement, leaderboard, etc",
    image: "images/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tools: ["Three.js", "React", "React-three-fiber", "Typescript", "Gsap"],
  },
];

export const Projects = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects{" "}
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
