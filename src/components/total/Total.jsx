import {React,useState,useEffect} from 'react'

export const Total = ({precio, envio, totalyDelivery}) => {
/* const [showTotal, setShowTotal]=useState(precio)
useEffect(()=>{setShowTotal(Number.parseFloat(precio+envio).toFixed(2).replace('.',','))}) */
  return (
    <div className='flex flex-row justify-between w-full'>
        <p className='font-semibold text-sm'>TOTAL</p>
        <p className='font-semibold text-sm'>{totalyDelivery} €</p>
        {/* <p className='font-semibold text-sm'>{precio !==0?Number.parseFloat(precio+envio).toFixed(2).replace('.',','):0} €</p> */}
    </div>
  )
}

