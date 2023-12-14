"use client"
import { addMovie } from '@/store/reducer/movieSlice';
import Image from 'next/image'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

type Movie ={
    title: string
    backdrop_path: string
    media_type?: string
    release_date?: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
  }

function Thumbnail({allmovies} :any) {
    const dispatch = useDispatch();

    const clickHandler = ()=>{
        dispatch(addMovie(allmovies));
      }

    return (
        <div
            className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 overflow-hidden rounded" onClick={clickHandler}>
            <Image
                src={` https://image.tmdb.org/t/p/original${allmovies?.poster_path}`}
                alt='thumbnail'
                className="rounded-sm object-cover md:rounded"
                style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                  width={200}
                  height={300}
            />
        </div>
    )
} 

export default Thumbnail