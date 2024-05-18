import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
    Card,
    CardContent
  } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import { Button } from '../ui/button'
import { Github, Link } from 'lucide-react'

const ProjectImageSection = ({images,liveLink,gitHubLink}) => {
  return (
    <div className='relative flex justify-center items-center'>
    <Carousel className="w-full md:w-[80%] md:filter md:blur-sm  "
        opts={{
            align: "start",
            loop: true,
          }}
        plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="rounded-3xl">
                <CardContent className="flex aspect-video items-center justify-center ">
                  <img src={image} alt={name} className='rounded-xl'/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>
    <div className='hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:flex flex-col items-center justify-between '>
    <a href={liveLink}>
            <Button className="px-14 py-6  w-full gap-2 sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-110 transition-all duration-200">
              <span>Live Site</span>
              <Link />
            </Button></a>
            <a href={gitHubLink}>
            <Button className="px-1 py-6 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800    mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-110 transition-all duration-200">
              <span className=" bg-[#ffffffd4]  gap-2 text-gray-500 rounded-full w-full sm-w-fit  px-14 py-2 flex ">
                <span>Source Code</span> 
                
                <Github className='text-gray-500' />
              </span>
              
              
            </Button> </a>
          </div>
    
     </div>
  )
}

export default ProjectImageSection