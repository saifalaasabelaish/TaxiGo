// src/App.js
import React, { useState, useEffect } from 'react';
import "./Drivers.css";

function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [driverDetails, setDriverDetails] = useState(null);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      const response = await fetch('http://localhost:5001/driver/d');
      if (!response.ok) {
        throw new Error('Failed to fetch drivers');
      }
      const data = await response.json();
      setDrivers(data);
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };

  const showDriverDetails = (driver) => {
    setDriverDetails(driver);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Drivers List</h2>
        {drivers.map((driver) => (
          <div key={driver._id} onClick={() => showDriverDetails(driver)} className="driver-item">
            <p><strong>Name:</strong> {driver.firstName} {driver.lastName}</p>
          </div>
        ))}
      </div>
      <div className="content">
        {driverDetails ? (
          <div className="driver-details">
            <h2>Driver Details</h2>
            <p><strong>Name:</strong> {driverDetails.firstName} {driverDetails.lastName}</p>
            <p><strong>Email:</strong> {driverDetails.email}</p>
            <p><strong>Mobile Number:</strong> {driverDetails.mobileNumber}</p>
            <p><strong>Date of Birth:</strong> {driverDetails.dateOfBirth}</p>
            <p><strong>Gender:</strong> {driverDetails.gender}</p>
            <p><strong>Location:</strong> {driverDetails.location}</p>
            <p><strong>Car Brand:</strong> {driverDetails.carBrand}</p>
            <p><strong>Date of Contract:</strong> {driverDetails.createdAt}</p>
          </div>
        ) : (
          <p>Select a driver to see details</p>
        )}
      </div>
    </div>
  );
}

export default Drivers;
