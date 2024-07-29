'use client'
import React, { useEffect } from 'react'

export default function error({error, reset}) {
    useEffect(()=>{
        console.log(error)
    },[error])
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center gap-10'>
      <h1>Something went wrong , please try again later</h1>
      <button className='w-40 h-10 rounded-lg bg-col hover:opacity-75 text-black text-sm font-bold' onClick={()=>reset()}>Try again</button>
    </div>
  )
}
