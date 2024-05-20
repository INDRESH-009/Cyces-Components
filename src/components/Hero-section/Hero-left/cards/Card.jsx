import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";

export default function Card() {
  return (
    <div>
      <div className="h-[200px] w-[25%] border-[1px] border-red-400 rounded-2xl ml-2 hover:bg-black hover:text-white hover:border-black">
        <div className="pl-6">
            <h2 className="text-3xl font-bold ">product</h2>
            <h2 className="text-4xl text-red-500 font-bold">THINKING</h2>
        </div>
        <div className="flex items-start text-3xl pl-4 pt-10" id="techstack">
            <FaReact />
            <FaPython />
            <RiNextjsFill />
        </div>
        


      </div>
    </div>
  )
}
