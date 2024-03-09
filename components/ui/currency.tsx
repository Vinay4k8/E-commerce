"use client";

import React, { useEffect, useState } from 'react'

const formatter=new Intl.NumberFormat("en-US",{
    style:"currency",
    currency:"INR"
})


interface CurrencyProps{
    value: number
}

const Currency:React.FC<CurrencyProps> = ({value}) => {


    const [isMounted,setIsMounted]=useState(false)

    useEffect(()=>{setIsMounted(true)},[])

    if(!isMounted) return null ;

  return (
    <div className='font-semibold'>
        {formatter.format(value)}
    </div>
  )
}

export default Currency