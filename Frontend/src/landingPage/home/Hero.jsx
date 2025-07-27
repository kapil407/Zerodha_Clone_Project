import React from 'react'

function Hero() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img className='mb-5' src="media/images/homeHero.png" alt="heroImage" />
        <h1 className='mt-5'>Invest in everything</h1>
        <p>Online platform to invest in stock , derivatives, mutual funds, and more</p>
        <button className='p-2 rounded btn btn-primary fs-5' style={{width:"18%" ,margin: "0 auto" ,border:"none"}}>Signup Now</button>
      </div>
    </div>
  )
}

export default Hero