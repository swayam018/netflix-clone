"use client"
import { addMovie } from '@/store/reducer/movieSlice';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function Thumbnail({allmovies} :any) {
    const dispatch = useDispatch();
    const [movie,setMovie]:any = useState({});
    useEffect(() => {
          setMovie(allmovies)
      }, [allmovies]);

    const clickHandler = ()=>{
        dispatch(addMovie(allmovies));
      }
      if(!movie?.poster_path){
        return null;
      }

    return (
        <div
            className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105 overflow-hidden rounded" onClick={clickHandler}>
            <Image
                src={` https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                alt='thumbnail'
                className="rounded-sm object-cover md:rounded"
                style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                  width={200}
                  height={300}
                  priority={true}
            />
        </div>
    )
} 

export default Thumbnail