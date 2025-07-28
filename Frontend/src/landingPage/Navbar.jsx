import React from 'react'
//largestBroker.svg
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   
    <nav className="navbar navbar-expand-lg  p-3 border-bottom " style={{background:"white"}}>
  <div className="container">
   <Link to={'/'}> <img src="media/images/logo.svg" alt="Logo" style={{width:"30%",marginLeft:"25px"}} /></Link>
  
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item mx-4">
        <Link to={'/signup'} className="nav-link change "  href="#">Signup</Link>
        </li>
      <li className="nav-item mx-4">
          <Link to={'/about'} className="nav-link change "  href="#">About</Link>
        </li>
         <li className="nav-item mx-4">
          <Link to={'/product'} className="nav-link change "  href="#">Product</Link>
        </li>
         <li className="nav-item mx-4">
          <Link to={'/pricing'} className="nav-link change"  href="#">Pricing</Link>
        </li>
       <li className="nav-item mx-4">
          <Link to={'/support'} className="nav-link change"  href="#">Support</Link>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar