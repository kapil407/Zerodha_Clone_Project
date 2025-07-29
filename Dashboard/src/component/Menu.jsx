import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  // const [selectedMenu, setSelectedMenu] = useState(0);
  // const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // const handleMenuClick = (index) => {
  //   setSelectedMenu(index);
  // };

  // const handleProfileClick = (index) => {
  //   setIsProfileDropdownOpen(!isProfileDropdownOpen);
  // };

  // const menuClass = "menu";
  // const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
             
            >
             
                Dashboard
            
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
          
            >
         
                Orders
          
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
       
            >
    
                Holdings
          
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
        
            >
           
                Positions
       
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
          
            >
         
                Funds
        
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
       
            >
       
                Apps
          
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile"
  
        >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
