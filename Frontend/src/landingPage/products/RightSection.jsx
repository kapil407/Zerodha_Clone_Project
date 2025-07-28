import React from 'react'

function RightSection(
  {imgSource,
  heading,
  paragraph,
  
  linksecond,
  googleLink,
  appleLink

}
) {
  return (
    <div className='container mb-5 mt-5 '>
    <div className='row mt-5'>
      
      <div className='col-6  p-5 mt-5'>
          <h1 className='mb-3 fs-4 mt-5'>{heading}</h1>
          <p className='mb-3'>{paragraph}</p>
        <div className='mb-4 '>
          
           <a href="#" style={{textDecoration:"none"}}>{linksecond}</a><br />
        </div>
           {/* <img src={googleLink} alt="googleImage" />
           <img className='mx-5'  src={appleLink} alt="appleImage" /> */}
      </div>
      <div className='col-6 '>
        <img src={imgSource} alt="image" style={{width:"90%"}}/>
      </div>
    </div>
    </div>
  )
}

export default RightSection