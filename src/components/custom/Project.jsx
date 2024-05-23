"use client";
import { projectsData } from "@/utils/projectData";
import ProjectCard from "./ProjectCard";
import { Button } from "../ui/button";

const Project = () => {
  return (
    <div className="text-white">
      <div className="w-full bg-neutral-900 mb-10  sticky -top-1 z-10   ">
      <div className=" flex flex-wrap justify-center items-center p-5 gap-3  h-[25vh] overflow-auto md:h-auto">
      {
        projectsData.map((project,index)=>(
          <a href={`#project-${project.id}`} key={index}>
          <Button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1 rounded-full hover:scale-110 transition-all duration-300  "><span className="bg-neutral-900 rounded-full px-6 py-2 ">Project #{project.id}</span></Button>
          </a> 
        ))
      }
      </div></div>
      <div className="mt-5 p-4 md:p-10 rounded-3xl ">
      {projectsData.map((project, index) => (
        <div key={index} id={`project-${project.id}`} className="scroll-mt-52 md:scroll-mt-32">
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
      ))}</div>
    </div>
  );
};

export default Project;
