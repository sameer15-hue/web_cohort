// App.js
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  
  function Login() {
    // Login functionality here
  }
  
  function Signup() {
    // Signup functionality here
  }
  
  // Inline styles for CSS animations and styling
  const appStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8',
    margin: 0,
    fontFamily: 'Arial, sans-serif',
  };

  const containerStyle = {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  };

  const headerStyle = {
    color: '#4a90e2',
    marginBottom: '1rem',
    fontSize: '24px',
  };

  const labelStyle = {
    fontSize: '14px',
    color: '#333',
    display: 'block',
    marginBottom: '0.5rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    transition: 'border-color 0.3s'
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    margin: '0.5rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#4a90e2',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  };

  return (
    <div style={appStyle}>
      <div style={containerStyle}>
        <h2 style={headerStyle}>Login Form</h2>
        <label id="email" style={labelStyle}><b>Enter Mail:</b></label>
        <input id="email" placeholder="Enter mail" type="email" style={inputStyle} /><br />
        
        <label id="password" style={labelStyle}><b>Enter Passkey:</b></label>
        <input id="password" placeholder="Enter password" type="password" style={inputStyle} /><br /><br />
        
        <button type="submit" onClick={Login} style={buttonStyle}>Login</button>
        <button type="submit" onClick={Signup} style={{ ...buttonStyle, backgroundColor: '#5cb85c' }}>Signup</button>
      </div>
    </div>
  );
}

export default App;
