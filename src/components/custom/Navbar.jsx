import Link from 'next/link'
import React from 'react'
import Navlink from './Navlink'

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
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212



        
    ]'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
            <Link href={'/'} className='text-xl text-white font-semibold'>PORTFOLIO</Link>
            <div className='menu hidden md:block md:w-auto ' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-0 mt-0'>
                    
                        {
                            navLinks.map((link,index)=>(
                                <li key={index}>
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