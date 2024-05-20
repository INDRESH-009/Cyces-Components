import React from 'react'
/* importing the icons */
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
/* ------------------functional component begins----------------------  */
const Navbar = () => {
  return (
    <div className='w-[70%]  p-3 border border-[#FFD4D2] ml-4 mt-4 rounded-xl flex justify-between items-center'>
      <div >
        <p className='text-black leading-10 text-4xl font-extrabold'>Cyces.</p>
      </div>
      <div>
        <ul className='flex justify-between gap-6 items-center'>
            <li>work</li>
            <li>service</li>
            <li>research</li>
            <li>insights</li>
            <li>about</li>
            <li className='border border-red-500 bg-[#FF0000] text-white p-1 rounded-md'>We are hiring!</li>
        </ul>
      </div>
      <div>
        <ul className='text-2xl flex justify-between gap-4'>
            <li><FaLinkedin /></li>
            <li><IoLogoYoutube /></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
