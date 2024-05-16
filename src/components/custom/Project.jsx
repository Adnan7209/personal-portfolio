"use client";
import { projectsData } from "@/utils/projectData";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="text-white mt-20">
      {projectsData.map((project, index) => (
        <div key={index}>
          <ProjectCard
            id={project.id}
            name={project.name}
            heading={project.heading}
            liveLink={project.liveLink}
            gitHubLink={project.gitHubLink}
            techUsed={project.techUsed}
            description={project.description}
            images={project.images}
          />
        </div>
      ))}
    </div>
  );
};

export default Project;
