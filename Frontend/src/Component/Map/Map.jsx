import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LocationFetcher = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, []);

  return (
    <div>
      {location.lat && location.lon ? (
        <>
          <p>Latitude: {location.lat}, Longitude: {location.lon}</p>
          <MapContainer
            center={[location.lat, location.lon]}
            zoom={13}
            style={{ width: '100%', height: '400px' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.lat, location.lon]}>
              <Popup>Current Location</Popup>
            </Marker>
          </MapContainer>
        </>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default LocationFetcher;