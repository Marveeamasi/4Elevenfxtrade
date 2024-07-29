'use client'
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

export default function page() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCode, setSelectedCode] = useState('');
    const [isView, setIsView] = useState(false);
    const handleRegister = ()=> {
      window.location.href='/login';
    }

    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await axios.get('https://restcountries.com/v3.1/all');   
            setCountries(response.data)
          } catch (error) {
            console.error('Error fetching countries:', error);
          }
        };
    
        fetchCountries();
      }, []);
    
      const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
      };

      const handleCodeChange = (event) => {
        setSelectedCode(event.target.value);
      };

      const toggleView = () => {
        setIsView(!isView)
      }

  return (
    <div className='h-screen w-full relative bg-cover bg-no-repeat flex flex-col justify-center items-center max-sm:justify-end sm:p-10 bg-blend-darken bg-[#000000bb]' style={{backgroundImage: `url('about2.jpg')`}}>
       <Link href={'/'} className='flex gap-3 items-center justify-center absolute top-5'>
        <img src="logo.png" alt="logo" className='w-10 h-auto rounded-full logo-glow' />
        <span className='font-[900] text-2xl text-[#eee]'>4Elevenfxtrade</span>
      </Link>

      <div className='w-full sm:w-[500px] sm:rounded-lg max-sm:rounded-[30px] grid grid-cols-1 max-sm:rounded-bl-none max-sm:rounded-br-none bg-[#000000d5] backdrop-blur-sm p-10 gap-5'>
     <div className='flex max-sm:flex-col sm:justify-between w-full max-sm:items-center py-5 gap-5'>
      <h1 className='text-xl font-bold text-[#eee]'>Sign Up </h1>
      <div className='text-col text-lg font-bold opacity-[.9]'>..Get started investing</div>
      </div>
       <div className='grid grid-cols-2 max-sm:grid-cols-1 w-full gap-5'>
        <input type="text" placeholder='Username' maxLength={20} className='bg-transparent outline-none placeholder:text-[#a2a1ab] p-3 border border-[#00eaff13] rounded-lg'/>
        <select className='bg-transparent outline-none text-[#a2a1ab] p-3 border border-[#00eaff13] rounded-lg' name="" id="" value={selectedCountry || "Select Country"} onChange={handleCountryChange}>
       <option value="Select Country">Select Country</option>
        {countries?.length > 0 && countries.map((country) => (
          <option key={country.name.common}
           value={country.name.common}>
            {country.name.common}
          </option>
        ))}
       </select> 
       </div>
       <div className='grid grid-cols-2 max-sm:grid-cols-1 w-full gap-5'>
        <input type="email" placeholder='Email' maxLength={100} className='bg-transparent outline-none placeholder:text-[#a2a1ab]  p-3 border border-[#00eaff13] rounded-lg'/>
       <div className='flex items-center  p-3 border border-[#00eaff13] rounded-lg'>
       <select className='bg-transparent outline-none text-[#a2a1ab]' name="" id="" value={selectedCode || "Code"} onChange={handleCodeChange}>
       <option value="Code">Code</option>
        {countries?.length > 0 && countries.map((country) => (
          <option key={country.name.common}
           value={country.ccn3}>
            {country.ccn3}
          </option>
        ))}
       </select> 
       <input maxLength={11} type="number" placeholder='Phone' className='bg-transparent w-full outline-none placeholder:text-[#a2a1ab]'/>
       </div>
       </div>
       <div className='flex items-center w-full justify-between  p-3 border border-[#00eaff13] rounded-lg'>
       <input type={isView? 'text' : 'password'} maxLength={16} placeholder='Password' className='w-full bg-transparent outline-none placeholder:text-[#a2a1ab]'/>
        {isView? <IoEyeOff onClick={toggleView}/> : <IoEye onClick={toggleView}/>}
       </div>
       <button onClick={handleRegister} className=' flex justify-center items-center w-full h-12 rounded-lg bg-col hover:opacity-75 text-black text-sm font-bold'>Sign Up</button>
       <p className='flex gap-2 text-sm py-5 items-center w-full justify-center font-extralight text-[#a2a1ab]'>Already have an account? <Link className='text-[#eee] hover:text-[#00eaff]' href={'login'}>Login</Link></p>
      </div>
    </div>
  )
}
