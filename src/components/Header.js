import React from "react";
import topLogo from "./../topLogo.png";
import './../css/Header.css';
 
const Header = () => {
  return (
    <header className="header">
     <nav className="" style={{  padding: '10px'}}>

            <p> 
                <a href="#" style={{  marginLeft: '60%', color: 'white',fontSize:'20px' }}>Home</a> | 
                <a href="#" style={{  marginLeft: '10px', color: 'white',fontSize:'20px'  }}>About</a> | 
                <a href="#" style={{  marginLeft: '10px', color: 'white',fontSize:'20px'  }}>Contact</a>
                <a href="#" style={{  marginLeft: '10px', color: 'white',fontSize:'20px'  }}>Profile</a> |
                <a href="#" style={{  marginLeft: '10px', color: 'white',fontSize:'20px'  }}>Register</a>
            </p>
      </nav>
    </header>    
  );
}
export default Header;