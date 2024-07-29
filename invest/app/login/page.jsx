'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

export default function page() {
    const [isView, setIsView] = useState(false);
    const toggleView = () => {
        setIsView(!isView)
      }

      const handleLogin = ()=> {
        window.location.href='/dashboard';
      }

  return (
    <div className='h-screen w-full relative bg-cover bg-no-repeat flex flex-col justify-center items-center max-sm:justify-end sm:p-10 bg-blend-darken bg-[#000000bb]' style={{backgroundImage: `url('about2.jpg')`}}>
       <Link href={'/'} className='flex gap-3 items-center justify-center absolute top-5'>
        <img src="logo.png" alt="logo" className='w-10 h-auto rounded-full logo-glow' />
        <span className='font-[900] text-2xl text-[#eee]'>4Elevenfxtrade</span>
      </Link>

      <div className='w-full sm:w-[500px] sm:rounded-lg max-sm:rounded-[30px] grid grid-cols-1 max-sm:rounded-bl-none max-sm:rounded-br-none bg-[#00000073] p-10 gap-5'>
     <div className='flex max-sm:flex-col sm:justify-between w-full max-sm:items-center py-5 gap-5'>
      <h1 className='text-xl font-bold text-[#eee]'>Sign In </h1>
      <div className='text-col text-lg font-bold opacity-[.9]'>..Earn on the go</div>
      </div>
        <input type="email" placeholder='Email' maxLength={100} className='bg-transparent outline-none placeholder:text-[#a2a1ab] p-3 border border-[#00eaff13] rounded-lg'/>
        <div className='flex items-center w-full justify-between  p-3 border border-[#00eaff13] rounded-lg'>
       <input type={isView? 'text' : 'password'} maxLength={16} placeholder='Password' className='w-full bg-transparent outline-none placeholder:text-[#a2a1ab]'/>
        {isView? <IoEyeOff onClick={toggleView}/> : <IoEye onClick={toggleView}/>}
       </div>
       <button onClick={handleLogin} className=' flex justify-center items-center w-full h-12 rounded-lg bg-col hover:opacity-75 text-black text-sm font-bold'>Sign In</button>
       <p className='flex gap-2 text-sm py-5 items-center w-full justify-center font-extralight text-[#a2a1ab]'>No account? <Link className='text-[#eee] hover:text-[#00eaff]' href={'register'}>Register</Link></p>
      </div>
    </div>
  )
}
