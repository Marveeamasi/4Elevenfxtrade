import RequestCont from '@/components/RequestCont'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import React from 'react'

export default function page() {
  return (
    <div className='flex w-full'>
      <Sidebar title='requests'/>
      <div className='w-full mb-20'>
      <Topbar title='requests'/>
      <div className='p-5'>
      <div className='bg-[#0a0c0c] rounded-lg flex flex-col w-full justify-center max-sm:items-center p-5 '>
      <h1>All made requests</h1>
      <RequestCont/>
      </div>
      </div>
      </div>
    </div>
  )
}
