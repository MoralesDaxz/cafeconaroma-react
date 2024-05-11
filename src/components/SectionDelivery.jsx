import {useContext} from 'react'
import { ContextLocal } from '../context/ContextLocal';

export const SectionDelivery = () => {
  const {setPriceDelivery,priceDelivery} = useContext(ContextLocal);
  return (
    <>
      <div className='flex flex-col gap-6'>
        <h3 className=' font-semibold text-lg'>Seleccionar envío</h3>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-row gap-4 items-center'>
            <input className=' h-4 w-4 accent-[#2A5B45]' defaultChecked={priceDelivery <1?true:false} onClick={()=>{setPriceDelivery(0)}} type='radio' name='envio' />
            <div className='flex flex-col'>
              <p className='text-sm font-semibold'>Envío 5-7 días</p>
              <p className='text-sm'>Opción estándar sin seguimiento</p>
            </div>
          </div>
          <h3 className=' font-semibold text-lg'>Gratis</h3>
        </div>
        <div className='w-[98%] h-[1px] bg-[#E3DED7] self-center'></div>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-row gap-4 items-center'>
            <input className='h-4 w-4 accent-[#2A5B45]' defaultChecked={priceDelivery >1?true:false} onClick={()=>{setPriceDelivery(9)}}  type='radio' name='envio' />
            <div className='flex flex-col'>
              <p className='text-sm font-semibold'>Envío urgente 24h</p>
              <p className='text-sm'>Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).</p>
            </div>
          </div>

          <h3 className=' font-semibold text-lg'>9,00 €</h3>
        </div>
      </div>
    </>
  )
}

