import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectsArray = projects.map((project => {
    return <ProjectItem
            name={project.name}
            about={project.about}
            technologies={project.technologies}
            key={project.id} />
  }))
  return (
    <div id="projects">
      <h2>{projects.name}</h2>
      <div id="project-list" key={projects.id}>{projectsArray}</div>
    </div>
  );
}

export default ProjectList;
