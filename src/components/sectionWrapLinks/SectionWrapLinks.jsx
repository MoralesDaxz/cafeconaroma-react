import React from 'react'
import { Link } from "react-router-dom";

const navBartStyle = 'flex flex-row items-center my-4 w-[512px] gap-4 font-medium'
const footertStyle = 'flex flex-col gap-4 font-medium text-sm'
export const SectionWrapLinks = ({style}) => {
  return (

    <div className={style=== 'nav'?navBartStyle:style=== 'footer'?footertStyle:''}> {/* Ternario multiple */}
      <Link to={'/store'} className='cursor-pointer'>Tienda</Link>
      <Link to={'Suscripcion'} className='cursor-pointer'>Suscripción</Link>
      <Link to={'/Empresa'} className='cursor-pointer'>Para empresas</Link>
      <Link to={'/Nosotros'} className='cursor-pointer'>Sobre nosotros</Link>
      <Link to={'/Contacto'} className='cursor-pointer'>Contacto</Link>
    </div>


  )
}

