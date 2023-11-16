import React from 'react'
const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col'>
        <p className='text-[#00df9a]  font-bold  sm:text-2xl text-l p-2'>Growing with Data Analytics</p>
        <h1 className='text-4xl md:text-7xl sm:text-5xl font-bold py-2 md:py-5 uppercase'>Grow with Data.</h1>
        <div>
         <p className='md:text-3xl sm:2xl text-xl font-bold '>Fast | Flexible | Financing</p>
        </div>
        <p className='font-bold px-2 text-gray-500 md:text-xl text-sm sm:text-l py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, doloribus.</p>
        <button className='bg-[#00df9a] text-[#000300] w-[200px] rounded-md font-medium my-4 mx-auto py-3 hover:bg-[#1dad80] hover:text-white'>Get Started</button>
      </div>
      
    </div>
  )
}

export default Hero
