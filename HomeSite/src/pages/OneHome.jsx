import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useApi, { useOneApi } from '../hook/useApi';
import Map from '../components/Map';

export default function OneHome() {
    const param = useParams()
    console.log(param.id);
    const [oneData, setOneData] = useState([])
    
    useEffect(() => {
        useOneApi(param.id).then(res => setOneData(res))

    }, [])
    // console.log(typeof oneData.lat);


    return (
      <div className='col-8 mt-4 d-flex justify-content-center'>
          <div class="card col-5 overflow-hidden bg-success " >
            <Map {...oneData} />
                <div class="card-body">
                    <h5 class="card-title">Card title : {oneData.title}</h5>
                    <p class="card-text">description : {oneData.desc}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">address : {oneData.address} </li>
                    <li class="list-group-item">phone : {oneData.phone} </li>
                    
                </ul>
               
        </div>

      </div>
    )
}
