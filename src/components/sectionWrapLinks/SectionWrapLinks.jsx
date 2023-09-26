import React from 'react'

const defaultStyle = 'flex flex-row items-center my-4 w-[512px] gap-4 font-medium'
export const SectionWrapLinks = ({style=defaultStyle}) => {
  return (

    <div className={style}>
      <a className='cursor-pointer'>Tienda</a>
      <a className='cursor-pointer'>Suscripción</a>
      <a className='cursor-pointer'>Para empresas</a>
      <a className='cursor-pointer'>Sobre nosotros</a>
      <a className='cursor-pointer'>Contacto</a>
    </div>


  )
}

