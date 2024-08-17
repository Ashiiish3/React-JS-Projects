import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='h-16 border-b-[1px] border-gray-300 flex items-center sticky top-0 bg-white'>
      <ul className='flex justify-between w-[80%] m-auto'>
        <li>
            <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/About'}>About</NavLink>
        </li>
        <li>
            <NavLink to={'Products'}>Products</NavLink>
        </li>
        <li>
            <NavLink to={'/Login'}>Login</NavLink>
        </li>
      </ul>
    </div>
  )
}
