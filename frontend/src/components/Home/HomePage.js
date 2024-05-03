import React from 'react';
import Masthead from './Masthead/Masthead';
import ServicesSection from './ServicesHome/ServicesSection';
import ServiceItem from './ServicesHome/ServiceItem';
import Footer from '../common/Footer';

function HomePage() {
  return (
    <div>
      <Masthead />
      <ServicesSection>
        <ServiceItem title="Service 1" description="Description of service 1" />
        <ServiceItem title="Service 2" description="Description of service 2" />
      </ServicesSection>
      <Footer />
    </div>
  );
}

export default HomePage;
