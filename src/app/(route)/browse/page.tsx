import Banner from '@/components/Banner';
import MainNav from '@/components/MainNav';
import Row from '@/components/Row';
import React from 'react'
// import { TrendingMovie } from '@/helpers/TrendingMovie'; 
import { TopRated, TrendingMovie,NetflixOriginal, ActionMovie, ComdeyMovie, HorrorMovie, RomanceMovie, Documentray } from '@/helpers';


async function  Browse() {
  const netflixOriginal= await NetflixOriginal();
  const trendingMovies = await TrendingMovie();
  const topRated = await TopRated();
  const action = await ActionMovie();
  const comedy = await ComdeyMovie();
  const scary = await HorrorMovie();
  const romance = await RomanceMovie();
  const documentary = await Documentray();
  return (
    <div className=' h-full bg-gradient-to-b from-gray-800/10 to-[#0b1126] relative overflow-x-hidden overflow-y-hidden '>
      <MainNav />
      <main className='  pl-10 max-lg:pl-8 max-md:pl-4 pb-20'>
        <Banner banner={netflixOriginal} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingMovies}  />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={action} />
          <Row title="Comedies" movies={comedy} />
          <Row title="Scary Movies" movies={scary} />
          <Row title="Romance Movies" movies={romance} />
          <Row title="Documentaries" movies={documentary} />
        </section>
      </main>

      
    </div>
  )
}

export default Browse