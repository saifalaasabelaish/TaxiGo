// App.js
import React from 'react';
import TopBar from './components/TopBar';
import NavigationBar from './components/NavigationBar';
import Masthead from './components/Masthead';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <TopBar />
      <NavigationBar />
      <Masthead />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;
