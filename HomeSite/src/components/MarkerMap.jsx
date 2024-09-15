import React, { useState } from 'react'
import { Marker, useMapEvent } from 'react-leaflet'
import L from 'leaflet'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
export default function MarkerMap({ center }) {
    const[locationList , setLocationList] = useState([])
    const markerIcon = L.icon({
        iconUrl: iconUrl,
        iconSize: [25, 41],
    })
    useMapEvent('click' , (event)=>{
        const latlng = event.latlng
        setLocationList((prev) => [...prev , latlng])
    })
    console.log(locationList);
    
    return (
        <>
            {
                locationList.map((location , index) => (
                    <Marker key={index} position={location} icon={markerIcon} />
                    ))
            }

        </>
    )
}
