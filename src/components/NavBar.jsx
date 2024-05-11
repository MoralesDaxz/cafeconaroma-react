import iconTlf from '../assets/iconTlf.svg'
import { SectionWrapLinks } from './SectionWrapLinks'
import { Button } from './Button'
import { Link } from "react-router-dom";
import { LogoCafe } from './LogoCafe'
import { CarShop } from './CarShop.jsx'

export const NavBar = () => {
   
    return (
        <>
            <nav className='fixed z-10 text-[#FFFFFF] py-3 px-10 bg-[#2B2A2B] h-16 flex flex-row items-center justify-between min-w-full'>
                <LogoCafe/>
                <SectionWrapLinks style={'nav'}/>
                <div className='flex flex-row items-center justify-between '>
                    <img src={iconTlf} alt="iconTlf" />
                    <Link to={'tel:+34919490518'} className='font-semibold ml-2 text-sm'> +34 919 49 05 18</Link>
                    <Link to={'/login'}>
                        <Button style={'font-semibold py-3 px-6 bg-[#515051] ml-6 flex flex-row items-center justify-center rounded'} text={'Iniciar sesión'}></Button>
                    </Link>
                </div>
                <CarShop />
            </nav>
        </>
    )
}

