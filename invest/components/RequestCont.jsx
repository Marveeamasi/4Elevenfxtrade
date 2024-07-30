'use client'
import React, { useEffect, useMemo, useState } from 'react'
import RequestItems from './RequestItems';

export default function RequestCont() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 10;
    const requestItems = [
       {plan:'college', status:'approved', amount: 4000, date:'12-07-24',},
       {plan:'platinium', status:'pending', amount: 333000, date:'12-07-24',},
       {plan:'college', status:'pending', amount: 33000, date:'11-07-24',},
       {plan:'college', status:'approved', amount: 32000, date:'10-07-24',},
       {plan:'platinium', status:'approved', amount: 90000, date:'09-07-24',},
       {plan:'college', status:'approved', amount: 25000, date:'08-07-24',},
       {plan:'college', status:'approved', amount: 45000, date:'08-07-24',},
       {plan:'college', status:'pending', amount: 13000, date:'08-07-24',},
       {plan:'college', status:'failed', amount: 32000, date:'08-07-24',},
       {plan:'platinium', status:'pending', amount: 244000, date:'08-07-24',},
       {plan:'platinium', status:'pending', amount: 300000, date:'08-07-24',},
       {plan:'college', status:'pending', amount: 40000, date:'08-07-24',},
       {plan:'workers', status:'pending', amount: 2000, date:'06-07-24',},
       {plan:'college', status:'pending', amount: 54000, date:'06-07-24',},
       {plan:'college', status:'pending', amount: 76000, date:'06-07-24',},
       {plan:'college', status:'pending', amount: 54000, date:'05-07-24',},
       {plan:'retirement', status:'approved', amount: 12300000, date:'02-07-24',},
       {plan:'college', status:'approved', amount: 95000, date:'29-06-24',},
       {plan:'college', status:'approved', amount: 90000, date:'28-06-24',},
       {plan:'platinium', status:'approved', amount: 80000, date:'25-06-24',},
       {plan:'college', status:'pending', amount: 40000, date:'23-06-24',},
       {plan:'workers', status:'approved', amount: 2000, date:'23-06-24',},
       {plan:'workers', status:'approved', amount: 3000, date:'21-06-24',},
       {plan:'college', status:'approved', amount: 4000, date:'12-05-24',},
       {plan:'platinium', status:'pending', amount: 333000, date:'12-05-24',},
       {plan:'college', status:'pending', amount: 33000, date:'11-05-24',},
       {plan:'college', status:'approved', amount: 32000, date:'10-05-24',},
       {plan:'platinium', status:'approved', amount: 90000, date:'09-05-24',},
       {plan:'college', status:'approved', amount: 25000, date:'08-05-24',},
       {plan:'college', status:'approved', amount: 45000, date:'08-05-24',},
       {plan:'college', status:'pending', amount: 13000, date:'08-05-24',},
       {plan:'college', status:'failed', amount: 32000, date:'08-05-24',},
       {plan:'platinium', status:'pending', amount: 244000, date:'08-05-24',},
       {plan:'platinium', status:'pending', amount: 300000, date:'08-05-24',},
       {plan:'college', status:'pending', amount: 40000, date:'08-05-24',},
       {plan:'workers', status:'pending', amount: 2000, date:'06-05-24',},
       {plan:'college', status:'pending', amount: 54000, date:'06-05-24',},
       {plan:'college', status:'pending', amount: 76000, date:'06-05-24',},
       {plan:'college', status:'pending', amount: 54000, date:'05-05-24',},
       {plan:'retirement', status:'approved', amount: 12300000, date:'02-05-24',},
       {plan:'college', status:'approved', amount: 95000, date:'29-04-24',},
       {plan:'college', status:'approved', amount: 90000, date:'28-04-24',},
       {plan:'platinium', status:'approved', amount: 80000, date:'25-04-24',},
       {plan:'college', status:'pending', amount: 40000, date:'23-04-24',},
       {plan:'workers', status:'approved', amount: 2000, date:'23-04-24',},
       {plan:'workers', status:'approved', amount: 3000, date:'21-04-24',}
    ]

    useEffect(() => {
        const totalPages = Math.ceil(requestItems.length / itemsPerPage);
        setTotalPages(totalPages);
      }, [requestItems, itemsPerPage]);

      const slicedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, requestItems.length);
        return requestItems.slice(startIndex, endIndex);
      }, [requestItems, currentPage, itemsPerPage]);

      const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
          setCurrentPage(newPage);
        }
      };
    

  return (
    <div className='grid grid-cols-1 w-full mt-10 gap-2'>
     {slicedData.map((r, i) => (
            <RequestItems key={i} plan={r.plan} status={r.status} amount={r.amount} date={r.date}/>
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
