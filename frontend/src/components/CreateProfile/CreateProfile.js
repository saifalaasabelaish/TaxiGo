import React, { useState } from 'react';
import backgroundImage from '../../assets/home_pic.png';
import './CreateProfile.css';

function RegisterForm() {
  const [Data, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNumber: '',
    dateOfBirth: '',
    gender: '',
    location: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:5001/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Data),
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(errorData => {
            throw new Error(errorData.message || 'Failed to register user');
          });
        }
        return response.json();
      })
      .then(data => {
        alert('Registered successfully!');
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
      })
      .catch(error => {
        console.error('Error :', error.message);
        alert(`Failed to register : ${error.message}`);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => {
<<<<<<< HEAD
      const updatedFormData = {
=======
      const newFormData = {
>>>>>>> 64b136b5b30058e2ea42243454b8786a95e3ee5f
        firstName: prevState.firstName,
        lastName: prevState.lastName,
        email: prevState.email,
        password: prevState.password,
        mobileNumber: prevState.mobileNumber,
        dateOfBirth: prevState.dateOfBirth,
        gender: prevState.gender,
        location: prevState.location,
      };

<<<<<<< HEAD
      newFormData[name] = value;
=======
       newFormData[name] = value;
>>>>>>> 64b136b5b30058e2ea42243454b8786a95e3ee5f

      return newFormData;
    });
  };

  return (
    <header className="masthead">
      <div>
        <div className="headerForPh"></div>
        <div className="register-form">
          <h2>Create Profile</h2>

          <form id="register" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={Data.firstName} onChange={handleChange} required />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={Data.lastName} onChange={handleChange} required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={Data.email} onChange={handleChange} required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={Data.password} onChange={handleChange} required />
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input type="tel" id="mobileNumber" name="mobileNumber" value={Data.mobileNumber} onChange={handleChange} required />
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" value={Data.dateOfBirth} onChange={handleChange} required />
            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender" value={Data.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" value={Data.location} onChange={handleChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    </header>
  );
}

export default RegisterForm;