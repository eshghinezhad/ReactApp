import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100vh'
    }}>  
     <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to Profile page</h1>
        <p>This is the Profile page of my application.</p>
      </main>
     <Footer/>
    </div>
  )
}

export default Profile
