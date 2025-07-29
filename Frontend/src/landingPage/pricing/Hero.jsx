import React from 'react'

import { BsCurrencyRupee } from "react-icons/bs";
function Hero() {
  return (
    <div className='container mb-5'>
    <div className='row text-center mt-5 mb-5'>
        <h1>Pricing</h1>
        <p className='mt-3'>Free equity investments and flat <BsCurrencyRupee />20 traday and F&O trades</p>
    </div>
    <div className='row mt-5'>
      <div className='col-4 p-4 '>
        <img src="media/images/pricingEquity.svg" alt="image"  style={{width:"60%"}}/>
        <h1 className='mb-3 fs-3'>Free equity delivery</h1>
        <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
      </div>
       <div className='col-4 p-4'>
        <img src="https://zerodha.com/static/images/other-trades.svg" alt="image" style={{width:"60%"}} />
        <h1 className='mb-3 fs-3'>Intraday and F&O trades</h1>
        <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat br ₹20 on all option trades.</p>
      </div>
       <div className='col-4 p-4'>
        <img src="media/images/pricingEquity.svg" alt="image" style={{width:"60%"}} />
        <h1 className='mb-3 fs-3'>Free direct MFy</h1>
        <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
      </div>
    </div>
    </div>
  )
}

export default Hero