import React from 'react'

const Contact = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <h1 className='md:text-6xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center hoverable'>Contact</h1>
      <div className='flex flex-col items-center justify-center mt-10 bg-white shadow-lg rounded-2xl h-1/3 w-fit'>
        <div className='flex flex-col bg-black w-full items-center justify-center p-5 m-5'>
          <h1 className='text-4xl text-blue-500 font-bold'>Gmail:</h1>
          <br />
          <p className='text-4xl text-purple-500 font-semibold'>abhishekkhare583@gmail.com</p>
        </div>
        <hr />
        <div className='flex flex-col items-center justify-center p-5 m-2 '>
          <h1 className='text-4xl text-blue-800 font-bold'>Mobile Number:</h1>
          <br />
          <p className='text-4xl text-purple-800 font-semibold'>9302533305</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
