import React from 'react'
import navIcon from '../assets/navIcon.svg'

function Navbar() {
  return (
    <>
        {/* Main Navbar Div  */}
        <div className='flex justify-between'> 
            {/* Navbar left portion svg and name */}
            <div className='flex gap-3 p-4 ml-10'>
                <img src={navIcon} alt="navIcon" 
                className='h-10'
                />
                <p className='mt-1 text-xl font-semibold'>JobPortalX</p>
            </div>
            {/* center elements */}
            <div className='font-medium text-lg flex gap-6 justify-center items-center'>
              <p className='transition-transform hover:scale-105 duration-200'>Home</p>
              <p className='transition-transform hover:scale-105 duration-200'>About us</p>
              <p className='transition-transform hover:scale-105 duration-200'>Features</p>
              <p className='transition-transform hover:scale-105 duration-200'>Testimonial</p>
            </div>
            {/* StartFree button */}
            <div className='flex justify-center items-center p-5 mr-10 transition-transform hover:scale-105 duration-200'>
              <button
              className='p-2 rounded-lg font-semibold bg-[#b1aeea] hover:bg-[#a8a5e2] '
              >Start Free!</button>
            </div>
        </div>
    </>
  )
}

export default Navbar