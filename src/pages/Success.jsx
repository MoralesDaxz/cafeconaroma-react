import { React, useContext, useEffect, useState } from 'react'
import { ContextLocal } from "../context/ContextLocal";
import { Link } from "react-router-dom";
import { Product } from '../components/Product';
import cardsCheck from '../assets/check.svg'
import { SubTotal } from '../components/SubTotal';
import { TotalDelivery } from '../components/TotalEnvio';
import { Total } from '../components/Total';
import { TotalIva } from '../components/TotalIva';
import { Button } from '../components/Button';

export const Success = () => {
  const { infLocalContext, setInfLocalContext,
    totalContext, setTotalContext,
    ivaContext, setIvaContext,
    reduceContext, setReduceContext,
    priceDelivery, setPriceDelivery,
    copyGeneral, setCopyGeneral,
  } = useContext(ContextLocal);

  useEffect(() => {
    setStateCheckoutForm(false)
    setInfLocalContext([])
    setPriceDelivery(0)
    window.scrollTo(0, 0);
  }, []);

  const informacion = JSON.parse(localStorage.getItem('pedido'))

 

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
            <Total totalyDelivery={informacion.total} />
            <TotalIva iva={informacion.iva} />

          </div>
        </div>

        {/* <div>

<div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>
  
  
</div>

</div> */}
        <Link to={'/store'}> <Button style={' bg-[#2A5B45] px-[24px] rounded text-[14px] font-[600] text-white py-[12px]'} text={'Volver a la tienda'}></Button></Link>
      </div>

    </div>

  )
}

