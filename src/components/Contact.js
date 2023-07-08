import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='md:text-6xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center hoverable'>Contact</h1>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">Feel free to talk to me any time.</p>
          </div>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a href="/" className="text-indigo-500">abhishekkhare583@gmail.com</a>
            <p className="leading-normal my-5">Bhilai
              <br/>Chhittishgarh, India
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
