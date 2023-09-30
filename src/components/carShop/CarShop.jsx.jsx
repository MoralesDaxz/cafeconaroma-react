import { React, useState, useContext } from 'react'
import iconCar from '../../assets/Car.svg'
import { ContextLocal } from '../../context/ContetxtLocal'
import { AddOrSubs } from '../addOrSubs/AddOrSubs';
import { Product } from '../product/Product';
export const CarShop = ({ show, setShow }) => {
  const { infLocalContext, setinfLocalContext } = useContext(ContextLocal);
  const [showModal, setshowModal] = useState('hidden')
  const infoLocalStorage = JSON.parse(localStorage.getItem("buys")) || [];
  const checkClass = () => {

    console.log(infoLocalStorage);
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
        <div>


          {
            infoLocalStorage.map(item => {
              return (<Product 
                imagen={item.imagen}
                cantidad={item.cantidad}
                precio={item.precio}
                nombre={item.nombre}
                signos={<AddOrSubs />} />)

            })
          }
        </div>
      </div>
   </>
     

      )
}
