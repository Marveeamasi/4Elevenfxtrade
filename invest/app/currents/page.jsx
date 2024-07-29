'use client'
import Currents from '@/components/Currents'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function page() {
  const currents = [
    {plan:'silver', initial:650, amount: 4000, nextPay:90,rate:'20%'},
    {plan:'gold', initial:780, amount: 333000, nextPay:90,rate:'20%'}, 
    {plan:'silver', initial:780, amount: 33000, nextPay:35,rate:'20%'},
    {plan:'silver', initial:34000, amount: 32000, nextPay:73,rate:'20%'},
    {plan:'gold', initial:34000, amount: 90000, nextPay:78,rate:'20%'},
    {plan:'silver', initial:34000, amount: 25000, nextPay:12,rate:'15%'},
    {plan:'silver', initial:34000, amount: 45000, nextPay:44,rate:'15%'},
    {plan:'silver', initial:780, amount: 13000, nextPay:200,rate:'15%'},
    {plan:'silver', initial:890, amount: 32000, nextPay:200,rate:'15%'},
    {plan:'gold', initial:780, amount: 244000, nextPay:200,rate:'15%'},
    {plan:'gold', initial:780, amount: 300000, nextPay:200,rate:'15%'},
    {plan:'silver', initial:780, amount: 40000, nextPay:200,rate:'15%'},
    {plan:'diamond', initial:780, amount: 2000, nextPay:23,rate:'15%'},
    {plan:'silver', initial:780, amount: 54000, nextPay:23,rate:'10%'},
    {plan:'silver', initial:780, amount: 76000, nextPay:23,rate:'10%'},
    {plan:'silver', initial:780, amount: 54000, nextPay:89,rate:'10%'}, 
    {plan:'generational', initial:34000, amount: 12300000, nextPay:15,rate:'30%'},
    {plan:'silver', initial:34000, amount: 95000, nextPay:90,rate:'10%'},
    {plan:'generational', initial:34000, amount: 90000, nextPay:9,rate:'10%'},
    {plan:'gold', initial:34000, amount: 80000, nextPay:12,rate:'20%'},
    {plan:'silver', initial:780, amount: 40000, nextPay:2,rate:'30%'},
    {plan:'diamond', initial:34000, amount: 2000, nextPay:2,rate:'20%'},
    {plan:'diamond', initial:34000, amount: 3000, nextPay:86,rate:'20%'},
 ]

 const [filteredData, setFilteredData] = useState(currents);
  const [q, setQ] = useState('');

  const handleSearch = (event) => {
    setQ(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const filteredCurrents = currents.filter((current) =>
      current.plan.toLowerCase().includes(q)
    );
    setFilteredData(filteredCurrents);
  }, [q]);

  return (
    <div className='flex w-full'>
      <Sidebar title='currents'/>
      <div className='w-full'>
      <Topbar title='currents'/>
      <div className='w-full p-5'>
        <div className='px-5 rounded-lg bg-[#0a0c0c] hover:bg-[#00eaff10] flex items-center gap-5 max-sm:w-full w-[300px] text-[#eee] '>
        <FaSearch/>
          <input type="text" className='outline-none bg-transparent w-full h-[50px]' placeholder='Search by plan' maxLength={20} onChange={handleSearch}/>
        </div>
      </div>
      <div className='w-full p-5 grid max-sm:grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-5'>
      {filteredData.map((current, i) => (
            <Currents key={i} {...current} />
          ))}
      </div>
      </div>
    </div>
  )
}
