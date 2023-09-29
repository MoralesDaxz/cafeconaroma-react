import React from 'react'

export const TotalDelivery = () => {
    const total = 'GRATIS'
    return (
      <div className='flex flex-row justify-between w-full'>
          <p className=' font-normal text-sm'>ENVIO</p>
          <p className='font-semibold text-sm'>{total}</p>
      </div>
  )
}

