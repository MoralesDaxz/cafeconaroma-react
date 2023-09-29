import React from 'react'
import sumaImg from '../../assets/iconSuma.png'
import restaImg from '../../assets/iconResta.png'
export const AddOrSubs = ({suma,resta,cantidad=1}) => {

  return (
    <>
    <div className='flex flex-row gap-2 items-center'>
        <div className='w-6 h-6 cursor-pointer' style={{backgroundImage:`url(${sumaImg})`}} ></div>
       <p className='  w-8 h-8 flex flex-col items-center justify-center text-[#2A5B45] bg-[#2A5B451A] rounded-[50px] text-xs font-normal'>{cantidad}</p>
        <div className='w-6 h-6 cursor-pointer' style={{backgroundImage:`url(${restaImg})`}} ></div>
    </div>

    </>
  )
}

