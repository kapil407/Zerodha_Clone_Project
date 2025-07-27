import React from 'react'
//largestBroker.svg

function Navbar() {
  return (
    
    <nav class="navbar navbar-expand-lg  p-3 border-bottom " style={{background:"white"}}>
  <div class="container">
   <a href="#"> <img src="media/images/logo.svg" alt="Logo" style={{width:"30%",marginLeft:"25px"}} /></a>
  
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item mx-4">
          <a className="nav-link change "  href="#">Signup</a>
        </li>
         <li class="nav-item mx-4">
          <a className="nav-link change "  href="#">About</a>
        </li>
         <li class="nav-item mx-4">
          <a className="nav-link change "  href="#">Product</a>
        </li>
         <li class="nav-item mx-4">
          <a className="nav-link change"  href="#">Pricing</a>
        </li>
       <li class="nav-item mx-4">
          <a className="nav-link change"  href="#">Support</a>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar