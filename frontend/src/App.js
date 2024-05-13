import React  from 'react';
import {useEffect , useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/common/TopBar';
import NavigationBar from './components/common/NavigationBar';
import ContactPage from './components/ContactUsPage/ContactPage'; 
import HomePage from './components/Home/HomePage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import Order from "./components/TaxiRequest/TaxiRequest";
import Login from "./components/Login/Login";
import RegisterForm from "./components/CreateProfile/CreateProfile";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";



function App() {
  
  const [data, setData] = useState([]);

useEffect (() => {
  fetch('http://localhost:5001/backend/data')
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error('Error fetching data:', error));
}, []);
  return (
    <Router>
      <div>
        <TopBar />
        <NavigationBar />

        <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/order" Component={Order} />
        <Route path="/services" Component={ServicesPage} />
        <Route path="/login" Component={Login} />
        <Route path="/create-profile" Component={RegisterForm} />
        <Route path="/forgot-password" Component={ForgotPassword} />
        <Route path="/contact" Component={ContactPage} /> </Routes>


      </div>
    </Router>
  );
}
export default App;