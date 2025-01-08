import React from "react";

const ProjectCard = ({ imgUrl, title, descriptions }) => {
  return (
    <div>
      <div
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
    </div>
  );
};

export default ProjectCard;
