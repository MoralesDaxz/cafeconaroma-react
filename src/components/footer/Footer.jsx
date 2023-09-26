import React from 'react'
import logoCafe from '../../assets/Coffe.svg'
import iconTlf from '../../assets/iconTlf.svg'
import iconMail from '../../assets/footer-email.svg'
import { SectionWrapLinks } from '../sectionWrapLinks/SectionWrapLinks'
import { CopyRight } from '../copyRight/CopyRight'
export const Footer = () => {
    return (
        <>
            <div className='h-[310px] bg-[#1F1815] flex flex-col items-center justify-between'>

                <div className=' my-[2%] text-white flex flex-col w-[1200px]'>
                    <div className='h-9 opacity-90 flex flex-row items-center gap-2 cursor-pointer'>
                        <p className=' font-light text-2xl '>cafedealtura.com</p>
                        <img className='w-5 h-6' src={logoCafe} alt="Logo" />
                    </div>
                    <div className='flex flex-row  min-w-full'>
                        <div className='flex flex-col gap-4 w-[50%]'>
                            <p className=' text-lg font-medium'>Te ayudamos en</p>
                            <div className='w-[182px] h-[48px] bg-[#515051]  rounded flex flex-row justify-center items-center '>
                                <img src={iconTlf} alt="iconTlf" />
                                <a className='font-semibold ml-2 text-sm'> +34 919 49 05 18</a>
                            </div>
                            <div className='w-[232px] h-[48px] bg-[#515051] rounded flex flex-row justify-center items-center '>
                                <img src={iconMail} alt="iconTlf" />
                                <a className='font-semibold ml-2 text-sm'>hola@cafedealtura.com</a>
                            </div>
                        </div>
                        <div className='w-[50%] flex flex-row gap-[127px]'>
                            <div>
                            <SectionWrapLinks style={'flex flex-col gap-4 font-medium text-sm'} />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className=' font-medium text-sm cursor-pointer'>Política de privacidad</p>
                                <p className=' font-medium text-sm cursor-pointer'>Política de cookies</p>
                                <p className=' font-medium text-sm cursor-pointer'>Términos y condiciones</p>
                            </div>
                        </div>

                    </div>
                </div>
                <CopyRight></CopyRight>
            </div>
        </>
    )
}

