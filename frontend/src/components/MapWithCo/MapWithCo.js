import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import placeholder from '../../assets/placeholder.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MapWithCo.css';
import io from 'socket.io-client';

const customIcon = new L.Icon({
  iconUrl: placeholder,
  iconSize: [38, 38],
});

const MapWithCo = () => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const socket = io('http://localhost:5001');

    socket.on('coordinates', (data) => {
      console.log('Received coordinates:', data);

      // Ensure the data has valid latitude and longitude
      const validPosition = {
        latitude: parseFloat(data.latitude),
        longitude: parseFloat(data.longitude),
        timestamp: data.timestamp,
      };

      if (!isNaN(validPosition.latitude) && !isNaN(validPosition.longitude)) {
        setPosition(validPosition);
      } else {
        console.error('Invalid position data:', validPosition);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="container-fluid p-0 map-container">
      <MapContainer
        center={position ? [position.latitude, position.longitude] : [32.22115149325139, 35.26074000763494]}
        zoom={13}
        scrollWheelZoom={false}
        className="leaflet-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {position && (
          <Marker position={[position.latitude, position.longitude]} icon={customIcon}>
            <Popup>Timestamp: {new Date(position.timestamp).toLocaleString()}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapWithCo;
