import Link from 'next/link'
import React from 'react'

export default function ContactUs() {
  return (
    <div className='w-full flex max-sm:flex-col-reverse max-sm:justify-center sm:items-start items-center p-4 sm:p-20 gap-4 sm:gap-10 my-20 bg-[#121516ef]'>
    <div className='sm:flex-[1] flex flex-col gap-4 max-sm:w-full items-start max-sm:items-center'>
      <h1 className='text-col text-3xl'>Contact Us</h1>
      <hr className='w-10 bg-col h-1'/>
      <p className='max-sm:text-center max-sm:my-5'>Reach out to us, let's hear from you.</p>
      <div className='grid grid-cols-1 gap-4'>
      <div className='grid grid-cols-2 gap-4'>
        <input type="text" className='p-2 placeholder:text-sm bg-transparent outline-none border border-[#00eaff15] hover:shadow-glow-mild' placeholder='Full Name' />
        <input type="text" className='p-2 placeholder:text-sm bg-transparent outline-none border border-[#00eaff15] hover:shadow-glow-mild' placeholder='Email' />
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <input type="text" className='p-2 placeholder:text-sm bg-transparent outline-none border border-[#00eaff15] hover:shadow-glow-mild' placeholder='Phone Number' />
        <input type="text" className='p-2 placeholder:text-sm bg-transparent outline-none border border-[#00eaff15] hover:shadow-glow-mild' placeholder='Subject' />
      </div>
      <textarea name="" id="" className='p-2 placeholder:text-sm bg-transparent outline-none border border-[#00eaff15] hover:shadow-glow-mild' placeholder='Message'></textarea>
      </div>
      
         <Link href={`#`} className=' flex justify-center items-center w-40 h-10 rounded-lg bg-col hover:opacity-75 text-black text-sm font-bold'>Submit</Link>
    </div>
    <div className='sm:flex-[1] max-sm:w-full'>
      <img src="about3.jpg" alt="about image" className='rounded-lg w-[100%] h-auto object-cover'/>
    </div>
  </div>
  )
}
