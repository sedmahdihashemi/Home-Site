import React from 'react'
import { Link } from 'react-router-dom';

export default function CartHome({id,address,title}) {
    // console.log(id);
    
    return (
        <>
            <div className="card col-4">
                <div className="card-body">
                    <h5 className="card-title">title : {title}</h5>
                    <p className="card-text">address : {address}</p>
                    <Link to={`/OneHome/${id}`} className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>

        </>
    )
}
