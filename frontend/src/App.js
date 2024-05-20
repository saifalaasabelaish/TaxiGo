import React, { useEffect, useState } from 'react';
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
import Map from "./components/Map/Map";
import MapWithCo from "./components/MapWithCo/MapWithCo"
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
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
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-profile" element={<RegisterForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<ContactPage />} /> 
          <Route path="/map" element={<Map />} />
          <Route path="/mapwithco" element={<MapWithCo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
