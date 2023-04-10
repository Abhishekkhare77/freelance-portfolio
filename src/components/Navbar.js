import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Contact from '../components/Contact'
const Navbar = () => {
  const [hambergerItems,setHambergerItems] = useState('hidden');
  const toggleHamberger = ()=>{
    if(hambergerItems === 'hidden'){
      setHambergerItems('flex')
    }
    else{
      setHambergerItems('hidden')
    }
  }
  return (
    <>
      <nav className='bg-black fixed top-0 w-full'>
        <div className='flex justify-between items-center'>
          <img className='hidden md:flex h-12 w-12 m-2' src={Logo} alt="" />
          <ul className='hidden md:flex items-center justify-center m-2'>
            <li  className='p-2 cursor-pointer text-xl font-semibold hover:text-purple-400 transition-all ease-in-out'>Home</li>
            <li  className='p-2 cursor-pointer text-xl font-semibold hover:text-purple-400 transition-all ease-in-out'>About</li>
            <li   className='p-2 cursor-pointer text-xl font-semibold hover:text-purple-400 transition-all ease-in-out'>Services</li>
            <li   className='p-2 cursor-pointer text-xl font-semibold hover:text-purple-400 transition-all ease-in-out'>Projects</li>
            <li   className='p-2 cursor-pointer text-xl font-semibold hover:text-purple-400 transition-all ease-in-out'>Contact</li>
          </ul>
        </div>
        <div onClick={toggleHamberger} className="md:hidden hamberger flex items-center justify-between">
          <div className='p-2'>
            <div className="line w-5 mx-1 h-[2px] my-1 bg-white "></div>
            <div className="line w-4 mx-1 h-[2px] my-1 bg-white "></div>
            <div className="line w-3 mx-1 h-[2px] my-1 bg-white "></div>
          </div>
          <div>
            <img className='h-8 w-8 m-2' src={Logo} alt="" />
          </div>
        </div>
        <div className={`${hambergerItems} z-10 bg-gray-800 rounded-xl items-center justify-center transition-all ease-in-out`}>
          <ul className='flex flex-col items-center text-xl my-2'>
            <li className='py-2'>Home</li>
            <li className='py-2'>About</li>
            <li className='py-2'>Services</li>
            <li className='py-2'>Projects</li>
            <li className='py-2'>Contact</li>
          </ul>
        </div>
      </nav>
      <Hero/>
      <About />
      <Services />
      <Projects/>
      <Contact />
    </>
  )
}

export default Navbar
