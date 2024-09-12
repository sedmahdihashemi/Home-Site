import React from 'react'
import Header from '../components/Header'
import { usePostContext } from '../store/Store';

export default function Home() {
  const {isLogIn} = usePostContext();
  console.log(isLogIn);
  
  return (
    <div>
        
    </div>
  )
}
