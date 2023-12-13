"use client"
import Banner from '@/components/Banner';
import MainNav from '@/components/MainNav';
import React from 'react'
import { useSelector } from 'react-redux'

function Browse() {
  const sub = useSelector((state:any) => state.subs)
  //console.log(sub);
  return (
    <div className=' h-screen bg-gradient-to-b from-gray-900/10 to-blue-950 relative lg:h-[140vh]'>
      <MainNav />

      <main className=' overflow-x-hidden pl-10 max-lg:pl-8 max-md:pl-4'>
        <Banner/>
      </main>

      
    </div>
  )
}

export default Browse