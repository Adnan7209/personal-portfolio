import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import ProjectImageSection from "./ProjectImageSection";
import ProjectTabSection from "./ProjectTabSection";
import { Github, GithubIcon, Link, LucideGithub } from "lucide-react";

const ProjectCard = ({
  id,
  name,
  heading,
  liveLink,
  gitHubLink,
  description,
  images,
  techUsed,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 md:gap-10 mb-20 md:mb-36">
      <div className="text-white text-xl md:text-3xl xl:text-5xl hover:scale-110 transition-all duration-300">
        <a href={liveLink}>
          <span>
            {name}
            {" : "}
          </span>
          <span className="text-[#ADB7BE]">{heading} </span>
        </a>
      </div>
      <div className=" md:hidden">
        <a href={liveLink}>
          <Button className="px-16 py-6  w-full gap-2 sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-110 transition-all duration-200">
            <span>Live Site</span>
            <Link />
          </Button>
        </a>
        <a href={gitHubLink}>
          <Button className="px-1 py-6 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800    mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-110 transition-all duration-200">
            <span className=" bg-[#121212]  gap-2  rounded-full w-full sm-w-fit  px-14 py-2 flex ">
              <span>Source Code</span>

              <Github color="white" />
            </span>
          </Button>
        </a>
      </div>
      <ProjectImageSection
        images={images}
        liveLink={liveLink}
        gitHubLink={gitHubLink}
      />
      <ProjectTabSection techUsed={techUsed} description={description} />
    </div>
  );
};

export default ProjectCard;
