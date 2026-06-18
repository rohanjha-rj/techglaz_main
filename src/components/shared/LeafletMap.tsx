"use client";

import React, { useEffect, useRef } from "react";
// Import leaflet styles
import "leaflet/dist/leaflet.css";

export default function LeafletMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (typeof window === "undefined" || !container) return;

    // Load leaflet dynamically to prevent SSR issue
    import("leaflet").then((L) => {
      // Default coordinates (e.g. Pune, India)
      const lat = parseFloat(process.env.NEXT_PUBLIC_INSTITUTE_LAT || "18.5204");
      const lng = parseFloat(process.env.NEXT_PUBLIC_INSTITUTE_LNG || "73.8567");
      const zoom = 14;

      // Clean up previous map instance if any
      if (mapRef.current) {
        mapRef.current.remove();
      }

      // Initialize map
      const map = L.map(container).setView([lat, lng], zoom);
      mapRef.current = map;

      // Add OpenStreetMap tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add marker
      const marker = L.marker([lat, lng]).addTo(map);
      marker.bindPopup("<b>Techglaz Labs Private Limited</b><br>Engineering Excellence Center").openPopup();
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-full rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md min-h-[300px]"
    />
  );
}
