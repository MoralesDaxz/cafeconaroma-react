import React from 'react'

export const SubTotal = () => {
  const total = '18,00'
  return (
    <div className='flex flex-row justify-between w-full'>
        <p className=' font-normal text-sm'>SUBTOTAL</p>
        <p className='font-semibold text-sm'>{total}€</p>
    </div>
  )
}

