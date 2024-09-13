import React, { useEffect, useLayoutEffect } from 'react'
import FormLog from '../components/FormLog'
import { usePostContext } from '../store/Store'

export default function LogIn() {

  const {setIsLogIn} = usePostContext()
  useLayoutEffect(()=>{
    sessionStorage.clear()
    setIsLogIn(false)
    // window.location.reload()
  },[setIsLogIn])
  return (
    <>
      
      <FormLog />
    </>
  )
}
