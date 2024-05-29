import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/home_pic.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  let acces=0;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    } else {
      setError(null);
    }

    try {
      const response = await axios.post('http://localhost:5001/user/login', { email, password });
      if (response.data.success) {
        console.log('Login successful');
        acces=1;
        navigate('/', { state: { acces } });
        
<<<<<<< HEAD
=======
        
>>>>>>> miqdad
      } else {
        setError('Invalid email or password');
      }
      const responsE = await axios.post('http://localhost:5001/admin/login', { email, password });
      if (responsE.data.success) {
        console.log('Login successful');
        acces=2;  
<<<<<<< HEAD
      navigate('/', { state: { acces } });
=======
      navigate('/', { state: { acces} });
>>>>>>> miqdad
      } else {
        setError('Invalid email or password');
      }

    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <header className="masthead">
      <div className="Connection_Status">
      </div>
      <div className="login-container">
        <div className="Log">
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="submit-button">
              Login
            </button>
          </form>
          <p>
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
          <hr />
          <p>
            <Link to="/create-profile">
              <button className="RegisterForm">Create Profile</button>
            </Link>
          </p>
        </div>
      </div>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
    </header>
  );
};

export default Login;
