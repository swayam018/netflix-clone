"use client"
import Banner from '@/components/Banner';
import MainNav from '@/components/MainNav';
import Row from '@/components/Row';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import { useSelector } from 'react-redux'


function Browse() {
  var trendingMovie={};
  const Trendig = async () => {
    try{
      trendingMovie = await axios.get('/api/movies/trending');
    }
    catch(err:any) {
      console.log("error occurred",err.message);
    }
  }

  return (
    <div className=' h-full bg-gradient-to-b from-gray-800/10 to-[#0b1126] relative overflow-x-hidden overflow-y-hidden '>
      <MainNav />

      <main className='  pl-10 max-lg:pl-8 max-md:pl-4 pb-20'>
        <Banner banner={trendingMovie} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movie={trendingMovie}  />
          <Row title="Top Rated" movie={trendingMovie} />
          <Row title="Action Thrillers" movie={trendingMovie} />
          <Row title="Comedies" movie={trendingMovie} />
          <Row title="Scary Movies" movie={trendingMovie} />
          <Row title="Romance Movies" movie={trendingMovie} />
          <Row title="Documentaries" movie={trendingMovie} />
        </section>
      </main>

      
    </div>
  )
}

export default Browse