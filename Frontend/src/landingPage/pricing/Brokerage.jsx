import React from 'react'

function Brokerage() {
  return (
    <div className='container'>
    <div className='row'>
      <div className='col-8'>
       <a href="#" style={{textDecoration:"none"}}> <h1 className='fs-4 mb-5'>Brokerage Calculator</h1></a>
       <ul >
         <li className='mt-4'>Call and Trade & RMS auto squareoff:Additional charge of ₹50 + GST per order.</li>
        <li className='mt-4'>Digital contract notes will be sent via email.</li>
        <li className='mt-4'>Physical copies of contract notes, if required shall be charged ₹20 pre contract note.Courier charges apply. </li>
        <li className='mt-4'>For NRI account (non-PIS),0.5% or ₹100 per executed per equity (whichever is low ).</li>
        <li className='mt-4'>For NRI account (PIS) , 0.5% or ₹200 per executed order for equity (whichever is low ).</li>
         If account is in debit balance,
        any order placed will be changed ₹40 per executed order 
        <li className='mt-4 mb-5'>instead of ₹20  per executed</li>
       </ul>
      </div>
      <div className='col-4'>
         <a href="#" style={{textDecoration:"none"}}> <h1 className='fs-4'>List of charges </h1></a>
      </div>
    </div>
    </div>
  )
}

export default Brokerage