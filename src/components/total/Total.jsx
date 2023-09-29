import React from 'react'

export const Total = () => {
    const total = '18,00'
  return (
    <div className='flex flex-row justify-between w-full'>
        <p className='font-semibold text-sm'>TOTAL</p>
        <p className='font-semibold text-sm'>{total}€</p>
    </div>
  )
}

