"use client"
import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    const [nav,setNav]=useState(false);
    const handleNav=()=>{
           setNav(!nav);
    }
  return (
    <div className= 'flex justify-center items-center h-20 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
      <ul className='hidden md:flex'>
      <li className='p-4'>Home</li>
      <li className='p-4'>contact</li>
      <li className='p-4'>about</li>
      <li className='p-4'>selling</li>
      <li className='p-4'>purchasing</li>
      </ul>

   <div onClick={handleNav} className='block md:hidden'>
    {!nav ? <AiOutlineClose size={23}/> : <AiOutlineMenu size={23} />}
   </div>
   <div className={!nav ?'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 ease-in-out duration-500 bg-[#000300]':'fixed left-[-100%]'}>
   <h1 className='w-full text-3xl font-bold text-[#00df9a] m-3'>React.</h1>
   <ul className='uppercase ' >   
      <li className='p-3 border-b border-gray-600'>Home</li>
      <li className='p-3 border-b border-gray-600'>contact</li>
      <li className='p-3 border-b border-gray-600'>about</li>
      <li className='p-3 border-b border-gray-600'>selling</li>
      <li className='p-3'>purchasing</li>
      </ul>
   </div>


    </div> 
    
  )
}

export default Navbar