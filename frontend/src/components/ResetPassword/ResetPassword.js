import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './ResetPassword.css'; 
import backgroundImage from '../../assets/home_pic.png'; 

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/User/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      });

      if (!response.ok) {
        throw new Error(`Failed to reset password. Status code: ${response.status}`);
      }

      const data = await response.text();
      setMessage(data);
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred');
    }
  };

  return (
    <header className="masthead">
      <div className="Reset-Container">
        <h2>Reset Password</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>New Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      </div>
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="background-overlay"></div>
    </header>
  );
};

export default ResetPassword;