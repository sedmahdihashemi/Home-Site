import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { usePostContext } from '../store/Store';
import CartHome from '../components/CartHome';
import useApi from '../hook/useApi';

export default function Home() {
  const { isLogIn } = usePostContext();
  console.log(isLogIn);
const [dataApi , setDataApi] = useState([])

  useEffect(()=>{
    useApi().then(res =>
    setDataApi(res))
    

  },[])
  console.log(dataApi);
  

  return (
    <div className='col-12 d-flex flex-wrap justify-content-around mt-5'>
      <CartHome />
      <CartHome />
      <CartHome />

      <div className='col-12  d-flex justify-content-center pt-5'>
        <nav aria-label="Page navigation example ">
          <ul className="pagination justify-content-end">

            <li className="page-item"><a className="page-link">1</a></li>
            <li className="page-item"><a className="page-link">2</a></li>
            <li className="page-item"><a className="page-link">3</a></li>

          </ul>
        </nav>
      </div>

    </div>
  )
}
