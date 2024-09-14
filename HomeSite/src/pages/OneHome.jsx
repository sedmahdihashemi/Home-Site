import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useApi, { useOneApi } from '../hook/useApi';

export default function OneHome() {
    const param = useParams()
    console.log(param.id);
    const[oneData , setOneData] = useState([])
    useEffect(()=>{
        useOneApi(param.id).then(res=> setOneData(res))

    },[])
    console.log(oneData);
    
    
  return (
    <div>{oneData.address}</div>
  )
}
