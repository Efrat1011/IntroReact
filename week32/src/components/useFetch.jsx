import React, { useEffect, useState } from 'react'

export function useFetch(url) {
    let [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(aqparat => 
            {
                setData(aqparat)
                setIsLoading(false)
            })
        .catch(err => 
            {
                console.error(err)
                setIsLoading(false)
            })
    },[url])
  return {data,isLoading}
}
