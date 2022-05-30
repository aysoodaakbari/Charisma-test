import React from 'react'
import  "../../src/style/navbar.css";
 
const Navbar = () =>{
  return (
    <header className="header">
        <div className="logo">
            <img src='' alt='لوگو'></img>
        </div>
        <div className="list-container">
            <ul className="list">
                <li> صفحه اصلی
                </li>
                <li>محصولات</li>
                <li>تماس با ما</li>
            </ul>
        </div>
        
    </header>
    
  );
};
export default Navbar;

