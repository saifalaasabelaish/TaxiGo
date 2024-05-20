import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import placeholder from '../../assets/placeholder.png';
import "./MapWithCo.css";

const customIcon = new L.Icon({
  iconUrl: placeholder,
  iconSize: [38, 38]
});

const MapWithCo = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await fetch('http://localhost:3000/positions'); // Replace with your actual backend endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPositions(data);
      } catch (error) {
        console.error('Error fetching positions:', error);
      }
    };

    fetchPositions();

    const intervalId = setInterval(fetchPositions, 5000); // Fetch new data every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <MapContainer center={[32.22115149325139, 35.26074000763494]} zoom={13} scrollWheelZoom={false} className="leaflet-container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map((position, index) => (
        <Marker key={index} position={[position.latitude, position.longitude]} icon={customIcon}>
          <Popup>Timestamp: {new Date(position.timestamp).toLocaleString()}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapWithCo;
