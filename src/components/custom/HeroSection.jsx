"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section >
      <div className="grid grid-cols-1 md:grid-cols-12 md:px-10 mb-[150px] relative">
        <div className="md:col-span-7  place-self-center text-center sm:text-left mb-16 md:mb-0 ">
          <div className="text-white text-2xl lg:text-4xl  mb-4  font-extrabold px-15">
            <span className="text-transparent  text-4xl md:text-4xl  lg:text-5xl spa bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to to-pink-500">
              Hello,I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Adnan",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Passionate Programmer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "2em",
                display: "inline-block",
                lineHeight: "1",
              }}
              repeat={Infinity}
            />
          </div>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mt-10 pr-10 md:pr-12 italic mb-3">
            I'm Adnan, a driven undergraduate specializing in software
            development. Welcome to my portfolio where I share my projects and
            the skills I've cultivated along the way.
          </p>
          <div>
            <Button className="px-16 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-110 transition-all duration-200">
              Hire Me
            </Button>
            <a href="/MOHAMMED_ADNAN_RESUME.pdf" download>
            <Button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800    mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-110 transition-all duration-200">
              <span className="block bg-[#121212]  rounded-full w-full sm-w-fit  px-14 py-2 ">
                Download CV
              </span>
            </Button></a>
          </div>
          {/* <div className="pointer-events-none h-[300px] w-[300px] absolute -top-20 left-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  transition-all duration-200  filter blur-xl -z-100 opacity-35"></div> */}
        </div>
        <div className="md:col-span-5 place-self-center relative   ">
          <div className="rounded-full animate-pulse bg-gradient-to-br from-blue-500 via-purple-500 to to-pink-500  w-[250px] md:w-[350px] md:h-[350px] h-[250px]   filter blur-lg"></div>
          <Image
            src="/images/user.jpg"
            alt="hero-image"
            width={300}
            height={300}
            className=" rounded-full md:w-[400px] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
          />
          {/* <div className="relative w-screen h-screen bg-blue-500 flex items-center justify-center">
  <div className="bg-opacity-15 rounded-full bg-gradient-to-br from-purple-500 via-purple-500 to bg-pink-500 w-[350px] md:w-[500px] md:h-[500px] h-[350px] backdrop-blur-3xl flex items-center justify-center">
    <p className="text-white text-xl">Blurred Background</p>
  </div>
</div> */}
        </div>
        <div className="text-[#403f3f] text-8xl  md:text-[120px] font-bold absolute -bottom-[160px] left-[30px] lg:-bottom-[160px] lg:left-[590px] xl:left-[750px] opacity-35">Adnan</div>
      </div>
    </section>
  );
};

export default HeroSection;
