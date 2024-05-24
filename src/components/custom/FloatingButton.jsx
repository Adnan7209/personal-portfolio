"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { CircleX } from "lucide-react";

const FloatingButton = () => {
  const [profile, setProfile] = useState(false);
  return (
    <div className="fixed bottom-4 right-4 z-50 text-white ">
      {!profile && (
        <Button
          onClick={() => setProfile(!profile)}
          className="bg-green-500 hover:bg-green-500 rounded-full animate-bounce hover:animate-vibrate"
        >
          Profile
        </Button>
      )}
      {profile && (
        <div className=" flex flex-col items-center justify-center gap-2  ">
          <Button
            onClick={() => setProfile(!profile)}
            variant="outline"
            size="icon"
            className="rounded-full hover:scale-105 transition-all duration-300"
          >
            <CircleX color="#ff0000" />
          </Button>
          <a href="https://github.com/Adnan7209">
            <Button className="flex space-x-2 bg-white  text-black items-center rounded-full hover:bg-white hover:scale-110 duration-300 transition-all ">
              <Image
                src="/images/github.png"
                width={18}
                height={18}
                alt="github"
              />
              <span className="text-xs">GitHub</span>
            </Button>
          </a>
          <a href="https://leetcode.com/u/mdadnan28713/">
            <Button className="flex space-x-2 bg-white text-black items-center rounded-full  hover:bg-white hover:scale-105 duration-300 transition-all">
              <Image
                src="/images/leetcode.png"
                width={18}
                height={18}
                alt="github"
              />
              <span className="text-xs">Leetcode</span>
            </Button>
          </a>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
