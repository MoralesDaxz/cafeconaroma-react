import { Link } from 'react-router-dom'

export const Us = () => {
  return (
    <div className='min-h-screen'>
      <h2> Bienvenido </h2>
      <h2>Trabajo y dedicacion a nivel social</h2>
      <Link to={'/'} className=' text-3xl font-semibold'>Inicio</Link>
    </div>
  )
}
