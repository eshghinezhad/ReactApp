import React, { useContext } from 'react'
import ProfileContext from '../context/ProfileContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const { profiles } = useContext(ProfileContext);

  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100vh'
    }}>  
     <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Profile page</h1>
        <p>This is the Profile page of my application.</p>

        <ul>
          {profiles.map((profile, idx) => (
            <li key={idx}>
              <strong>Name:</strong> {profile.name} <br />
              <strong>Email:</strong> {profile.email} <br />
              <strong>Program:</strong> {profile.program}
            </li>
          ))}
      </ul>
      </main>
     <Footer/>
    </div>
  )
}

export default Profile
