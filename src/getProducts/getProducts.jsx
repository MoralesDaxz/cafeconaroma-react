import {React,useState,useEffect } from 'react'
import { getApiCoffee } from '../apiCoffe/getApiCoffee.js'
import { BagCoffee } from '../deployProduct/bagCoffe.jsx'

const apiCoffe="https://cafe-de-altura.vercel.app/api/products"

const GetProducts= () => {
  const [products, setProducts] = useState([])
  const [unitBags, setUnitBags] = useState(4)

    useEffect(() => {
        getApiCoffee(apiCoffe).then(param => { setProducts(param.products) })
    }, []);


  return (
    <>
        <div className='bg-[white] h-[603px] flex flex-col justify-center'>
       <BagCoffee products={products} units={unitBags}/>
        </div>
   
    
    </>
  )
}

export {GetProducts}