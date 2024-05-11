import { Link } from "react-router-dom";

const navBartStyle = 'flex flex-row items-center my-4 w-[512px] gap-4 font-medium'
const footertStyle = 'flex flex-col gap-4 font-medium text-sm'
export const SectionWrapLinks = ({style}) => {
  return (

    <div className={style=== 'nav'?navBartStyle:style=== 'footer'?footertStyle:''}> {/* Ternario multiple */}
      <Link to={'/store'} className='cursor-pointer'>Tienda</Link>
      <Link to={'/subscription'} className='cursor-pointer'>Suscripción</Link>
      <Link to={'/company'} className='cursor-pointer'>Para empresas</Link>
      <Link to={'/us'} className='cursor-pointer'>Sobre nosotros</Link>
      <Link to={'/contact'} className='cursor-pointer'>Contact</Link>
    </div>


  )
}

