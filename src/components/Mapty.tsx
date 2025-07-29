
// import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type MaptyProps = {
  lat: number;
  lon: number;
};

export default function Mapty({ lat, lon }: MaptyProps) {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={[lat, lon]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
