// App.js
import React from 'react';
import TopBar from './components/TopBar';
import NavigationBar from './components/NavigationBar';
import Masthead from './components/Masthead';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import RegisterForm from './components/CreateProfile';
function App() {
  return (
    <div>
      <TopBar />
      <NavigationBar />
      <Masthead />
      <ServicesSection />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default App;
