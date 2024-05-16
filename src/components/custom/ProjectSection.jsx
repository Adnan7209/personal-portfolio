import Project from "./Project";

const ProjectSection = () => {
  return (
    <section>
      <div className="relative mt-10 p-3 rounded-3xl">
        {/* Background with Blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 filter blur-3xl rounded-3xl"></div>

        {/* Clear Content Container */}
        <div className="relative bg-[#121212] rounded-3xl p-10">
          <div className="flex flex-col items-center justify-center hover:scale-110 transition-all duration-300">
            <h2 className="text-4xl md:text-6xl text-white ">Projects</h2>
            <div className="w-28 h-1 mt-5 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
          </div>
        </div>
      </div>
      <div className="  bg-neutral-900 p-10 mt-10 rounded-3xl m-3">
        <Project />
      </div>
    </section>
  );
};

export default ProjectSection;