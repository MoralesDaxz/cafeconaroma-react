import React from 'react'
import { SubTotal } from '../subTotal/SubTotal'
import { Total } from '../total/Total'
import { TotalIva } from '../totalIva/TotalIva'
import { TotalDelivery } from '../totalDelivery/TotalEnvio'

export const SectionBasket = () => {
  return (
    <>
      <div className=' flex flex-col gap-4'>
        <h3 className=' font-semibold text-lg'>Total del carrito</h3>
      <div className='w-[92%] h-[1px] bg-[#E3DED7] self-center'></div>
        <SubTotal/>
        <TotalDelivery/>
      <div className='w-[92%] h-[1px] bg-[#E3DED7] self-center'></div>
        <Total/>
        <TotalIva/>
       
      </div>
    </>
  )
}

