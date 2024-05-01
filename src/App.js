// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import NavigationBar from './components/NavigationBar';
//import Masthead from './components/Masthead';
//import ServicesSection from './components/ServicesSection';
//import Footer from './components/Footer';
import ContactPage from './components/navBarPages/ContactPage'; // Make sure the path is correct
import HomePage from './components/navBarPages/HomePage';
import ServicesPage from './components/navBarPages/ServicesPage';
import Login from './components/navBarPages/LogIn';
import Order from './components/navBarPages/Order';
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