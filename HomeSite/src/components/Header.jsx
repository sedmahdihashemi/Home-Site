import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Link} from 'react-router-dom'
import { usePostContext } from '../store/Store';

export default function Header() {

    const {isLogIn} = usePostContext();
console.log(isLogIn);

    return (
        
            <nav className="navbar navbar-expand-lg  bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <span className="navbar-brand">Navbar</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">

                                <Link className="nav-link" to={"/postad"}>Post ad</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Register (log in) to post an ad</a>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <Link to='/signup'>
                                <button className="btn btn-outline-success">Sign Up</button>
                            </Link>
                            <Link to='/login'>
                                <button className="btn btn-outline-primary ms-1">Log In</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

        
    )
}
