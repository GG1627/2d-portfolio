import React from "react";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/assets/netflix.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "Project 2 description",
    image: "./../assets/netflix.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "Project 3 description",
    image: "./../assets/netflix.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "React Portfolio Website",
    description: "Project 4 description",
    image: "./../assets/netflix.png",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "React Portfolio Website",
    description: "Project 5 description",
    image: "./../assets/netflix.png",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "React Portfolio Website",
    description: "Project 6 description",
    image: "./../assets/netflix.png",
    tag: ["All", "Web"],
  },
];

export const Projects = () => {
  return (
    // <div className="py-16 container mx-auto min-h-[100vh]">
    <>
      <h2>My Projects </h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};
