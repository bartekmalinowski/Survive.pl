// components/Map.tsx
"use client"; // Oznacz komponent jako Client Component

import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  // Współrzędne geograficzne środka Polski
  const centerOfPoland: [number, number] = [52.0692, 19.4806];

  return (
    <div className="map-container" style={{
      width: '1090px',
      height: '390px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      overflow: 'hidden',
      margin: '0 auto',
      display: 'block',
    }}>
      <MapContainer
        center={centerOfPoland} // Ustaw centrum mapy na środku Polski
        zoom={6} // Dostosuj poziom zoomu
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Usunięto komponent LocationMarker, aby nie wyświetlać markera */}
      </MapContainer>
    </div>
  );
};

export default Map;