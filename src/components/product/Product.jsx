import React from 'react'
import { AddOrSubs } from '../addOrSubs/AddOrSubs'
import { DetailBag } from '../detailBag/DetailBag'

export const Product = ({ nombre = 'Colombia Los Naranjos', imagen, cantidad = 1, precio = 9,signos }) => {
  //componente se utlizara sin signo en pagina de PAGO
    return (
        <>

            <div className='flex flex-row justify-between'>
                <div className='flex flex-row gap-6'>
                   {signos}
                    <div className='flex flex-row justify-center items-center w-14 h-14'><img src={imagen} alt="" /> </div>
                    <div className=' flex flex-col justify-start items-start gap-1' >
                        <p>{nombre} </p>
                        <DetailBag></DetailBag>
                    </div>
                </div>
                <p className='w-fit'>{precio},00 €</p>
            </div>


        </>
    )
}

