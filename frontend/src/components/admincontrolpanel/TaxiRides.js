// src/App.js
import React, { useState, useEffect } from 'react';
import "./Drivers.css";

function TaxiRides() {
  const [drivers, setDrivers] = useState([]);
  const [driverDetails, setDriverDetails] = useState(null);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      const response = await fetch('http://localhost:5001/history');
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
    <div className="containerH">
      <div className="sidebarH">
        <h2>Order History</h2>
        {drivers.map((driver) => (
          <div key={driver._id} onClick={() => showDriverDetails(driver)} className="driver-item">
            <p>pickup Location: {driver.pickupLocation}</p>
          </div>
        ))}
      </div>
      <div className="contentH">
        {driverDetails ? (
          <div className="driver-details">
            <h2>Driver Details</h2>
            <p><strong>createdAt:</strong> {driverDetails.createdAt}</p>
            <p><strong>Location:</strong> {driverDetails.pickupLocation}</p>
            <p><strong>passengerCount:</strong> {driverDetails.passengerCount}</p>
            <p><strong>additionalPreferences:</strong> {driverDetails.additionalPreferences}</p>
          </div>
        ) : (
          <p>Select a driver to see details</p>
        )}
      </div>
    </div>
  );
}

export default TaxiRides;
