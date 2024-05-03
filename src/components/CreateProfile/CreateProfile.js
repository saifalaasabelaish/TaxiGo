import React from 'react';
import ReactDOM from 'react-dom';
import './CreateProfile.css';
import backgroundImage from '../../assets/home_pic.png';



function RegisterForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const photo = document.getElementById('photo').files[0];

    console.log('Registered with:', { name, email, password, phone, photoName: photo ? photo.name : 'No file selected' });
    alert(`   !\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPhoto: ${photo ? photo.name : 'No file selected'}`);
  }

  return (
    <header className="masthead">
    <div>
      <div className="headerForPh"></div>
      <div className="register-form">
        <h2>Create Profile</h2>

        <form id="register" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
          <label htmlFor="photo">Photo:</label>
          <input type="file" id="photo" name="photo" accept="image/*" /><br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>


    </header>
  );
}



export default RegisterForm;  
