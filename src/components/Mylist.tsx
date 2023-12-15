"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import Row from './Row';

function Mylist() {
    const movie = useSelector((state:any)=>state.movie.addlist)
  return (
    <div>
     {movie.length>0 &&  <Row title="My List" movies={movie}/>}
    </div>
  )
}

export default Mylist;