import Banner from '@/components/Banner';
import MainNav from '@/components/MainNav';
import Row from '@/components/Row';
import React from 'react'
import { TopRated, TrendingMovie, NetflixOriginal, ActionMovie, ComdeyMovie, HorrorMovie, RomanceMovie, Documentray } from '@/helpers/moviedata';
import Modal from '@/components/Modal';
import Mylist from '@/components/Mylist';


async function Browse() {
  const netflixOriginal = await NetflixOriginal();
  const trendingMovies = await TrendingMovie();
  const topRated = await TopRated();
  const action = await ActionMovie();
  const comedy = await ComdeyMovie();
  const scary = await HorrorMovie();
  const romance = await RomanceMovie();
  const documentary = await Documentray();
  var rn= Math.floor(Math.random() * netflixOriginal.length);

  return (
    <div className=' h-full bg-gradient-to-b from-gray-800/10 to-[#0b1126] relative overflow-x-hidden overflow-y-hidden '>
      <MainNav />
      <main className='  pl-10 max-lg:pl-8 max-md:pl-4 pb-20'>
        <Banner banner={netflixOriginal[rn]} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingMovies} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={action} />
          <Row title="Comedies" movies={comedy} />
          <Mylist/>
          <Row title="Scary Movies" movies={scary} />
          <Row title="Romance Movies" movies={romance} />
          <Row title="Documentaries" movies={documentary} />
        </section>
      </main>
      <Modal />
    </div>
  )
}


export default Browse