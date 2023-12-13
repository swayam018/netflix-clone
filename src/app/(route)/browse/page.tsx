"use client"
import Banner from '@/components/Banner';
import MainNav from '@/components/MainNav';
import Row from '@/components/Row';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import { useSelector } from 'react-redux'


function Browse() {
  const [trendingMovie, setTrendingMovie]:any = useState([]);

  useEffect(() => {
    Trendig();
  }, [])
  
  const Trendig = async () => {
    await axios.get('/api/movies/trending').then((res) => {
      //console.log(res.data.resp)
      setTrendingMovie(res.data.resp);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className=' h-full bg-gradient-to-b from-gray-800/10 to-[#0b1126] relative overflow-x-hidden overflow-y-hidden '>
      <MainNav />

      <main className='  pl-10 max-lg:pl-8 max-md:pl-4 pb-20'>
        <Banner banner={trendingMovie} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movie={trendingMovie}  />
          <Row title="Top Rated" movie={trendingMovie} />
          {/*<Row title="Action Thrillers"  />
          <Row title="Comedies"  />
          <Row title="Scary Movies"  />
          <Row title="Romance Movies"  />
          <Row title="Documentaries"  />*/}
        </section>
      </main>

      
    </div>
  )
}

export default Browse