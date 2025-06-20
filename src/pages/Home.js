import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <h1>Welcome to home page</h1>
      <p>This is the home page of our application.</p>
      <Footer />
      <p>© 2023 My Application</p>  
      <p>All rights reserved.</p>
    </div>
  )
}

export default Home
