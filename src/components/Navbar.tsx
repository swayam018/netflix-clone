"use client"
import Image from 'next/image'
import React from 'react'
import netflixlog from '../../public/Netflix_logo.svg';
import languagesign from '../../public/Language-sign.svg';


function Navbar() {
  return (
    <header>
      <nav className='flex flex-row items-center justify-between h-20 px-16'>
        <div>
          <Image src={netflixlog} alt="Netlix-Logo" width={146} height={40} />
        </div>
        <div className='flex flex-row '>
          <div className='flex flex-row border border-black px-2 h-fit bg-slate-600  bg-opacity-40 rounded-sm' >
            <Image src={languagesign} alt="Language-Sign" width={20} height={7} />
            <select name='language' className=' outline-none bg-transparent flex items-center justify-center appearance-none text-lg  px-4' >
              <option value="English">English</option>
              <option value="Hindi" >हिन्दी</option>
            </select>

          </div>
          <button type='button' className=' bg-customred-400 px-4 py-1 rounded-sm hover:bg-red-800 text-white h-full' >Sign In</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar