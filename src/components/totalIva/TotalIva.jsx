import React from 'react'

export const TotalIva = ({precio,envio}) => {

    const iva = ((precio + envio ) * 21) / 100
  return (
    <div className='flex flex-row justify-end text-[#515051] font-normal text-xs'>
        <p className='w-fit '>Incluye {iva} € de IVA</p>
    </div>
  )
}

