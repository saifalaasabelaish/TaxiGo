import React from 'react';
import { useLocation } from 'react-router-dom';
import Masthead from './Masthead/Masthead';
import ServicesSection from './ServicesHome/ServicesSection';

function HomePage() {
  const location = useLocation();
  const { acces } = location.state || {};

  return (
    <div>
      <Masthead />
      <ServicesSection/>

    </div>
  );
}

export default HomePage;
