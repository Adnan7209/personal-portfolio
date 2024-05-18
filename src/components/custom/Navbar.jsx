import Link from 'next/link'
import React from 'react'
import Navlink from './Navlink'
import { Separator } from '../ui/separator'

const navLinks = [
    {
        title:"About",
        path:"#about"
    },
    {
        title:"Projects",
        path:"#projects"
    },
    {
        title:"Contact",
        path:"#contact"
    },
]
const Navbar = () => {
  return (
    <nav className='bg-[#121212] px-6 md:px-20 py-5 mb-10'>
        <div className='flex items-center justify-between'>
            <Link href={'/'} className='text-xl md:text-3xl text-white hover:scale-110 duration-300 transition-all font-semibold'>PORTFOLIO</Link>
            <div className=''>
                <ul className='flex gap-5 md:gap-10 '>
                    
                        {
                            navLinks.map((link,index)=>(
                                <li key={index} className='md:text-3xl hover:scale-125   font-thin transition-all duration-300'>
                                    <Navlink href={link.path} title={link.title} />

                                </li>
                            ))
                        }
                    
                </ul>

            </div>
        </div>
        
    </nav>
  )
}

export default Navbar