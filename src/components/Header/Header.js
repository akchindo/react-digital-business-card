import React from 'react';
import face from '../images/Person-face.png'
import classes from "./Header.module.css"

function Header() {
  return ( 
    <div > 
       <img src={face} alt="logo"  className={classes.navLogo} />

    </div>
    );
}

export default Header;
