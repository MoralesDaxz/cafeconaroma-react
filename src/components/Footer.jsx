import iconTlf from '../assets/iconTlf.svg'
import iconMail from '../assets/footer-email.svg'
import { SectionWrapLinks } from './SectionWrapLinks'
import { LogoCafe } from './LogoCafe'
import { Link } from 'react-router-dom'
export const Footer = () => {
    return (
        <>
            <div className='h-[310px] bg-[#1F1815] flex flex-col items-center justify-between'>

                <div className=' my-[2%] text-white flex flex-col w-[1200px]'>
                    <LogoCafe />
                    <div className='flex flex-row  min-w-full'>
                        <div className='flex flex-col gap-4 w-[50%]'>
                            <p className=' text-lg font-medium'>Te ayudamos en</p>
                            <div className='w-[182px] h-[48px] bg-[#515051]  rounded flex flex-row justify-center items-center '>
                                <img src={iconTlf} alt="iconTlf" />
                                <Link className='font-semibold ml-2 text-sm' to={'tel:+34919490518'}> +34 919 49 05 00</Link>
                            </div>
                            <div className='w-[232px] h-[48px] bg-[#515051] rounded flex flex-row justify-center items-center '>
                                <img src={iconMail} alt="iconTlf" />
                                <Link className='font-semibold ml-2 text-sm' to={'mailto:hola@cafedemontaña.com'}>hola@cafedemontaña.com</Link>
                            </div>
                        </div>
                        <div className='w-[50%] flex flex-row gap-[127px]'>
                            <div>
                                <SectionWrapLinks style={'footer'} />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <Link to={'/privacy'} ><p className=' font-medium text-sm cursor-pointer'>Política de privacidad</p></Link>
                                <Link to={'/cookies'}><p className=' font-medium text-sm cursor-pointer'>Política de cookies</p></Link>
                                <Link to={'/terms'}><p className=' font-medium text-sm cursor-pointer'>Términos y condiciones</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

