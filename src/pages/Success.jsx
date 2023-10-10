import { React, useContext, useEffect, useState } from 'react'
import { ContextLocal } from "../context/ContextLocal";
import { Link } from "react-router-dom";
import { Product } from '../components/product/Product';
import cardsCheck from '../assets/check.svg'
import { SubTotal } from '../components/subTotal/SubTotal';
import { TotalDelivery } from '../components/totalDelivery/TotalEnvio';
import { Total } from '../components/total/Total';
import { TotalIva } from '../components/totalIva/TotalIva';
import { Button } from '../components/button/Button';
export const Success = () => {
  const { infLocalContext, setinfLocalContext,
    totalContext, settotalContext,
    ivaContext, setivaContext,
    reduceContext, setreduceContext,
    priceDelivery, setpriceDelivery,
    copyGeneral, setCopyGeneral,
  } = useContext(ContextLocal);
const informacion = JSON.parse(localStorage.getItem('pedido'))
console.log(informacion);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-[#FFFFFF] min-h-[100vh] w-full flex flex-col items-center justify-center px-10 pb-10 pt-[7rem]'>
      <div className=' w-full flex flex-col items-center justify-center gap-6 '>
        <div className='flex flex-col items-center justify-center gap-3'>
          <img src={cardsCheck} className='w-[64px] h-[64px] border-0'></img>
          <h2 className='text-[#2A5B45] text-2xl font-medium'>El pedido ha sido realizado con éxito</h2>
          <p className=' text-sm font-normal w-[346px]'>El pedido #12387 se encuentra en preparación.
            Lo recibirás dentro de las fechas acordadas en tu envío.
            Hemos enviado un ticket a tu correo electrónico.</p>
        </div>
        <div className='w-full bg-[#F7F5F3] rounded-[10px] flex flex-col gap-6 p-6'>

          <h3 className=' font-semibold text-lg'>Tu pedido</h3>

          {
            informacion.localStorage?.map((item, indice) => {
              if (item.cantidad > 0 && indice >= 0) {
                return (<Product
                  key={item.id}
                  id={item.id}
                  imagen={item.imagen}
                  cantidad={item.cantidad}
                  precio={item.precio}
                  nombre={item.nombre}
                  success={true}
                />
                )
              }
            })
          }
          <div className='w-[98%] h-[1px] bg-[#E3DED7] self-center'></div>
          <div className=' flex flex-col gap-4'>
            <SubTotal envio={informacion.envio} precioSuccess={informacion.total} />
            <TotalDelivery envio={informacion.envio} />
            <div className='w-[98%] h-[1px] bg-[#E3DED7] self-center'></div>
            <Total  totalyDelivery={informacion.total} />
            <TotalIva iva={informacion.iva} />

          </div>
        </div>

     <Link to={'/Store'}> <Button style={' bg-[#2A5B45] px-[24px] rounded text-[14px] font-[600] text-white py-[12px]'} text={'Volver a la tienda'}></Button></Link> 
      </div>
      
    </div>

  )
}

