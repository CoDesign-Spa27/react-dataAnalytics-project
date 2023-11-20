import React from 'react'
const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col py-4 my-8 rounded-lg hover:scale-105 duration-300 '>
            <img className='w-[10vw] mx-auto mt-[-4rem] md:w-[5vw] ' src='/user.svg
            ' />
            <h2 className='font-bold text-center md:text-2xl py-2'>Single User</h2>
            <p className='text-center font-semibold text-xl text-[#00df9a]
            '>$149</p>
            <div className='text-center font-medium'>
                <p className='py-1 border-b my-3 '>500GB Storage </p>
                <p className='py-1 border-b my-3 '>1 Granted User</p>
                <p className='py-1 border-b my-3 '>Send Up to 2GB</p>
            </div>
            <button className='bg-[#000300] text-[#00df9a] w-[150px] rounded-lg font-medium my-4 mx-auto py-3 hover:bg-[#1dad80] hover:text-white'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300 '>
            <img className='w-[10vw] mx-auto mt-[-4rem] md:w-[5vw] ' src='/users-2.svg'/>
            <h2 className='font-bold text-center md:text-2xl py-2'>Double User</h2>
            <p className='text-center font-semibold text-xl text-[#00df9a]
            '>$299</p>
            <div className='text-center font-medium'>
                <p className='py-1 border-b my-3 '>1000GB Storage </p>
                <p className='py-1 border-b my-3 '>2 Granted User</p>
                <p className='py-1 border-b my-3 '>Send Up to 5GB</p>
            </div>
            <button className='bg-[#000300] text-[#00df9a] w-[150px] rounded-lg font-medium my-4 mx-auto py-3 hover:bg-[#1dad80] hover:text-white'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300 '>
            <img className='w-[10vw] mx-auto mt-[-4rem] md:w-[5vw] ' src='/users.svg
            ' />
            <h2 className='font-bold text-center md:text-2xl py-2'>Many User</h2>
            <p className='text-center font-semibold text-xl text-[#00df9a]
            '>$499</p>
            <div className='text-center font-medium'>
                <p className='py-1 border-b my-3 '>1500GB Storage </p>
                <p className='py-1 border-b my-3 '>multiple Granted User</p>
                <p className='py-1 border-b my-3 '>Send Up to 8GB</p>
            </div>
            <button className='bg-[#000300] text-[#00df9a] w-[150px] rounded-lg font-medium my-4 mx-auto py-3 hover:bg-[#1dad80] hover:text-white'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
