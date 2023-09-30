import React from 'react'
import { Link } from 'react-router-dom'

export const Suscripcion = () => {
  return (
    <>

    <div className='flex flex-col items-center'>
        <div className='w-[40%] '>
          <h2 className=' text-2xl  font-medium'>Bienvenido</h2>
          <h2 className='text-justify '>Disfruta del mejor cafe por menos, planes de suscripcion.</h2>
          <Link to={'/'} className=' text-3xl font-semibold'>Inicio</Link>
        </div>
      </div>
    </>
  )
}




