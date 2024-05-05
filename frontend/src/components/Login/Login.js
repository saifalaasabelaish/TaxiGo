import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/home_pic.png';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    else { setError(null); }
  };

  return (
    <header className="masthead">
    <div className="login-container">
        <div className='Log'>
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="submit-button">Login</button>
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
          <div />
        </div> 
      </div>
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

    </header>
  );
};

export default Login;