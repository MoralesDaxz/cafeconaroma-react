import React from 'react'
import { CopyRight } from '../components/copyRight/CopyRight'
import { Link } from "react-router-dom";
import { SectionProductBasket } from '../components/sectionProductBasket/SectionProductBasket';
import { SectionDelivery } from '../components/sectionDelivery/SectionDelivery';
import { Button } from '../components/button/Button';
import { SectionBasket } from '../components/sectionBasket/SectionBasket';
export const Basket = () => {
  const prod = 2
  return (
    <>
      <div className='bg-[#F7F5F3] flex flex-col items-center p-10'>
        <h2 className=' mb-6 font-medium text-2xl text-[#2A5B45]'>Cesta({prod})</h2>
        <div className='w-full  flex flex-row gap-6 '>
          <div className='w-[70%] px-2'>
            <div className='flex flex-col gap-6'>
              <h3 className=' font-semibold text-lg'>Productos</h3>
              <SectionProductBasket />
            </div>
            <SectionDelivery />
          </div>
          <div className='bg-[#F7F5F3] w-[30%] p-6'>
            <SectionBasket />
            <div className='flex flex-row gap-6 mt-4'>
              <Button style={'bg-[#2A5B45] w-[129px] h-[40px] flex flex-col justify-center items-center rounded text-[white] font-semibold text-sm'} text={'Ir a checkout'} />
              <Link> <Button style={'bg-[transparent] w-[129px] h-[40px] flex flex-col justify-center items-center rounded text-[#2A5B45] font-semibold text-sm'} text={'Seguir comprando'} /></Link>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    


    

    </>
  )
}

