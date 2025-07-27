import React from 'react'

function Award() {
  return (
    <div className='container'>
      <div className='row'>
      <div className='col-6'>
        <img src="media/images/largestBroker.svg" alt="#" />
      </div>
      <div className='col-6'>
        <h1 >Largest stock broker in India</h1>
        <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
        <div className='row '>
          <div className='col-6'>
            <ul>
              <li  className='mb-3'>Future and Options</li>
              <li  className='mb-3'>Commodity derivatives</li>
              <li  className='mb-3'>Currency derivatives</li>
            </ul>
          </div>
          <div className='col-6'>
             <ul>
              <li  className='mb-3'>
              Stock & IPOs</li>
              <li  className='mb-3'>Direct mutual funds</li>
              <li  className='mb-3'>Bonds and Govt. Securities</li>
            </ul>
          </div>
        </div>
         <img className='my-5' src="media/images/pressLogos.png" style={{width:"85%"}} alt="img" />
      </div>
     
      </div>
    </div>
  )
}

export default Award