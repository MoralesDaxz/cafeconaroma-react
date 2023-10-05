import { React,useState } from 'react'
import arrowBlack from '../../assets/flecha-derecha-negra.svg'
import { Link } from 'react-router-dom'

const styleTopStore = 'px-10  pb-10 pt-[7rem] bg-[white]  flex flex-col justify-center items-center gap-10'
const styleTopHome = 'p-10  bg-[white]  flex flex-col justify-center items-center gap-10'

export const SectionFrameCoffe = ({coffees,arrow,title,location}) => {


  return (
    <>
      <div className={location==='home'?styleTopHome:location==='store'?styleTopStore:''}>
        <h2 className=' font-medium text-2xl text-[#2A5B45]'>{title}</h2>
        <div className='w-full flex flex-row justify-center items-center'>
          {coffees}
        </div>
        <Link to={'/Store'}>{arrow}</Link> 
      </div>
    </>
  )
}
