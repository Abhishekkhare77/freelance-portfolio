import React from "react";
import HeroThreeD from "./HeroThreeD";

const Hero = () => {
  return (
    <>
    <div className='md:flex items-center justify-around my-4 mt-20'>
      <div className='flex flex-col m-5 p-2 items-center justify-center md:items-start md:justify-start '>
        <div className='my-3 text-xl'>I am,</div>
        <h1 className='md:text-6xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Abhishek khare</h1>
        <div className='text-center my-3 text-xl'>Full stack Web developer.</div>
      </div>
      <HeroThreeD/>
    </div>
    </>
  )
}

export default Hero
