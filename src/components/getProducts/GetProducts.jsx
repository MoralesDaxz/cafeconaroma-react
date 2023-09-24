import { React, useState, useEffect } from 'react'
import { getApiCoffee } from '../apiCoffe/getApiCoffee.js'
import { BagCoffee } from '../bagCoffe/BagCoffe.jsx'
import arrowWhite from '../../assets/flecha-derecha-negra.svg'
const apiCoffe = "https://cafe-de-altura.vercel.app/api/products"

const GetProducts = () => {
  const [products, setProducts] = useState([])
  const [unitBags, setUnitBags] = useState(4)

  console.log(products);
  useEffect(() => {
    getApiCoffee(apiCoffe).then(param => { setProducts(param.products) })
  }, []);


  return (
    <>
      <div className='bg-[white] h-[603px] flex flex-col justify-center items-center gap-10'>
        <h2 className=' font-medium text-2xl text-[#2A5B45] '>Novedades</h2>
        <BagCoffee products={products} units={unitBags} />
        <div className='flex flex-row gap-4 cursor-pointer'>
          <a className='  font-semibold text-sm text-black underline '>Resolvemos tus dudas</a>
          <img src={arrowWhite} alt="arrow" />
        </div>
      </div>


    </>
  )
}

export { GetProducts }