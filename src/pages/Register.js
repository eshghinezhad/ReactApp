import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, program });
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100vh'
    }}>        
    <Header />
    <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          /><br />
          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          /><br />
          <input
            placeholder="Program"
            value={program}
            onChange={e => setProgram(e.target.value)}
            required
          /><br />
          <button type="submit">Submit</button>
        </form>
      </main>
      <Footer/>
    </div>
  );
}

export default Register;
