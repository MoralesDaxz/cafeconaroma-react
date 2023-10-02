import { React, useState, useContext, useEffect } from 'react'
import iconCar from '../../assets/Car.svg'
import { ContextLocal } from '../../context/ContextLocal'
import { AddOrSubs } from '../addOrSubs/AddOrSubs';
import { Product } from '../product/Product';
import { Link } from 'react-router-dom';

export const CarShop = () => {
  const { infLocalContext, setinfLocalContext } = useContext(ContextLocal);   
  const [showModal, setshowModal] = useState('hidden')
  const infoLocalStorage = JSON.parse(localStorage.getItem("buys")) || [];


  const checkClass = () => {
    if (showModal === 'hidden') {
      setshowModal('carrito')
    } else { setshowModal('hidden') }
  }

  return (
    <>
      <div onClick={() => checkClass(event)} className="cursor-pointer ">
        <img src={iconCar} />
      </div>
      <div className={showModal}>
       
       <Link to={'/Cesta'}><h2 className='font-normal text-base text-black text-center'>Pagar compra... </h2></Link> 
        <div className='text-black flex flex-col gap-3'>
          {
            infoLocalStorage.map((item, indice) => {
              
              if (item.cantidad >0) {
                
                return (<Product
                line={<div  className='w-[98%] h-[1px] bg-[#E3DED7] self-center'></div>}
                key={item.id}
                id={item.id}
                imagen={item.imagen}
                cantidad={item.cantidad}
                precio={item.precio}
                nombre={item.nombre}
                signos={
                  <AddOrSubs
                  cantidad={item.cantidad}
                  id={item.id}
                  nombre={item.nombre}
                  precio={item.precio}
                  imagen={item.imagen} />} /> 
                
                  )
                  
              }
              
            })
            
          }
           
        </div>
      </div>
    </>


  )
}
