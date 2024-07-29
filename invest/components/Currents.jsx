'use client'
import { BsArrow90DegUp} from 'react-icons/bs'
import CountUp from 'react-countup';

export default function Currents({plan, initial, amount, nextPay, rate}) {
  const planColors = {
    diamond: 'diamond-sh',
    silver: 'silver-sh',
    gold: 'gold-sh',
    generational: 'gen-sh',
  };
  const planText = {
    diamond: 'diamond-txt',
    silver: 'silvertxt',
    gold: 'gold-txt',
    generational: 'gen-txt',
  };

  const bgCol = planColors[plan] || '';
  const txtCol = planText[plan]  || '';

  return (
    <div className={`rounded-lg ${bgCol} p-5 flex flex-col gap-5 text-[#eee]`}>
      <div className='text-[#eee]'>{`+${rate} in the next ${nextPay} day(s)`}</div>
      <div className='flex flex-col justify-center items-center w-full gap-5'>
        <div className='flex items-center gap-2 flex-wrap'>
          <CountUp start={0} end={amount} duration={2} separator="," className='w-full font-bold text-lg'/>
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
