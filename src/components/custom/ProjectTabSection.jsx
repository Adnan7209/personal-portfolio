import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProjectTabSection = ({ techUsed, description }) => {
  return (
    <div className="relative  w-full md:w-[80%] ">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 filter blur-3xl"></div>
      <div className="relative backdrop-blur bg-white bg-opacity-30 rounded-lg p-5 h-[50vh] md:h-auto overflow-auto ">
        <Tabs defaultValue="techUsed" className="text-gray-500">
          <TabsList className="grid w-full grid-cols-2 border border-opacity-30 backdrop-blur bg-white bg-opacity-10">
            <TabsTrigger value="techUsed">Tech Used</TabsTrigger>
            <TabsTrigger value="description">Description</TabsTrigger>
          </TabsList>
          <TabsContent
            value="techUsed"
            className="backdrop-blur bg-white bg-opacity-10 p-4 rounded-lg"
          >
            <Card className="bg-transparent text-gray-500">
              <CardHeader>
                <div className="flex flex-wrap gap-5">
                  {techUsed.map((tech, index) => (
                    <div key={index} className=" px-5 md:px-10 py-3 rounded-3xl md:rounded-full  border border-white hover:scale-110 transition-all duration-300">
                      <CardTitle>{tech}</CardTitle>
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent
            value="description"
            className="backdrop-blur bg-white bg-opacity-10 p-4 rounded-lg "
          >
            <Card className="bg-transparent text-gray-500 text-lg">
              <ul className="list-disc px-2">
                {description.map((item, index) => (
                  <CardContent key={index}>
                    <li className=" hover:scale-105 duration-300 transition-all">
                      {item}
                    </li>
                  </CardContent>
                ))}
              </ul>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectTabSection;
