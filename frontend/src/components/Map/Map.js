import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import placeholder from '../../assets/placeholder.png';
import "./Map.css"; // Ensure this path is correct

const customIcon = new L.Icon({
  iconUrl: placeholder,
  iconSize: [38, 38]
});

function LocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    locationfound(e) {
      console.log('Location found:', e.latlng); // Logging found location
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
    locationerror(e) {
      console.error('Location error:', e); // Logging location error
      alert('Location access denied.');
    },
  });

  useEffect(() => {
    map.locate({ setView: true, maxZoom: 16 });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const Map = () => {
  return (
    <MapContainer center={[32.22115149325139, 35.26074000763494]} zoom={13} scrollWheelZoom={false} className="leaflet-container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}

export default Map;
