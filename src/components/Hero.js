import React from 'react';
import heropic from '../assets/heroSidePik.png'
const Hero = () => {
  return (
    <>
    <div className='md:flex items-center justify-around my-4 mt-20'>
      <div className='flex flex-col m-5 p-2 items-center justify-center md:items-start md:justify-start '>
        <div className='my-3 text-xl'>I am,</div>
        <h1 className='md:text-6xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Abhishek khare</h1>
        <div className='text-center my-3 text-xl'>Freelance Full stack Web developer.</div>
      </div>
      <div>
        <img src={heropic} className="my-24 md:my-0 md:h-[90vh] md:w-[58vw]" alt="" />
      </div>
    </div>
    </>
  )
}

export default Hero
