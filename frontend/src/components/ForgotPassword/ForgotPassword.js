import React, { useState } from 'react';
import '../ForgotPassword/ForgotPassword.css';
import backgroundImage from '../../assets/home_pic.png';


const ForgotPassword = ({ handleResetPassword }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  

  if (!emailRegex.test(email)) {
    setError('Please enter a valid email address');
    return;
  }
  else {setError(null);}
  };
  return (
    <header className="masthead">
    <div className='Forgot-Container'>
      <h2>Forgot Password</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

    </header>
  );
};

export default ForgotPassword;
