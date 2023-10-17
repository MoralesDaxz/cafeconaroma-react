import { React, useContext, useEffect,useState } from 'react'
export const  SubTotal = ({precio, precioSuccess=false,envio}) => {
const saldo = Number.parseFloat(precioSuccess) 

  return (
    <div className='flex flex-row justify-between w-full'>
      <p className=' font-normal text-sm'>SUBTOTAL</p>
      <p className='font-semibold text-sm'>{precioSuccess?Number.parseFloat(saldo-envio).toFixed(2).replace('.',','):Number.parseFloat(precio).toFixed(2).replace('.',',')} €</p>
    </div>
  )
}

