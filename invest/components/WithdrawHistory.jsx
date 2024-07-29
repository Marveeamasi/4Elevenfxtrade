import React from 'react'
import Withdrawal from './Withdrawal'
import usePagination from '@/hooks/usePagination'

export default function WithdrawHistory() {
    const withdrawal = [
       {plan:'silver', status:'approved', amount: 4000, date:'12-07-24',},
       {plan:'gold', status:'pending', amount: 333000, date:'12-07-24',},
       {plan:'silver', status:'pending', amount: 33000, date:'11-07-24',},
       {plan:'silver', status:'approved', amount: 32000, date:'10-07-24',},
       {plan:'gold', status:'approved', amount: 90000, date:'09-07-24',},
       {plan:'silver', status:'approved', amount: 25000, date:'08-07-24',},
       {plan:'silver', status:'approved', amount: 45000, date:'08-07-24',},
       {plan:'silver', status:'pending', amount: 13000, date:'08-07-24',},
       {plan:'silver', status:'failed', amount: 32000, date:'08-07-24',},
       {plan:'gold', status:'pending', amount: 244000, date:'08-07-24',},
       {plan:'gold', status:'pending', amount: 300000, date:'08-07-24',},
       {plan:'silver', status:'pending', amount: 40000, date:'08-07-24',},
       {plan:'diamond', status:'pending', amount: 2000, date:'06-07-24',},
       {plan:'silver', status:'pending', amount: 54000, date:'06-07-24',},
       {plan:'silver', status:'pending', amount: 76000, date:'06-07-24',},
       {plan:'silver', status:'pending', amount: 54000, date:'05-07-24',}, 
       {plan:'generational', status:'approved', amount: 12300000, date:'02-07-24',},
       {plan:'silver', status:'approved', amount: 95000, date:'29-06-24',},
       {plan:'silver', status:'approved', amount: 90000, date:'28-06-24',},
       {plan:'gold', status:'approved', amount: 80000, date:'25-06-24',},
       {plan:'silver', status:'pending', amount: 40000, date:'23-06-24',},
       {plan:'diamond', status:'approved', amount: 2000, date:'23-06-24',},
       {plan:'diamond', status:'approved', amount: 3000, date:'21-06-24',},
    ]

    const { currentPage, slicedData, totalPages, handlePageChange } = usePagination(withdrawal);

  return (
    <div className='grid grid-cols-1 w-full mt-10 gap-2'>
     {slicedData.map((w, i) => (
            <Withdrawal key={i} plan={w.plan} status={w.status} amount={w.amount} date={w.date}/>
     )
     )}
     <div className='flex justify-center mt-5'>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`px-2 py-1 mr-2 rounded-md text-sm font-medium ${
              currentPage === pageNumber ? 'bg-col text-black font-extrabold' : 'bg-transparent border border-[#00eaff]'
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
    </div>
    </div>
  )
}
