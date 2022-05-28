import React from 'react'
import styles from "../../src/style/navbar.css";
 
const Navbar = () =>{
  return (
    <header className={styles.header}>
        
        <div className={styles.listcontainer}>
            <ul className={styles.list}>
                <li> HOME PAGE</li>
                <li> PRODUCT</li>
                <li> CONECT US</li>
            </ul>
        </div>
        <div className={styles.logo}>
            <img src=''></img>
        </div>
    </header>
    
  );
};
export default Navbar;

