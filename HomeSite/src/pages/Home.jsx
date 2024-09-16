import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { usePostContext } from '../store/Store';
import CartHome from '../components/CartHome';
import useApi from '../hook/useApi';
import { json } from 'react-router';

export default function Home() {
  const { isLogIn } = usePostContext();
  console.log(isLogIn);
const [dataApi , setDataApi] = useState([])
const[start , setStart] = useState(0)
const[end , setEnd] = useState(3)
  useEffect(()=>{
    useApi(start , end).then(res =>
    setDataApi(res))
  },[start , end])
  console.log(dataApi);
  const paginationHandlre = (what)=>{
    console.log(what.target.innerHTML);
    if(what.target.innerHTML === '1'){
      setStart(0)
      setEnd(3)
      

    }
    if(what.target.innerHTML === '2'){
      setStart(3)
      setEnd(6)
    }
    if(what.target.innerHTML === '3'){
      setStart(6)
      setEnd(9)
    }
    

  }
  

  return (
    <div className='col-12 d-flex flex-wrap justify-content-around mt-5'>

      {
        dataApi?.map((val , index)=>{
          return <CartHome key={index} {...val} />
        })
      }
      
     

      <div className='col-12  d-flex justify-content-center pt-5'>
        <nav aria-label="Page navigation example ">
          <ul className="pagination justify-content-end">

            <li className="page-item"><a onClick={(e)=>paginationHandlre(e)} className="page-link">1</a></li>
            <li className="page-item"><a onClick={(e)=>paginationHandlre(e)} className="page-link">2</a></li>
            <li className="page-item"><a onClick={(e)=>paginationHandlre(e)} className="page-link">3</a></li>

          </ul>
        </nav>
      </div>

    </div>
  )
}
