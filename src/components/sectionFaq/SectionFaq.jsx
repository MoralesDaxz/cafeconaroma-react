import React from 'react'
import arrowWhite from '../../assets/fqa-flecha-blanca-derecha.svg'
import arrowDown from '../../assets/flecha-abajo.svg'
import { ArrowRigth } from '../arrowRigth/ArrowRigth'
const dataFaq = [
    {
        question: '¿Cómo hago el pedido?',
        answer: 'Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.'
    },
    {
        question: '¿Por qué los precios son tan bajos?',
        answer: 'Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.'
    },
    {
        question: '¿Es posible enviar café a mi oficina?',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo unde quod corporis, tempora nesciunt dolore quos laboriosam beatae nulla eos! Alias adipisci mollitia est libero facere repudiandae, dolore magnam dicta!'
    },
]
export const SectionFaq = () => {
    return (
        <>
            <section className='flex flex-col items-center  bg-[#2A5B45] py-12 gap-6'>
                <div className='font-medium text-2xl text-white'>
                    <h2>Preguntas frecuentes</h2>
                </div>
                <div className='flex flex-col gap-4 w-[668px]'>
                    {dataFaq.map(item => {
                        return (
                        <article className='bg-[#F7F5F3] p-6 rounded-[10px]'>
                            <div className='flex flex-row justify-between'>
                                <h3 className=' font-semibold text-lg text-[#2B2A2B]'>{item.question}</h3>
                                <img src={arrowDown} alt='flecha-abajo' />
                            </div>
                            <div>
                                <div className='my-[16px] bg-[#E3DED7] min-w-full h-[1px]'></div>
                                <p className=' font-normal text-xs'>{item.answer}</p>
                            </div>
                        </article>)
                    })}
                </div>
                <ArrowRigth color={'white'} text={'Resolvemos tus dudas'}></ArrowRigth>
            </section>
        </>

    )
}
