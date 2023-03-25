import React from 'react'
import mypic from '../assets/MyPic.jpg'

const About = () => {
    return (
        <div className='mt-10'>
            <h1 className='mt-5 text-center md:text-6xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>About</h1>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-12 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-3xl" src={mypic} />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-purple-800 tracking-widest">I am</h2>
                            <h1 class="text-purple-500 text-3xl title-font font-medium mb-1">Abhishek khare</h1>
                            <p class="leading-relaxed text-gray-400">A third-year B.Tech computer science student at Bhilai Institute of Technology in Raipur, and a full-stack web developer with a passion for technology and a drive to learn new things. <br /> <br /> Through my academic pursuits, I have been able to develop my knowledge and skills in web development, constantly challenging myself to grow as a developer. I have a strong problem-solving ability, thanks to my interests in chess and the Rubik's cube. As a developer, I am confident in my ability to develop dynamic and user-friendly websites using the latest technologies. <br /> <br /> I am always eager to take on new projects and collaborate with others to create innovative solutions. Apart from web development, I enjoy exploring new technologies and trends in the industry, and I am open to new ideas and opportunities to further my knowledge and experience. With my dedication, drive, and eagerness to deliver quality results, I am confident in my ability to bring value to your team and create amazing things.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
