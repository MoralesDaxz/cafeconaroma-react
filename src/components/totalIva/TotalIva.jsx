import {React,useContext} from 'react'
import { ContextLocal } from '../../context/ContextLocal';

export const TotalIva = ({precio,envio}) => {
  const {ivaContext} = useContext(ContextLocal);
    const iva = ((precio + envio ) * 21) / 100
  return (
    <div className='flex flex-row justify-end text-[#515051] font-normal text-xs'>
        <p className='w-fit '>Incluye {ivaContext} € de IVA</p>
    </div>
  )
}

