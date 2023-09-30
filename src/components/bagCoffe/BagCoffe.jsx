import { React, useContext } from 'react'
import { Button } from '../button/Button'
import { ContextCoffe } from '../../context/ContextCoffeProduct.jsx'
export const BagCoffee = ({ units = 8 }) => {
  const { products, setProducts } = useContext(ContextCoffe);

  return (
    <div className='flex flex-row justify-center gap-6 flex-wrap'>{products?.map((item, indice) => {
      if (indice < units) {

        if (item.available) {
          return (
            <div key={indice} className='border-solid border border-[#E3DED7] rounded-lg p-6 flex flex-col justify-center items-center gap-6 group/bagCoffee hover:bg-[#E3DED7]'>
              <img src={item.img_url} />
              <p className='text-black font-semibold'>{item.brand}</p>
              <p className='text-black'>{item.price},00 €</p>
              <Button available={item.available} id={item._id} name={item.brand} img={item.img_url} price={item.price} style={' p-2 rounded font-semibold text-sm text-white cursor-pointer bg-[#2a5b45b3] group-hover/bagCoffee:bg-[#2A5B45]'} text={'Añadir'} />
            </div>
          )
        } else {
          return (
            <div key={indice} className='cursor-not-allowed opacity-80 border-solid border border-[#E3DED7] rounded-lg p-6 flex flex-col justify-center items-center gap-6  hover:bg-[#6a111133]'>
              <img src={item.img_url} />
              <p className='text-black font-semibold'>{item.brand}</p>
              <p className='text-black'>{item.price},00 €</p>
              <Button id={item._id} style={' p-2 rounded font-semibold text-sm text-white  bg-[#DD2654] '} text={'Agotado'} />
            </div>
          )
        }
      }
    })}</div>
  )
}

