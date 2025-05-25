"use client"
import Map, { Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

function GoogleMap() {

  return (
    <Map
      initialViewState={{
        longitude: 91.84949768465802,
        latitude: 22.336722947625063,
        zoom: 10
      }}
      style={{ maxWidth: 320, height: 200, borderRadius: 10, margin: "8px auto", border: "1px solid var(--color-base-300)" }}
      mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_map_tiler_api_key}`}
      attributionControl={false}
    >
      <Marker longitude={91.84949768465802} latitude={22.336722947625063} anchor="bottom">
        📍
      </Marker>
    </Map>
  );
}

export default GoogleMap