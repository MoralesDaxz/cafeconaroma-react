import { React, useContext, useEffect,useState } from 'react'
export const SubTotal = ({precio}) => {


  return (
    <div className='flex flex-row justify-between w-full'>
      <p className=' font-normal text-sm'>SUBTOTAL</p>
      <p className='font-semibold text-sm'>{Number.parseFloat(precio).toFixed(2).replace('.',',')}€</p>
    </div>
  )
}

