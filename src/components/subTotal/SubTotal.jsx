import { React, useContext, useEffect,useState } from 'react'

import {  getQuantityFunction } from '../../utils/getQuantity';

export const SubTotal = ({precio}) => {


 /* const sum = infLocalContext.reduce((accumulator, currentValue) => {
 accumulator.precio += currentValue.precio
 accumulator.cantidad += currentValue.cantidad
 return accumulator
  }, {
    cantidad: 0,
    precio: 0
  });  */

  return (
    <div className='flex flex-row justify-between w-full'>
      <p className=' font-normal text-sm'>SUBTOTAL</p>
      <p className='font-semibold text-sm'>{Number.parseFloat(precio).toFixed(2).replace('.',',')}€</p>
    </div>
  )
}

