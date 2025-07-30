import React from 'react'
import homeImg from '../assets/homeImg.png'
import users from '../assets/users.png'
import productHunt from '../assets/productHunt.png'
import searchSvg from '../assets/search-svg.svg'
import diamond from '../assets/diamond.svg'

import wix from '../assets/wix.png'
import zillow from '../assets/zillow.png'
import microsoft from '../assets/microsoft.png'
import amazon from '../assets/amazon.png'
import github from '../assets/github.png'
import kia from '../assets/kia.jpg'

const Home = () => {
  return (
    <>
        {/* main div for landing section  */}
        <div className='flex justify-between py-15 px-40'>
        {/* left section  */}
            <div>
                <div className='flex flex-col gap-3 mt-5 font-medium'>
                    <div className='text-7xl'>
                        <h1>Connecting Talent</h1>
                        <h1>with Opportunities</h1>
                    </div>
                    <div className='mt-5 font-semibold text-lg'>
                        <p>Our platform is designed to connect talented individuals like you</p>
                        <p>with a vast array of job openings across various industries and</p>
                        <p>sectors</p>
                    </div>
                </div>

                <div className='flex gap-5'>
                    <div className='mt-5 bg-black text-white p-4 rounded-2xl transition-transform hover:rotate-2 hover:scale-102 duration-300'>
                        <p className='flex justify-center items-center font-medium text-lg mt-3'>Join thousands of</p>
                        <p className='flex justify-center items-center font-medium text-lg'>satisfied users who have</p>
                        <p className='flex justify-center items-center font-medium text-lg'>discovered their dream</p>
                        <p className='flex justify-center items-center font-medium text-lg'>jobs through</p>
                        <p className='flex justify-center items-center font-medium text-lg'>JobPortalX</p>
                    </div>
                    <div className='flex flex-col'>
                        <img src={productHunt} alt="producthunt" className='mt-7 transition-transform hover:scale-105 hover:-rotate-2 duration-300'/>
                        <img src={users} alt="users" className='transition-transform hover:scale-105 hover:-rotate-2 duration-300' />
                    </div>
                </div>
            </div>
        {/* right section  */}
            <div className='mt-10 transition-transform hover:scale-105 hover:rotate-2 duration-300'>
                <img src={homeImg} alt="homeImg" />
            </div>
        </div>


        {/* company's logo section  */}
        <div className='flex p-8 mx-30 justify-between items-center'>
            <img src={wix} alt="wix" className='h-40 transition-transform hover:scale-105 duration-300'/>
            <img src={zillow} alt="zillow" className='h-40 transition-transform hover:scale-105 duration-300'/>
            <img src={microsoft} alt="microsoft" className='h-40 transition-transform hover:scale-105 duration-300'/>
            <img src={amazon} alt="amazon" className='h-40 transition-transform hover:scale-105 duration-300'/>
            <img src={github} alt="github" className='h-40 transition-transform hover:scale-105 duration-300'/>
            <img src={kia} alt="kia" className='h-40 transition-transform hover:scale-105 duration-300'/>
        </div>


        {/* find jobs section  */}
        <h1 className='ml-40 text-6xl font-semibold'>Popular Jobs</h1>
        <div className='flex mb-10'>
                <div className='flex mt-5 gap-3'>
                    <img src={searchSvg} alt="searchSvg" 
                    className='h-7 mt-4 ml-40 flex justify-center items-center'
                    />
                    <input type="text" placeholder='Search for a company'
                        className='w-full h-14 px-0 py-4 border-0 border-b-2 border-gray-300 text-lg placeholder-gray-400 
                        bg-transparent focus:outline-none focus:border-blue-500 transform 
                        transition-all duration-300 focus:scale-[1.01] disabled:opacity-50 
                        disabled:cursor-not-allowed'
                    />
                </div>
                <div className='flex gap-3 mt-5 ml-6'>
                    <img src={diamond} alt="loaction" 
                        className='h-7 mt-4'
                    />
                    <input type="text" placeholder='Location' 
                        className='w-full h-14 px-0 py-4 border-0 border-b-2 border-gray-300 text-lg placeholder-gray-400 
                        bg-transparent focus:outline-none focus:border-blue-500 transform 
                        transition-all duration-300 focus:scale-[1.01] disabled:opacity-50 
                        disabled:cursor-not-allowed'
                    />
                </div>
        </div>
    </>
  )
}

export default Home