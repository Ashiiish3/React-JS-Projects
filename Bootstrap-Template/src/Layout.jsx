import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Layout() {
  return (
    <div className='d-flex justify-content-between align-items-center'>
      <div className='text-start w-50'>
        <h1 className='mb-4'>Hi, Hi, I'm John Deo.</h1>
        <p className='fs-4'>A freelance Web Developer from London. I convert custom web design to bootstap templates.</p>
        <p className='fs-4 mb-4'>I make YouTube videos and write Blogs.</p>
        <button className='btn btn-primary rounded-5 px-5 py-2 my-4 text-uppercase'>I'm Available</button>
        <div className='mt-3 w-25 d-flex justify-content-between fs-3 text-secondary'>
          <FaFacebookF />
          <FaTwitter className='mx-2' />
          <FaInstagramSquare className='me-2' />
          <FaGithub />
        </div>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Man Image" />
      </div>
    </div>
  )
}