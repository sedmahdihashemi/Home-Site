import React, { useEffect, useLayoutEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import useApi, { useOneApi } from '../hook/useApi';
import { useParams } from 'react-router';

export default function Map({ lat = 0 , lng = 0 , id }) {
//   const [center, setCenter] = useState({ lat, lng });
const param = useParams()
const [center, setCenter] = useState({ "lat":35.6919,"lng":51.3880});



  

  return (
    <div className='col-12 overflow-hidden' style={{ height: '350px' }}>
      <MapContainer center={center} className='col-12 h-100' scrollWheelZoom={false} zoom={12}>
        <TileLayer
          url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
          attribution={'&copy; <a href="https://www.maptiler.com/">maptiler</a> contributors'}
        />
      </MapContainer>
    </div>
  );
}