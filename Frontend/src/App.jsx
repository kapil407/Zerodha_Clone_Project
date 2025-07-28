import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import Navbar from '../src/landingPage/Navbar'
import HomePage from './landingPage/home/HomePage'
import Footer from '../src/landingPage/Footer'
import PricingPage from "../src/landingPage/pricing/PricingPage"
import ProductPage from './landingPage/products/ProductPage';
import AboutPage from './landingPage/about/AboutPage';
import SupportPage from './landingPage/support/SupportPage';
import SignUp from '../src/landingPage/signUp/SignUp'
import NotFound from './landingPage/NotFound';


function App() {
 

  return (
    <>
     <Navbar/>
    <Routes>
     <Route path="/" element={<HomePage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
            <Route path="/about" element={<AboutPage/>}/>
              <Route path="/support" element={<SupportPage/>}/>
               <Route path="*" element={<NotFound/>}/>
    </Routes>
       <Footer/>
      
    </>
  )
}

export default App
