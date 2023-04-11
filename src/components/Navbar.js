import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Contact from '../components/Contact'
import { useRef } from 'react'
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
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const scrollToRef = (ref) =>{ 
    window.scrollTo(0, ref.current.offsetTop)
    // console.log(ref.current.offsetTop) 
  } 
  const executeScrollhome = () => scrollToRef(homeRef)
  const executeScrollabout = () => scrollToRef(aboutRef)
  const executeScrollskills = () => scrollToRef(skillsRef)
  const executeScrollproject = () => scrollToRef(projectRef)
  const executeScrollcontact = () => scrollToRef(contactRef)
  
  return (
    <>
      <nav  className='bg-black fixed top-0 w-full'>
        <div className='flex justify-between items-center'>
          <img className='hidden md:flex h-12 w-12 m-2' src={Logo} alt="" /> 
          <ul className='hidden md:flex items-center justify-center m-2'>
            <li onClick={executeScrollhome} className='p-2 cursor-pointer text-xl font-semibold hover:text-purple-400 transition-all ease-in-out hoverable'>Home</li>
            <li onClick={executeScrollabout} className='p-2 cursor-pointer text-xl font-semibold hover:text-purple-400 transition-all ease-in-out hoverable'>About</li>
            <li onClick={executeScrollskills}  className='p-2 cursor-pointer text-xl font-semibold hover:text-purple-400 transition-all ease-in-out hoverable'>Skills</li>
            <li onClick={executeScrollproject}  className='p-2 cursor-pointer text-xl font-semibold hover:text-purple-400 transition-all ease-in-out hoverable'>Projects</li>
            <li onClick={executeScrollcontact}  className='p-2 cursor-pointer text-xl font-semibold hover:text-purple-400 transition-all ease-in-out hoverable'>Contact</li>
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
            <li onClick={executeScrollhome} className='py-2'>Home</li>
            <li onClick={executeScrollabout} className='py-2'>About</li>
            <li onClick={executeScrollskills} className='py-2'>Skills</li>
            <li onClick={executeScrollproject} className='py-2'>Projects</li>
            <li onClick={executeScrollcontact} className='py-2'>Contact</li>
          </ul>
        </div>
      </nav>
      <div ref={homeRef}><Hero/></div>
      <div ref={aboutRef}><About /></div>
      <div ref={skillsRef}><Services /></div>
      <div ref={projectRef}><Projects/></div>
      <div ref={contactRef}><Contact /></div>
    </>
  )
}

export default Navbar
