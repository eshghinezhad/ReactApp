import React from "react";
import './../css/Header.css';
 
const Header = () => {
  return (
    <header style={{ backgroundColor: '#333', color: 'white', padding: '10px' }}>
     <nav className="" style={{  padding: '10px'}}>

            <p> 
                <a href="/" style={{  marginLeft: '60%', color: 'white',fontSize:'20px' }}>Home</a> | 
                <a href="/About" style={{  marginLeft: '10px', color: 'white',fontSize:'20px'  }}>About</a> | 
                <a href="/contact" style={{  marginLeft: '10px', color: 'white',fontSize:'20px'  }}>Contact</a> |
                <a href="/Profile" style={{  marginLeft: '10px', color: 'white',fontSize:'20px'  }}>Profile</a> |
                <a href="/Register" style={{  marginLeft: '10px', color: 'white',fontSize:'20px'  }}>Register</a>
            </p>
      </nav>
    </header>    
  );
}
export default Header;