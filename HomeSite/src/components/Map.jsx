import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import useApi, { useOneApi } from '../hook/useApi';
import { useParams } from 'react-router';
import { FaLocationDot } from "react-icons/fa6";
import MarkerMap from './MarkerMap';
import { usePostContext } from '../store/Store';
import MarkerMapSave from './MarkerMapSave';

export default function Map({ locationMap , id }) {
//   const [center, setCenter] = useState({ lat, lng });
const param = useParams()
const [center, setCenter] = useState({ "lat":35.6919,"lng":51.3880});
const mapRef = useRef()
const {listMap , setListMap} = usePostContext()
// console.log(listMap.length);

const[locationList , setLocationList] = useState([])
const[isClick , setIsClick] = useState(1)
// console.log(locationList);



  

  return (
    <div  className='col-12 overflow-hidden bg-primary' style={{ height: '350px' }}>
      <MapContainer  center={center} className='col-12 h-100' scrollWheelZoom={false} zoom={12} mapRef={mapRef}>
        <TileLayer
          url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
          attribution={'&copy; <a href="https://www.maptiler.com/">maptiler</a> contributors'}
        />
        {
            param.id == undefined   ?
            <MarkerMap  center={center} locationList={locationList} setLocationList={setLocationList}  />
            :
            <MarkerMapSave locationMap={locationMap} />

        }
      </MapContainer>
    </div>
  );
}