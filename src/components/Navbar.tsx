"use client"
import Image from 'next/image'
import React from 'react'
import netflixlog from '../../public/Netflix_logo.svg';
import languagesign from '../../public/Language-sign.svg';

function Navbar({opacity,slate}:any) {
  return (
    <header>
      <nav className={`flex flex-row items-center justify-between h-20 px-16 bg-slate-${slate} bg-opacity-${opacity} max-md:px-4 max-md:h-28 ` } >
        <div>
          <Image src={netflixlog} alt="Netlix-Logo" width={146} height={40} />
        </div>
        <div className='flex flex-row gap-5 '>
          <div className='flex flex-row pl-2 py-1 h-fit bg-slate-950  bg-opacity-50 rounded-sm shadow-2xl shadow-white max-sm:hidden' >
            <Image src={languagesign} alt="Language-Sign" width={20} height={7} className=' ml-2' />
            <select name='language' className=' outline-none bg-transparent flex items-center justify-center appearance-none px-5 text-slate-50 ' >
              <option value="English" className=' text-slate-950'>English</option>
              <option value="Hindi" className=' text-slate-950'>हिन्दी</option>
            </select>
          </div>
          <button type='button' className=' bg-customred-400 px-4 py-1 rounded-sm hover:bg-red-800 text-white h-full' >Sign In</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar