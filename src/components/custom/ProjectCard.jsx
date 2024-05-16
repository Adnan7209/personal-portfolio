import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import { Separator } from '../ui/separator'

const ProjectCard = ({id,name,heading,liveLink,gitHubLink,description,images,techUsed}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 md:gap-10 mb-5'>
        <div className='text-white text-xl md:text-3xl xl:text-5xl hover:scale-110 transition-all duration-300'>
            <span>{name}{' : '}</span>
            <span className='text-[#ADB7BE]'>{heading}</span>
        </div>
        <Carousel className="w-full "
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
            {/* <Separator/> */}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    </div>
  )
}

export default ProjectCard