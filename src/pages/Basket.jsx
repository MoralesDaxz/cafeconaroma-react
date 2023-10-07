import { React, useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { SectionProductBasket } from '../components/sectionProductBasket/SectionProductBasket';
import { SectionDelivery } from '../components/sectionDelivery/SectionDelivery';
import { Button } from '../components/button/Button';
import { SectionBasket } from '../components/sectionBasket/SectionBasket';
import { ContextLocal } from "../context/ContextLocal";

export const Basket = () => {
  const {   infLocalContext, setinfLocalContext,
            totalContext, settotalContext,
            ivaContext, setivaContext,
            reduceContext, setreduceContext,
            priceDelivery, setpriceDelivery } = useContext(ContextLocal);

  return (
    <>
      <div className='bg-[#FFFFFF] min-h-[100vh] flex flex-col items-center px-10 pb-10 pt-[7rem]'>{/* 535px */}
        <h2 className=' mb-6 font-medium text-2xl text-[#2A5B45]'>Cesta({reduceContext.cantidad})</h2>
        <div className='w-full  flex flex-row gap-6 '>
          <div className='w-[65%] px-2'>
            <div className='flex flex-col gap-6'>
              <h3 className=' font-semibold text-lg'>Productos</h3>
              <SectionProductBasket />
            </div>
            <SectionDelivery />
          </div>
          <div className=''>
            <div className='bg-[#F7F5F3] w-[30%] p-6 fixed z-60 '>
            <SectionBasket precio={reduceContext.precio} totalyDelivery={totalContext} envio={priceDelivery} />
            <div className='flex flex-row gap-7 mt-4'>
              <Link to={'/Check'}> <Button style={'bg-[#2A5B45] w-[129px] h-[40px] flex flex-col justify-center items-center rounded text-[white] font-semibold text-sm'} text={'Ir a checkout'} /></Link> 
              <Link to={'/Store'}> <Button style={'bg-[transparent] w-[129px] h-[40px] flex flex-col justify-center items-center rounded text-[#2A5B45] font-semibold text-sm'} text={'Seguir comprando'} /></Link>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

