import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import ProfileContext from './context/ProfileContext';




const App = () => {
  return (
    <ProfileContext.Provider value={{}}>
    <div className="App">
      <Router>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>

    </div>
    </ProfileContext.Provider>
  );
}

export default App;
