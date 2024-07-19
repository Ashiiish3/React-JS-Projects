import React from 'react'

export default function Card({image, category, discount}) {
  return (
    <div className='bg-red-300 h-[400px] w-[200px]'>
      <div>
        <img src={image} alt="" />
        <p>{category}</p>
        <p>{discount}</p>
      </div>
    </div>
  )
}