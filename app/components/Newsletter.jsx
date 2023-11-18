import React from 'react'

const Newsletter = () => {
  return (
    <div className=' w-full py-16 text-white px-4'>
      <div className=' max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
            <h1 className='text-2xl sm:text-2xl lg:text-3xl py-2 font-bold '>Want tips and tricks to optimize your flow</h1>
            <p className='uppercase text-gray-400'>Sign up to our Newsletter and stay Up to date.</p>
        </div>
         <div className='my-4' >
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
              <input className='p-3
               flex w-full rounded-md text-black mx-2' type="email" placeholder='Enter email' />
              <button className='bg-[#00df9a] text-[#000300] w-[150px] rounded-lg font-medium my-4 mx-auto py-3 hover:bg-[#1dad80] hover:text-white'>Notify Me</button>
              </div>
              <p>We care about protection of your data . Read our <span className='text-[#00df9a]'>
              Privacy policy.</span>  </p>
         </div>
      </div>
    </div>
  )
}

export default Newsletter
