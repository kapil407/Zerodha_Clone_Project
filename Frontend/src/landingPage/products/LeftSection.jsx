import React from 'react'

function LeftSection(
  {imgSource,
  heading,
  paragraph,
  linkfirst,
  linksecond,
  googleLink,
  appleLink

}
) {
  return (
    <div className='container mb-5 mt-5'>
    <div className='row mt-5'>
      <div className='col-6 mt-5 mb-5'>
        <img src={imgSource} alt="image" className='mt-5' style={{width:"80%"}}/>
      </div>
      <div className='col-6  p-3 mt-5'>
          <h1 className='mb-5 fs-4 mt-5'>{heading}</h1>
          <p className='mb-3'>{paragraph}</p>
        <div className='mb-4 '>
            <a href="#" style={{textDecoration:"none" , marginRight:"50px"}}>{linkfirst}</a>
           <a href="#" className='mx-5' style={{textDecoration:"none"}}>{linksecond}</a><br />
        </div>
           <img src={googleLink} alt="googleImage" />
           <img className='mx-5' src={appleLink} alt="appleImage" />
      </div>
      <h3 className='text-center fs-5 text-muted'>Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</h3>
    </div>
    </div>
  )
}

export default LeftSection