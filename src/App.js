// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Masthead from './components/Masthead';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <NavigationBar />
        <Routes>
          <Route path="/" element={
            <>
              <Masthead />
              <ServicesSection />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
