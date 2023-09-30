import { React } from 'react'
import arrowBlack from '../../assets/flecha-derecha-negra.svg'
import { Link } from 'react-router-dom'

export const SectionFrameCoffe = ({coffees,arrow,title}) => {
  const unit = 4/*Control de productos mostrados*/
  return (
    <>
      <div className='p-10 bg-[white]  flex flex-col justify-center items-center gap-10'>
        <h2 className=' font-medium text-2xl text-[#2A5B45]'>{title}</h2>
        <div className='w-full flex flex-row justify-center items-center'>
          {coffees}
        </div>
        <Link to={'/Store'}>{arrow}</Link> 
      </div>
    </>
  )
}
