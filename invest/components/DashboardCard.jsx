import React from 'react'
import CountUp from './CountUp'

export default function DashboardCard({title, sign, Icon, amount}) {
  return (
    <div className='bg-[#0a0c0c] rounded-lg flex  flex-col gap-5 p-5 max-xsm:items-center'>
        <Icon className='text-6xl text-[rgba(0,234,255,0.75)] rounded-full bg-[rgba(0,234,255,0.05)] p-3'/>
        <CountUp endValue={Number(amount)} sign={sign}/>
         <div>{title}</div>
    </div>
  )
}
