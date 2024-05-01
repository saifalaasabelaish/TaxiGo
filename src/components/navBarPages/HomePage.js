// HomePage.js
import React from 'react';
import Masthead from '../Masthead';
import ServicesSection from '../ServicesSection';
import ServiceItem from '../ServiceItem';
import Footer from '../Footer';

function HomePage() {
  return (
    <div>
      <Masthead />
      <ServicesSection>
        <ServiceItem title="Service 1" description="Description of service 1" />
        <ServiceItem title="Service 2" description="Description of service 2" />
        {/* Add more ServiceItem components as needed */}
      </ServicesSection>
      {/* You can add more sections/components as needed */}
      <Footer />
    </div>
  );
}

export default HomePage;
