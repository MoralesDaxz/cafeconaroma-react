import React from 'react'
import heroCafe from '../../assets/heroCafe.png'
import { Button } from '../button/Button'
import { NavBar } from '../navBar/NavBar'
export const SectionHero = () => {
    return (
        <>
         
            <section className="h-[486px] flex flex-row justify-center py-12 px-10 gap-6">
                <article className='flex flex-col justify-center gap-4 w-[588px]'>
                    <div className='text-[#2A5B45] font-semibold text-lg w-[588px] h-6'>
                        <p>De la planta a tu taza</p>
                    </div>
                    <div className='font-semibold text-[40px]'>
                        <p >El mejor café del mundo, ahora en tu casa.</p>
                    </div>
                    <div className='text-sm font-normal'>
                        <p>Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que
                            puedas viajar desde la comodidad de tu hogar.</p>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <Button style={'w-[168px] h-10 flex flex-row justify-center items-center rounded text-white bg-[#1F1815]'} text={'Descubrir orígenes'} />
                        <Button style={'w-[168px] h-10 flex flex-row justify-center items-center rounded text-white bg-[#2A5B45]'} text={'Comprar café'} />
                    </div>
                </article>

                <article>
                    <img className='shadowElement rounded-3xl' src={heroCafe} alt="Hero-imagen" />
                </article>
            </section>
        </>

    )
}

