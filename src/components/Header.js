import React from "react";
import { Link } from "react-router-dom";
import './../css/Header.css';
 
const Header = () => {
  return (
    <header style={{ backgroundColor: '#333', color: 'white', padding: '10px' }}>
     <nav style={{ padding: '10px' }}>
        <p> 
          <Link to="/" style={{ marginLeft: '60%', color: 'white', fontSize: '20px' }}>Home</Link> | 
          <Link to="/about" style={{ marginLeft: '10px', color: 'white', fontSize: '20px' }}>About</Link> | 
          <Link to="/contact" style={{ marginLeft: '10px', color: 'white', fontSize: '20px' }}>Contact</Link> | 
          <Link to="/profile" style={{ marginLeft: '10px', color: 'white', fontSize: '20px' }}>Profile</Link> | 
          <Link to="/register" style={{ marginLeft: '10px', color: 'white', fontSize: '20px' }}>Register</Link>
        </p>
      </nav>
    </header>    
  );
}
export default Header;