import {React,useContext} from 'react'
import { DetailBag } from '../detailBag/DetailBag'

import { ContextLocal } from '../../context/ContextLocal'
export const Product = ({ id,nombre, imagen, precio,signos ,cantidad,line}) => {
/*   const { infLocalContext, setinfLocalContext } = useContext(ContextLocal);   */
  //componente se utlizara sin signo en pagina de PAGO
    return (
        <>
            <div key={id} className='flex flex-row justify-between'>
                <div className='flex flex-row gap-6'>
                   {signos}
                    <div className='flex flex-row justify-center items-center w-14 h-14'><img src={imagen} alt="" /> </div>
                    <div className=' flex flex-col justify-start items-start gap-1' >
                        <p>{nombre} </p>
                        <DetailBag></DetailBag>
                    </div>
                </div>
                <p className='w-fit'>{precio * cantidad},00 €</p>
            </div>
            {line}


        </>
    )
}

