"use client"
import Link from 'next/link'
import React from 'react'
import netflixlog from '../../public/Netflix_logo.svg';
import { useSelector,useDispatch } from 'react-redux';
import Image from 'next/image';
import { loggingUser } from '@/store/reducer/planSlice';

function Header() {
  const dispatch = useDispatch();
    const userdata = useSelector((state:any) =>state.plan)

    const handleClick = () =>{
      if(userdata.user){
        dispatch(loggingUser());
      }
    }
  return (
    <header className={`flex flex-row items-center justify-between h-20 px-11 bg-slate-50 max-md:px-4 max-md:h-16 max-sm:h-14` } >
    <Link href="/" >
         <Image src={netflixlog} alt="Netlix-Logo" width={128} height={40} />
    </Link>

    {userdata.user?(
      <span className='px-4 py-1 rounded-sm  text-slate-950 text-xl  hover:underline font-bold' onClick={handleClick}>Sign Out</span>
    ):(
    <Link href="/login" className='px-4 py-1 rounded-sm  text-slate-950 text-xl  hover:underline font-bold' >Sign In</Link>
    )}
    </header>
  )
}

export default Header;