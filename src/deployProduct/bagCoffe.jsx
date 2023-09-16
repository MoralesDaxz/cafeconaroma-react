import {React,useState,useEffect } from 'react'

const BagCoffee = ({products,units}) => {
  return (
    <div className='contentBags'>{products?.map((item,indice) =>
      {
        if (indice<units) {
          
          return(
              <div key={item.id} className='contentCoffee'>
                  <img src={item.img_url}/>
                  <p className='font-semibold'>{item.brand}</p>
                  <p>{item.price},00 €</p>
                  <button className='btnBagAdd'>Añadir</button>
              </div>
          )
        }
    })}</div>
  )
}

export {BagCoffee}