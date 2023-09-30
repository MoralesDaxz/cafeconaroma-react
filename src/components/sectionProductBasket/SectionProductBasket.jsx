import React from 'react'
import { Product } from '../product/Product'
import { AddOrSubs } from '../addOrSubs/AddOrSubs'
export const SectionProductBasket = () => {
  //section envia a PRODUCT componente con signos si queremos renderizar los signos
  return (
    <>
      <div className='flex flex-col gap-6 mb-6'>
        <Product signos={<AddOrSubs/>}/>
        
        <div className='w-[98%] h-[1px] bg-[#E3DED7] self-center'></div>
        <Product signos={<AddOrSubs/>}/>
      </div >

    </>
  )
}

