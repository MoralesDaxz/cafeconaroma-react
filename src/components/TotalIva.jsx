import {useContext} from 'react'
import { ContextLocal } from '../context/ContextLocal';

export const TotalIva = ({iva}) => {
  const {ivaContext} = useContext(ContextLocal);

  
  return (
    <div className='flex flex-row justify-end text-[#515051] font-normal text-xs'>
        <p className='w-fit '>Incluye {iva?iva:ivaContext} € de IVA</p>
    </div>
  )
}

