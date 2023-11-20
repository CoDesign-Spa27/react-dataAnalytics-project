import React from 'react'

const Analytics = () => {


  return (
    <div className='w-full bg-white py-14 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img src='/Analytic.svg'  alt='img'/>
        <div className='flex flex-col justify-center '>
      <p className='text-[#00df9a] font-bold border-b text-[1.3rem] md:text-xl'>Data Analytics Dashboard</p>
          <h1 className='font-bold py-1 text-[1.6rem] md:text-2xl'>Manage Data Analytics Centrally</h1>
          <p className=' text-sm sm:text-m md:text-l'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, tempore! Aliquam animi unde ipsam maxime sint corporis sapiente adipisci, facere eaque magnam vel debitis est doloremque ullam, odit, consequatur saepe?</p>
          <button className='text-[#00df9a] bg-[#000300] w-[200px] rounded-md font-medium my-4 mx-auto md:mx-[0] transition duration-700 py-3 hover:bg-[#1dad80] hover:text-white '>Get Started</button>
        </div>
        </div>

      
    </div>
  )
}

export default Analytics
