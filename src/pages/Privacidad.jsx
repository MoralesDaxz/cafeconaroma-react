import React from 'react'
import { Link } from 'react-router-dom'

export const Privacidad = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='w-[40%] '>
          <h2 className=' text-2xl text-center font-medium'> Politica de Privacidad</h2>
          <h2 className='overflow-y-auto text-justify h-40'>TITULAR te informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través del sitio Web DIRECCIÓN-WEB.

            En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales (LOPD GDD). Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).

            El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal.</h2>

          <Link to={'/'} className=' text-3xl font-semibold'>Inicio</Link>
        </div>
      </div>
    </>
  )
}


