// App.js
import React from 'react';
import TopBar from './components/TopBar';
import NavigationBar from './components/NavigationBar';
import Masthead from './components/Masthead';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import RatingDrive from './components/RatingDrive';
function App() {
  return (
    <div>
      <TopBar />
      <NavigationBar />
      <Masthead />
      <ServicesSection />
      <Footer />
      <RatingDrive/>
    </div>
  );
}

export default App;
