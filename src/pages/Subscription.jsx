import { Link } from 'react-router-dom'

export const Subscription = () => {
  return (
    <div className='w-[40%] min-h-screen flex flex-col items-center'>
      <h2 className='mt-10 text-2xl font-medium'>Bienvenido</h2>
      <h2 className='text-justify '>Disfruta del mejor cafe por menos, planes de suscripcion.</h2>
      <Link to={'/'} className=' text-3xl font-semibold'>Inicio</Link>
    </div>
  )
}




