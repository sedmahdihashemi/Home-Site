import React from 'react'

export default async function useApi() {
    
  const fetching = await fetch('http://localhost:8000/posts')
  const res = await fetching.json()
  return res
}

export async function useOneApi(id){
  const fetching = await fetch(`http://localhost:8000/posts/${id}`)
  const res = await fetching.json()
  return res
}
