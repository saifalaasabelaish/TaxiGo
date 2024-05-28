import React, { useState, useEffect } from 'react';
import "./Drivers.css";

function TaxiRides() {
  const [history, setHistories] = useState([]);
  const [historyDetails, setHistoryDetails] = useState(null);

  useEffect(() => {
    fetchHistories();
  }, []);

  const fetchHistories = async () => {
    try {
      const response = await fetch('http://localhost:5001/history');
      if (!response.ok) {
        throw new Error('Failed to fetch drivers');
      }
      const data = await response.json();
      setHistories(data);
    } catch (error) {
      console.error('Error fetching histories:', error);
    }
  };

  const showHistoryDetails = (history) => {
    setHistoryDetails(history);
  };

  return (
    <div className="containerH">
      <div className="sidebarH">
        <h2>Order History</h2>
        {history.map((history) => (
          <div key={history._id} onClick={() => showHistoryDetails(history)} className="driver-item">
            <p>pickup Location: {history.pickupLocation}</p>
          </div>
        ))}
      </div>
      <div className="contentH">
        {historyDetails ? (
          <div className="driver-details">
            <h2>Driver Details</h2>
            <p><strong>createdAt:</strong> {historyDetails.createdAt}</p>
            <p><strong>Location:</strong> {historyDetails.pickupLocation}</p>
            <p><strong>destination:</strong> {historyDetails.destination}</p>
            <p><strong>passengerCount:</strong> {historyDetails.passengerCount}</p>
            <p><strong>additionalPreferences:</strong> {historyDetails.additionalPreferences}</p>
          </div>
        ) : (
          <p>Select a driver to see details</p>
        )}
      </div>
    </div>
  );
}

export default TaxiRides;
