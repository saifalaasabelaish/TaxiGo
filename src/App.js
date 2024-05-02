import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/common/TopBar';
import NavigationBar from './components/common/NavigationBar';
import ContactPage from './components/ContactUsPage/ContactPage'; // Make sure the path is correct
import HomePage from './components/Home/HomePage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import Order from "./components/TaxiRequest/TaxiRequest";
import Login from "./components/Login/Login"

function App() {
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
        <Route path="/contact" Component={ContactPage} /> </Routes>

        
      </div>
    </Router>
  );
}
export default App;