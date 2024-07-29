'use client'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import React, { useState } from 'react'
import CountUp from 'react-countup';

export default function page() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='flex w-full'>
      <Sidebar title='withdraw'/>
      <div className='w-full'>
      <Topbar title='withdraw'/>
      <div className='p-5 flex flex-col max-sm:items-center gap-5'>
        <div className='w-full font-bold text-5xl max-sm:text-center'>$<CountUp start={0} end={5030020} duration={2} separator=","/></div>
        <div className='w-full rounded-lg p-5 bg-[#00eaff10] max-sm:text-center mt-5'>You will recieve payment in less than 24 hours</div>
        <div className='grid grid-cols-2 max-sm:grid-cols-1 w-full gap-5'>
        <input type="number" placeholder='Enter withdraw amount' maxLength={20} className='bg-transparent outline-none placeholder:text-[#a2a1ab] p-3 border border-[#00eaff13] rounded-lg'/>
        <select className='bg-transparent outline-none text-[#a2a1ab] p-3 border border-[#00eaff13] rounded-lg' name="" id="" value={selectedOption || "Choose withdraw option"} onChange={handleOptionChange}>
       <option value="Choose withdraw option">Choose withdraw option</option>
          <option value='Option one'>
           Option one
          </option>
          <option value='Option two'>
           Option two
          </option>
          <option value='Option three'>
           Option three
          </option>
       </select> 
       </div>
      {selectedOption && <button className='bg-col text-[#000] font-extrabold sm:w-[300px] w-full p-5 rounded-lg mt-5 hover:opacity-[.7]'>Withdraw</button>}
      </div>
      </div>
    </div>
  )
}
