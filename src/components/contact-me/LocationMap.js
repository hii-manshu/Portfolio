"use client";
import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
const center = {
  lat: 28.562805414893308,
  lng: 77.31489732236868,
};

const location = [
  {
    address: "Himanshu's",
    lat: Number(process.env.NEXT_PUBLIC_YOUR_LAT),
    lng: Number(process.env.NEXT_PUBLIC_YOUR_LNG),
  },
  {
    address: "Address 2",
    lat: 28.562805414893308,
    lng: 77.31489732236868,
  },
];

const Marker = ({ text }) => (
  <div className="pin">
    <Icon icon="ion:location" fontSize={30} color="#FF0000" />
    <p className="bg-white shadow-md text-lg text-semibold">{text}</p>
  </div>
);
function LocationMap() {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY }}
      defaultCenter={center}
      defaultZoom={10}
      style={{ height: "350px", width: "100%" }}
    >
      {/* ================ SHOW MULTIPLE LOCATIONS ON MAP ============== */}
      {location.map((loc, key) => (
        <Marker
          key={key}
          lat={Number(loc.lat)}
          lng={Number(loc.lng)}
          text={loc.address}
        />
      ))}
    </GoogleMapReact>
  );
}

export default LocationMap;
