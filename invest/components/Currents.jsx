'use client'
import { BsArrow90DegUp} from 'react-icons/bs'
import CountUp from 'react-countup';

export default function Currents({plan, initial, amount, nextPay, rate}) {
  const planColors = {
    workers: 'diamond-sh',
    college: 'silver-sh',
    platinium: 'gold-sh',
    retirement: 'gen-sh',
  };
  const planText = {
    workers: 'diamond-txt',
    college: 'silvertxt',
    platinium: 'gold-txt',
    retirement: 'gen-txt',
  };

  const bgCol = planColors[plan] || '';
  const txtCol = planText[plan]  || '';

  return (
    <div className={`rounded-lg ${bgCol} p-5 flex flex-col gap-5 text-[#eee]`}>
      <h1 className='text-sm text=[#a2a1ab]'>{plan}</h1>
      <div className='text-[#eee] text-center'>{`+${rate} in the next ${nextPay} day(s)`}</div>
      <div className='flex flex-col justify-center items-center w-full gap-5'>
        <div className='flex items-center gap-2 flex-wrap w-full'>
          <CountUp start={0} end={amount} duration={2} separator="," className='font-bold text-lg'/>
          <span className={`text-[11px] ${txtCol}`}>Current</span>
          </div>
        <div className='flex items-center gap-5 w-full'>
           <BsArrow90DegUp className='animate-bounce'/>
           <div className='flex items-center gap-2 flex-wrap'>
        <div className='font-[200]'>{initial.toLocaleString()}</div><span className={`text-[11px] ${txtCol}`}>Initial</span></div>
        </div>
      </div>
    </div>
  )
}
