import { React, useState, useContext, useEffect } from 'react'
import iconCar from '../../assets/Car.svg'
import { ContextLocal } from '../../context/ContextLocal'
import { AddOrSubs } from '../addOrSubs/AddOrSubs';
import { Product } from '../product/Product';

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
        <div className='text-black'>
          {
            infoLocalStorage.map((item, indice) => {
              if (item.cantidad >0) {
                return (<Product
                key={indice}
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
                  imagen={item.imagen} />} />)
              }

              

            })
          }
        </div>
      </div>
    </>


  )
}
