import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Contact';
import Contact from './pages/Profile';




const App = () => {
  return (
    <div className="App">
      <Router>

        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
