import React, { useEffect, useState } from 'react'
import { Marker, useMapEvent } from 'react-leaflet'
import L from 'leaflet'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import { usePostContext } from '../store/Store'
export default function MarkerMap({ center, locationList, setLocationList }) {

    const { listMap, setListMap } = usePostContext()
    const markerIcon = L.icon({
        iconUrl: iconUrl,
        iconSize: [25, 41],
    })
    
        useMapEvent('click', (event) => {
        
            const latlng = event.latlng
            setLocationList((prev) => [...prev, latlng])
           
                setListMap((prev) => [...prev, latlng])
            
    })

    
   






    return (
        <>
            {

                locationList.map((location, index) => (
                    <Marker key={index} position={location} icon={markerIcon} />
                ))


            }

        </>
    )
}
