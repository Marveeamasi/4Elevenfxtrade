import Link from 'next/link'
import React from 'react'

export default function  About() {
  return (
    <div className='w-full flex max-sm:flex-col max-sm:justify-center sm:items-start items-center p-4 sm:p-20 gap-4 sm:gap-10 pt-10 bg-[#121516ef]'>
      <div className='sm:flex-[1] max-sm:w-full'>
        <img src="about1.jpg" alt="about image" className='rounded-lg w-[100%] h-auto object-cover'/>
      </div>
      <div className='sm:flex-[1] flex flex-col gap-4 max-sm:w-full items-start max-sm:items-center'>
        <h1 className='text-col text-3xl'>About Us</h1>
        <hr className='w-10 bg-col h-1'/>
        <p className='max-sm:text-center'>We help people that want students to pay off student loans, People working that wants to buy house and start other business projects and retirement plans for people
           that wants to save for retirements and generational wealth</p>
        <p className='max-sm:text-center text-[#a2a1ab]'>Our advanced trading robots made by our in house programming team, Our in house backtesting and strategy developer focus on dynamic trading environment.
           Our State of the Art AutoTrade bot technology (ATBT) is one of our most powerful trading robot for automated trading.</p>
           <Link href={`/login`} className=' flex justify-center items-center w-40 h-10 rounded-lg bg-col hover:opacity-75 text-black text-sm font-bold'>Invest Now</Link>

      </div>
    </div>
  )
}
