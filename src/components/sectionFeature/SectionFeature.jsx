import React from 'react'
import arrowBlack from '../../assets/flecha-derecha-negra.svg'
import imgFeature from '../../assets/feature-imagen.png'
import { ArrowRigth } from '../arrowRigth/ArrowRigth'
export const SectionFeature = () => {
  return (
    <>
    <section className='bg-[#F7F5F3] h-[480px] flex flex-row justify-center items-center'>
<div className='w-[1200px] flex flex-row justify-between items-center '>
    <div className='flex flex-col items-start gap-4 w-[457px]'>
        <h2 className=' font-medium text-2xl text-[#2A5B45]'>Pruébalo en nuestro coffee shop</h2>
        <p className=' font-normal text-sm text-[#111827]'>Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento</p>
        <ArrowRigth color={'black'} text={'Cómo llegar'}/>
    </div>
    <div>
        <img className='shadowElement ' src={imgFeature}/>
    </div>

</div>
        
    </section>
    
    </>
    
  )
}
