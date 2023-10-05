import { React, useState, useContext, useEffect, useRef } from 'react'
import iconCar from '../../assets/Car.svg'
import iconCarFast from '../../assets/car-fast.svg'
import iconMin from '../../assets/minimize.svg'
import iconCarPay from '../../assets/car-pagar.svg'
import iconClear from '../../assets/clear-car.svg'
import iconExclamation from '../../assets/exclamation.svg'
import { ContextLocal } from '../../context/ContextLocal'
import { AddOrSubs } from '../addOrSubs/AddOrSubs';
import { Product } from '../product/Product';
import { Link } from 'react-router-dom';

export const CarShop = () => {

  const { infLocalContext, setinfLocalContext, totalContext, reduceContext, priceDelivery } = useContext(ContextLocal);
  const [showModal, setshowModal] = useState('hidden')

  const setBuyContext = () => {
    let text = "¿Realmente quieres limpiar carrito?\n\nCancela para seguir comprando.";
    if (confirm(text) === true) {
      setinfLocalContext([])
    }
  }

  return (
    <>

      <div id='car' onClick={(e) => showModal === 'hidden' ? setshowModal('shopping') : setshowModal('hidden')} className="w-[50px] cursor-pointer flex flex-row justify-center items-center">
        <img src={iconCar} />
        <div className=' self-start rounded-[25px] w-5 text-center bg-white font-medium text-sm text-black'>{reduceContext.cantidad}</div>
      </div>

      {/* --------------------------- */}
      <div id='modal' onMouseLeave={() => setshowModal('hidden')} className={showModal === 'shopping' ? ' flex flex-col fixed top-[5rem] w-[450px] h-[310px] right-[50px] border-solid border-2 border-[#55a07e] bg-[#eff5e8ea] rounded-[8px] shadowModalCar' : 'hidden'}>
        {/* -----------titulo---------------- */}
        <div className={'flex flex-row  justify-between items-start p-2 mx-3'}>
          <div className='flex flex-col cursor-pointer items-center justify-end text-gray-500 text-[.6rem]'>
            <img id='close' onClick={(e) => showModal === 'shopping' ? setshowModal('hidden') : setshowModal('hidden')} className='w-6' src={iconMin} />
            <p>Cerrar</p>
          </div>
          {totalContext !== 0 ? <div onClick={() => { setBuyContext() }} className='flex flex-col items-center justify-end cursor-pointer'>
            <img className='w-6' src={iconClear} />
            <p className=' text-gray-500 text-[.6rem]'>Limpiar</p>
          </div> : ''}

          {totalContext !== 0 ? <Link to={'/Cesta'} className='cursor-pointer flex flex-row items-end gap-2 border-solid border-b-2 border-[#55a07e]'>
            {priceDelivery !== 0 ? <h2 className='font-medium text-base text-black  text-center ' >Envio urgente - Pagar</h2> : <h2 className='font-medium text-base text-black  text-center '>Pagar</h2>}

            <img className='w-8 ' src={priceDelivery === 0 ? iconCarPay : iconCarFast} />
            <p className=' text-base text-black font-medium'>{totalContext} €</p>
          </Link> : ''}

        </div>

        {/* --------------------------- */}
        <div className={'w-[450px] h-[300px] p-[1rem] overflow-auto scrollbar-hidden g-[.6rem]'}>

          <div className='text-black flex flex-col   gap-3'>
            {

              infLocalContext?.map((item, indice) => {

                if (item.cantidad > 0 && indice >= 0) {

                  return (<Product
                    line={<div className='w-[98%] h-[1px] bg-[#E3DED7] self-center'></div>}
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
            {totalContext !== 0 ? <div className='flex flex-row justify-center mt-4 items-baseline gap-3 font-semibold text-base text-black'>
              <p>Total Compra</p>
              <p className=' text-lg'>{totalContext} €</p>
            </div> : <div className='flex flex-col justify-center  items-center mt-4  gap-3 font-semibold text-base text-black'>
              <img className='w-12' src={iconExclamation} />
              <p >Carrito Vacio</p>
            </div>}
          </div>
        </div>


      </div>

    </>
  )
}
