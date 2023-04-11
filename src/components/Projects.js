import React from 'react'
import codezone from '../assets/Code zone.png'
import Kmart from '../assets/Kmart.png'
import itemmanagement from '../assets/itemmanager.jpg'
const Projects = () => {
    return (
        <div>
            <h1 className='text-center md:text-6xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hoverable'>Projects</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-3xl h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={codezone} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-purple-500 mt-5">Code Zone - A blog website</h2>
                            <p className="text-base leading-relaxed mt-2">This is the blog website created using nextjs and tailwindcss for UI.</p>
                            <a href='https://github.com/Abhishekkhare77/Code-zone' className="text-indigo-500 inline-flex items-center mt-3 hoverable">Go to project
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-3xl h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={itemmanagement} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-purple-500 mt-5">Item management System - MERN stack</h2>
                            <p className="text-base leading-relaxed mt-2">Client-based project and that too for a government organization!
                                This is the team project .
                                My role is :
                                To create database schema
                                login and register authentication
                                and few of the UI components using bootstrap.</p>
                            <a href='https://github.com/Abhishekkhare77/Item-manager-COURT-PROJECT-authenticate_01' className="text-indigo-500 inline-flex items-center mt-3 hoverable">Go to project
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-3xl h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={Kmart} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-purple-500 mt-5">Khare Mart - Full stack e-commerce website</h2>
                            <p className="text-base leading-relaxed mt-2">This is the full stack ecommerce website created using nextjs and tailwindcss for UI. Some of the key features of this project are:
                                Product catalog
                                Shopping cart
                                Checkout process
                                Payment gateway integration
                                Customer account
                                Responsive design</p>
                            <a href='https://github.com/Abhishekkhare77/khare-mart' className="text-indigo-500 inline-flex items-center mt-3 hoverable">Go to project
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
