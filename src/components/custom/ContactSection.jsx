import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Separator } from "../ui/separator";

const ContactSection = () => {
  return (
    <section className="mt-44 mb-20" id="contact">
      <div className="relative">
        <div className="absolute animate-pulse   blur-sm top-0  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-full h-full"></div>
        <div className="  bg-neutral-900 rounded-3xl h-2 relative"></div>
      </div>
      <div className="bg-neutral-900  text-white  my-4 rounded-3xl p-5">
        <div className="flex flex-col justify-center items-center gap-2 hover:scale-110 duration-300 transition-all">
          <h2 className="text-4xl md:text-6xl text-white">Contact</h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 mt-10">
          <p className="italic text-lg font-thin text-center text-neutral-300 hover:scale-105 duration-300 transition-all">
            Connect with me through any of these social platforms.
          </p>
          <Separator className=" w-[80%]  md:w-[50%] bg-neutral-700 disabled" />
          <div className="flex justify-center items-center flex-wrap gap-5">
            <a
              href="mailto:mdadnan28713@gmail.com"
              className="hover:scale-125 transition-all duration-300"
            >
              <Mail style={{ color: "#eab308" }} />
            </a>
            <a
              href="https://instagram.com/_ad_.nan_"
              className="hover:scale-125 transition-all duration-300"
            >
              <Instagram style={{ color: "#E4405F" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-adnan-491084219/"
              className="hover:scale-125 transition-all duration-300"
            >
              <Linkedin style={{ color: "#0077B5" }} />
            </a>
            <a
              href="https://github.com/Adnan7209"
              className="hover:scale-125 transition-all duration-300"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute animate-pulse   blur-sm top-0  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-full h-full"></div>
        <div className="  bg-neutral-900 rounded-3xl h-2 relative"></div>
      </div>
    </section>
  );
};

export default ContactSection;
