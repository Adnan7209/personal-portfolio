import { techStackList } from '@/utils/techStacks';
import React from 'react'
import StackIcon from "tech-stack-icons"; // You can also use any another import name



const SkillsSection = () => {
  return (
    <div className='flex md:flex-row flex-col mt-28 bg-neutral-900 rounded-3xl  '>
      <div className=' mt-16 flex flex-col gap-10'>
        <div className='hover:scale-110 duration-300 transition-all flex flex-col justify-center items-center gap-2'>
          <h2 className='text-4xl md:text-6xl text-white' >Skills</h2>
          <div className='bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl w-14 h-1'></div>
        </div>
        <p className='text-[#ADB7BE] text-lg lg:text-xl italic px-5 md:px-14'>I am developing my knowledge of the tech stack, including both front-end and back-end technologies. As a quick learner, I swiftly adapt to new technical environments and am dedicated to continuously enhancing my skills. Committed to my expertise, I actively pursue upskilling and strive to keep up with technological advancements.</p>
      </div>
      <div className='h-screen overflow-hidden'>
      <div className='flex flex-wrap  mt-10 animate-scroll-y-sm md:animate-scroll-y-md  lg:animate-scroll-y-lg'>
      {
          techStackList.map((tech,index)=>(
            <div className='hover:scale-110 duration-300 transition-all m-1 my-2 md:m-5'>
            <StackIcon name={tech.icon} className='bg-[#fff] p-3 m-2  rounded-3xl ' />
            <h3 className='text-center text-white'>{tech.name}</h3>
            </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default SkillsSection