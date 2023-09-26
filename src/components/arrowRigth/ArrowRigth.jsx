import React from 'react'
import arrowBlack from '../../assets/flecha-derecha-negra.svg'
import arrowWhite from '../../assets/fqa-flecha-blanca-derecha.svg'
export const ArrowRigth = ({color,text}) => {
    return (
        <>
            <div className='flex flex-row items-center justify-center gap-4 cursor-pointer'>
                <a className={`font-semibold text-sm text-${color} underline`}>{text}</a>
                <img src={color === 'black'? arrowBlack : color === 'white'? arrowWhite:''} alt="arrow" />
            </div>

           {/*  <div className="flex flex-row gap-4 items-center justify-center cursor-pointer">
                    <p className=' font-semibold text-sm text-white underline'> Resolvemos tus dudas</p>
                    <img src={arrowWhite} alt="FQA-Flecha" />
                </div> */}
        </>
    )
}

