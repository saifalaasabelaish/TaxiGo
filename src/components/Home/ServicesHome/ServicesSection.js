// ServicesSection.js
import React from 'react';
import ServiceItem from './ServiceItem';

function ServicesSection() {
  return (
    <section className="services-section bg-warning">
      <div className="container">
        <div className="row">
          <ServiceItem 
            icon="🚕"
            title="Our Services"
            description="At TaxiGo, we offer a range of services to meet your transportation needs from standard city rides to airport transfers and special events. Whether you need a quick ride across town or a pre-booked car for the whole day, we provide flexible options tailored to your requirements."
          />
          <ServiceItem 
            icon="⏰"
            title="On Time, Every Time"
            description="Reliability is key in our business. At TaxiGo, we ensure that your car arrives on time, every time, so you never have to worry about being late. Our drivers are trained to provide professional and timely service."
          />
          <ServiceItem 
            icon="🌐"
            title="City to City"
            description="Need to travel between cities? TaxiGo offers comfortable inter-city rides at competitive prices. Enjoy a hassle-free travel experience with our well-maintained vehicles and courteous drivers."
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
