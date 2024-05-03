import React from 'react';
import ReactDOM from 'react-dom';
import './CreateProfile.css';

function Masthead() {
  return (
    <div className="masthead position-relative">
      <div className="background-image"
        style={{
          backgroundImage: "url('path/to/your/background-image.jpg')"
        }}>
      </div>
      <div className="background-overlay"></div>
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <h1 className="display-3 text-white">Your Title Here</h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="lead text-white-75 mb-5">Your subtitle here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
  );
}

ReactDOM.render(<Masthead />, document.getElementById('root'));
ReactDOM.render(<RegisterForm />, document.getElementById('root'));

export default RegisterForm;
