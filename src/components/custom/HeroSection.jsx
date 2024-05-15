import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
        <h1 className='text-white text-4xl mb-4 lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-purple-500 to bg-pink-500'>I'm Adnan</span></h1>
        <p className='text-[#ADB7BE] text-lg lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis deleniti quasi ullam ipsam sed culpa officiis magni veniam, cupiditate, quibusdam nostrum, eligendi illum? Dolorum illum voluptatum voluptates voluptas cumque optio.
        </p>
        <div>
            <Button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">Hire Me</Button>
            <Button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800    mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"><span className='block bg-[#121212] hover:bg-slate-800 rounded-full w-full sm-w-fit  px-5 py-2'>Download CV</span></Button>
        </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className='rounded-full bg-[#181818] w-[350px] lg:w-[500px] h-[400px] relative'>
            <Image src="/images/user.jpg"
            alt='hero-image'
            width={300}
            height={300}
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' />
        </div>
        </div>
        </div>
    </section>
  )
}

export default HeroSection