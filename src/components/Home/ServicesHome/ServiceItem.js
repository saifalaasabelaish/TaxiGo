import "./ServicesItem.css"
import React from 'react';

function ServiceItem({ icon, title, description }) {
  return (
    <div className="col-md-4 service-item text-center my-3">
      <span className="icon d-block mx-auto mb-3" >{icon}</span>
      <h3 className="mb-3">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceItem;
