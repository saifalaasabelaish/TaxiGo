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
  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const photo = document.getElementById('photo').files[0];

    
    if (!validatePassword(password)) {
      alert('Password must contain at least 5 letters and 4 digits.');
      return; 
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phone);
    formData.append('photo', photo);

    const response = await fetch('/register', {
      method: 'POST',
      body: formData 
    });

    if (response.ok) {
      alert('Registration successful!');
    } else {
      alert('Failed to register.');
    }
  };

  const validatePassword = (password) => {
    const hasEnoughLetters = (password.match(/[a-zA-Z]/g) || []).length >= 5;
    const hasEnoughDigits = (password.match(/\d/g) || []).length >= 4;
    return hasEnoughLetters && hasEnoughDigits;
  };

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

ReactDOM.render(
  <>
    <Masthead />
    <RegisterForm />
  </>,
  document.getElementById('root')
);

export default RegisterForm;
