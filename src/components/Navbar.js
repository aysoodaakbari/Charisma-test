import React from 'react'
import  "../../src/style/navbar.css";
 
const Navbar = () =>{
  return (
    <header className="header">
        
        <div className="list-container">
            <ul className="list">
                <li> HOME PAGE</li>
                <li> PRODUCT</li>
                <li> CONECT US</li>
            </ul>
        </div>
        <div className="logo">
            <img src='' alt=''></img>
        </div>
    </header>
    
  );
};
export default Navbar;

