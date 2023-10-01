import { React, useContext } from 'react'
import sumaImg from '../../assets/iconSuma.png'
import restaImg from '../../assets/iconResta.png'
import { Button } from '../button/Button'
import { ContextLocal } from '../../context/ContextLocal'

export const AddOrSubs = ({ suma, resta, cantidad,nombre, id,precio,imagen }) => {
const { infLocalContext, setinfLocalContext } = useContext(ContextLocal);
  return (
    <>
      <div className='flex flex-row gap-2 items-center'>
       {/*  <div   className='w-6 h-6 cursor-pointer' style={{ backgroundImage: `url(${sumaImg})` }}></div> */}
        <Button  name={nombre} price={precio} img={imagen} add='suma' id={id} style={'w-6 h-6 cursor-pointer'}  bg={{ backgroundImage: `url(${sumaImg})` }}></Button>
        <p className='  w-8 h-8 flex flex-col items-center justify-center text-[#2A5B45] bg-[#2A5B451A] rounded-[50px] text-xs font-normal'>{cantidad}</p>
        <Button name={nombre} price={precio} img={imagen} add='resta' id={id} style={'w-6 h-6 cursor-pointer'} bg={{ backgroundImage: `url(${restaImg})` }}></Button>

      </div>

    </>
  )
}

