import React, { useState } from 'react';
import './TaxiFareRequestForm.css'; 

function TaxiFareRequestForm() {
  const [useGPS, setUseGPS] = useState(false);
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);
  const [additionalPreferences, setAdditionalPreferences] = useState('');

  const handleGPSChange = (event) => {
    setUseGPS(event.target.checked);
    if (event.target.checked) {
    
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPickupLocation(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      setPickupLocation('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { pickupLocation, destination, passengerCount, additionalPreferences });
    
  };

  return (
    <div className="form-container">
      <h2>Request Taxi Fare</h2>
      <form onSubmit={handleSubmit} className="taxi-fare-form">
        <label>  
          Use GPS to determine pickup location
          <input
            type="checkbox"
            checked={useGPS}
            onChange={handleGPSChange}
          />
        </label>
        {!useGPS && (
          <label>
            Pickup Location:
            <input
              type="text"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              required
            />
          </label>
        )}
        <label>
          Destination:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </label>
        <label>
          Passenger Count:
          <input
            type="number"
            value={passengerCount}
            onChange={(e) => setPassengerCount(parseInt(e.target.value))}
            min="1"
            max="10"
          />
        </label>
        <label>
          Additional Preferences:
          <textarea
            value={additionalPreferences}
            onChange={(e) => setAdditionalPreferences(e.target.value)}
          />
        </label>
        <button type="submit">Request Taxi Fare</button>
      </form>
    </div>
  );
}

export default TaxiFareRequestForm;
