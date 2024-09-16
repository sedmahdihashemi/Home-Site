import React, { useState } from 'react'
import { Marker } from 'react-leaflet'
import L from 'leaflet'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import { usePostContext } from '../store/Store'
export default function MarkerMapSave({locationMap}) {
    const { listMap, setListMap } = usePostContext()
    const markerIcon = L.icon({
        iconUrl: iconUrl,
        iconSize: [25, 41],
    })
    console.log(locationMap);
    const[arr , setArr] = useState([locationMap])

    // console.log(arr);
    
  return (
    <>
    {
        locationMap?.map((val,index)=>{
            console.log(val);
            return <Marker key={index}  position={[val.lat ,val.lng]} icon={markerIcon} />
        })
    }
    
    </>
  )
}

// [35.6943887761439,51.359896355949076]
// http://localhost:8000/posts?_page=3&_per_page=3