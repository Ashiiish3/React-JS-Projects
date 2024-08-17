import React, { useContext } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { ThemeContext } from '../Context/ThemeContext';

export default function Navbar() {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div className={`flex justify-around items-center ${theme? "bg-gray-900":"bg-gray-100"} h-16 border-b-[1px] border-gray-300`}>
      <ul className={`flex justify-between w-[80%] ${theme? "text-white":"text-black"}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className='p-3 rounded-full shadow-xl border-2 border-gray-400' onClick={()=>setTheme(!theme)}>{theme? <IoSunnyOutline className='text-white' />: <IoMoonOutline />}</button>
    </div>
  )
}