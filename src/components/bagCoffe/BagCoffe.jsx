import { React, useState, useEffect } from 'react'
import { Button } from '../button/Button'
const BagCoffee = ({ products, units }) => {
  return (
    <div key={products._id} className='flex flex-row justify-center gap-6 flex-wrap'>{products?.map((item, indice) => {
      if (indice < units) {

        return (
          <div key={products._id} className='border-solid border border-[#E3DED7] rounded-lg p-6 flex flex-col justify-center items-center gap-6 group/bagCoffee hover:bg-[#f7f5f3]'>
            <img key={products._id} src={item.img_url} />
            <p key={products._id} className='text-black font-semibold'>{item.brand}</p>
            <p key={products._id} className='text-black'>{item.price},00 €</p>
            <Button key={products._id} style={' p-2 rounded font-semibold text-sm text-white cursor-pointer bg-[#2a5b45b3] group-hover/bagCoffee:bg-[#2A5B45]'} text={'Añadir'} />
          </div>
        )
      }
    })}</div>
  )
}

export { BagCoffee }