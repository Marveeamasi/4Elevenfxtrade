'use client'
import DashboardCard from '@/components/DashboardCard'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import { RiHandCoinFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import PieChart from '@/components/PieChart';
import { Data } from '@/utils/Data';
import WithdrawHistory from '@/components/WithdrawHistory';



Chart.register(CategoryScale);

export default function page() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.status), 
    datasets: [
      {
        label: "Request status",
        data: Data.map((data) => data.total),
        backgroundColor: [
          "rgb(0, 255, 255,.5)",
          "rgb(255, 255, 0,.5)",
          "rgb(255, 0, 255,.5)"
        ],
        borderColor: "transparent",
        borderWidth: 0
      }
    ]
  });


  
  return (
    <div className='flex w-full'>
      <Sidebar title='dashboard'/>
      <div className='w-full'>
      <Topbar title='dashboard'/>
      <div className='grid sm:grid-cols-3 grid-cols-1 gap-5 px-5'>
        <DashboardCard title='Total investment' Icon={RiHandCoinFill} sign='$' amount='1200'/>
        <DashboardCard title='Total earning' Icon={GiReceiveMoney} sign='$' amount='23889'/>
        <DashboardCard title='Currents' Icon={FaMoneyBillTrendUp} sign='' amount='506'/>
      </div>
      <div className='grid grid-cols-1 gap-5 p-5'>
      <div className='bg-[#0a0c0c] rounded-lg flex flex-col w-full justify-center items-center p-5'>
      <h1>Request status overview</h1>
        <PieChart chartData={chartData} />
         </div>
         </div>
         <div className='grid grid-cols-1 p-5 pt-0 mb-20'>
         <div className='bg-[#0a0c0c] rounded-lg flex flex-col w-full justify-center items-center p-5 '>
           <h1>Withdrawal history</h1>
          <WithdrawHistory/>
         </div>
         </div>
      </div>
    </div>
  )
}
 