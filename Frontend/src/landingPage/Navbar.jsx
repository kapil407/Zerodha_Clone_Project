import React from 'react'
//largestBroker.svg

function Navbar() {
  return (
    
    <nav class="navbar navbar-expand-lg  p-3 border-bottom " style={{background:"white"}}>
  <div class="container">
   <a href="#"> <img src="media/images/logo.svg" alt="Logo" style={{width:"30%",marginLeft:"25px"}} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item mx-4">
          <a class="nav-link active" aria-current="page" href="#">Signup</a>
        </li>
         <li class="nav-item mx-4">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
         <li class="nav-item mx-4">
          <a class="nav-link active" aria-current="page" href="#">Product</a>
        </li>
         <li class="nav-item mx-4">
          <a class="nav-link active" aria-current="page" href="#">Pricing</a>
        </li>
       <li class="nav-item mx-4">
          <a class="nav-link active" aria-current="page" href="#">Support</a>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar