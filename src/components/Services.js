import React from 'react'
import frontend from '../assets/frontend.jpg'
import backend from '../assets/backend.jpg'
import fullstack from '../assets/fullstack.jpg'
const Services = () => {
  return (
    <div className='mt-10'>
      <h1 className='text-center md:text-6xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Services</h1>
      <section className="text-pink-400 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto pb-10 mb-10 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img src={frontend} className="rounded-full" alt="" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-purple-700 text-lg title-font font-medium mb-2">Front-end development</h2>
              <p className="leading-relaxed text-base">We provide clean and highly interactive User interfaces.</p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto pb-10 mb-10 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-purple-700 text-lg title-font font-medium mb-2">Back-end development</h2>
              <p className="leading-relaxed text-base">We provide fully function and highly Optimized backend.</p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img src={backend} className="rounded-full" alt="" />
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img src={fullstack} className="rounded-full" alt="" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-purple-700 text-lg title-font font-medium mb-2">Full stack development</h2>
              <p className="leading-relaxed text-base">We can make an entire full stack website for you or your company.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
