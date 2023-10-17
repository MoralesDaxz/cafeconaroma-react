import React from 'react'
import { Link } from "react-router-dom";

const navBartStyle = 'flex flex-row items-center my-4 w-[512px] gap-4 font-medium'
const footertStyle = 'flex flex-col gap-4 font-medium text-sm'
export const SectionWrapLinks = ({style}) => {
  return (

    <div className={style=== 'nav'?navBartStyle:style=== 'footer'?footertStyle:''}> {/* Ternario multiple */}
      <Link to={'/store'} className='cursor-pointer'>Tienda</Link>
      <Link to={'suscripcion'} className='cursor-pointer'>Suscripción</Link>
      <Link to={'/empresa'} className='cursor-pointer'>Para empresas</Link>
      <Link to={'/nosotros'} className='cursor-pointer'>Sobre nosotros</Link>
      <Link to={'/contacto'} className='cursor-pointer'>Contacto</Link>
    </div>


  )
}

