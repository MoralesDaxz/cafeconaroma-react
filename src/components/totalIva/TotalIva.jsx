import React from 'react'

export const TotalIva = () => {
    const iva = '3,78'
  return (
    <div className='flex flex-row justify-end text-[#515051] font-normal text-xs'>
        <p className='w-fit '>Incluye {iva}€ de IVA</p>
    </div>
  )
}

