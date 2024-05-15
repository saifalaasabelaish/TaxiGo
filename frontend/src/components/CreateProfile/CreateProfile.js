import React, { useState } from 'react';
import backgroundImage from '../../assets/home_pic.png';
import './CreateProfile.css';

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNumber: '',
    dateOfBirth: '',
    gender: '',
    location: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to register user');
      }

      const data = await response.json();
      console.log('Registered with:', data);
      alert(JSON.stringify(data, null, 2));

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobileNumber: '',
        dateOfBirth: '',
        gender: '',
        location: ''
      });
    } catch (error) {
      console.error('Error registering user:', error.message);
      alert(`Failed to register user. Error: ${error.message}`);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  return (
    <header className="masthead">
      <div>
        <div className="headerForPh"></div>
        <div className="register-form">
          <h2>Create Profile</h2>

          <form id="register" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input type="tel" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender" value={formData.gender}

              onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    </header>
  );
}

export default RegisterForm;
