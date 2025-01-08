import React from "react";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "3D Portfolio",
    description: "A fully interactive 3D portfolio with integrated 2D elements",
    image: "/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "2D Portfolio",
    description:
      "Portfolio built to be used as 2D aspect in 3D Portfolio Project.",
    image: "/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "A fully functional Netflix Clone app built to be user friendly and made to be interactive as original Netlfix",
    image: "/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Game Twin",
    description:
      "Application made with algorithms, merge sort and cocktail sort to give video game recommendations based on certain attributes such as metacritic rating, etc",
    image: "/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Manim Data Structures",
    description: "Project 5 description",
    image: "/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Minesweeper",
    description: "Project 6 description",
    image: "/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
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
          />
        ))}
      </div>
    </>
  );
};
