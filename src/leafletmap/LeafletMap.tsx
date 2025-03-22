import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import"./LeafletMap.scss"
//const position = [40.7128, -74.006]; // Latitude, Longitude
const position = [19.539510622798623, 74.5554001543264]; // Latitude, Longitude

const LeafletMap = () => {
  return (
    <MapContainer className="leaflet-map-section" center={position} zoom={13} >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>शिव शक्ती संकुल</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;