"use client"
import React from 'react'
import { useSelector } from 'react-redux'

function Browse() {
  const sub = useSelector((state:any) => state.subs)
  console.log(sub);
  return (
    <div>Browse</div>
  )
}

export default Browse