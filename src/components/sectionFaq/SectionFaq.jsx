import {React,useState} from 'react'
import arrowWhite from '../../assets/fqa-flecha-blanca-derecha.svg'
import arrowDown from '../../assets/flecha-abajo.svg'
import { ArrowRigth } from '../arrowRigth/ArrowRigth'
import { Link } from 'react-router-dom'

export const SectionFaq = () => {
   
    const [answer1, setanswer1] = useState(false)
    const [answer2, setanswer2] = useState(false)
    const [answer3, setanswer3] = useState(false)
    return (
        <>
            <section className='flex flex-col items-center  bg-[#2A5B45] py-12 gap-6'>
                <div className='font-medium text-2xl text-white'>
                    <h2>Preguntas frecuentes</h2>
                </div>
                <div className='flex flex-col gap-4 w-[668px]'>
                        <article  className='bg-[#F7F5F3] p-6 rounded-[10px]'>
                            <div className='flex flex-row justify-between cursor-pointer' onClick={() => setanswer1( answer1 ? false : true)}>
                            
                                <h3 className=' font-semibold text-lg text-[#2B2A2B]'>¿Cómo hago el pedido?</h3>
                                <img className={answer1?' duration-[0.8s] rotate-180 ':'duration-[0.7s]'} src={arrowDown} alt='flecha-abajo' />
                            </div>
                            <div style={{ height: answer1 ? '80px' : '0px', overflow: 'hidden', transition: 'height 0.6s ease', fontWeight:'400',fontSize:'12px', lineHeight:'16px' }}>
                                <div className='my-[16px] bg-[#E3DED7] min-w-full h-[1px]'></div>
                                <p >Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.</p>
                            </div>
                        </article>
                        <article  className='bg-[#F7F5F3] p-6 rounded-[10px]'>
                            <div className='flex flex-row justify-between cursor-pointer' onClick={() => setanswer2( answer2 ? false : true)}>
                            
                                <h3 className=' font-semibold text-lg text-[#2B2A2B]'>¿Por qué los precios son tan bajos?</h3>
                                <img className={answer2?' duration-[0.8s] rotate-180 ':'duration-[0.7s]'} src={arrowDown} alt='flecha-abajo' />
                            </div>
                            <div style={{ height: answer2 ? '100px' : '0px', overflow: 'hidden', transition: 'height 0.6s ease', fontWeight:'400',fontSize:'12px', lineHeight:'16px' }}>
                                <div className='my-[16px] bg-[#E3DED7] min-w-full h-[1px]'></div>
                                <p >Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.</p>
                            </div>
                        </article>
                   
                        <article className='bg-[#F7F5F3] p-6 rounded-[10px]'>
                            <div className='flex flex-row justify-between cursor-pointer' onClick={() => setanswer3( answer3 ? false : true)}>
                            
                                <h3 className=' font-semibold text-lg text-[#2B2A2B]'>¿Es posible enviar café a mi oficina?</h3>
                                <img className={answer3?' duration-[0.8s] rotate-180 ':'duration-[0.7s]'} src={arrowDown} alt='flecha-abajo' />
                            </div>
                            <div style={{ height: answer3 ? '80px' : '0px', overflow: 'hidden', transition: 'height 0.6s ease', fontWeight:'400',fontSize:'12px', lineHeight:'16px' }}>
                                <div className='my-[16px] bg-[#E3DED7] min-w-full h-[1px]'></div>
                                <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo unde quod corporis, tempora nesciunt dolore quos laboriosam beatae nulla eos! Alias adipisci mollitia est libero facere repudiandae, dolore magnam dicta!</p>
                            </div>
                        </article>
                   
                   
                </div>
               <Link to={'/Contacto'}><ArrowRigth color={'white'} text={'Resolvemos tus dudas'}></ArrowRigth></Link> 
            </section>
        </>
    )
}

/* import { React, useState } from "react";
import { ArrowRigth } from '../arrowRigth/ArrowRigth'
import arrowDown from '../../assets/flecha-abajo.svg'
import { Link } from 'react-router-dom'

export const SectionFaq = () => {
    const [isOpenIndex, setIsOpenIndex] = useState({
        uno: false,
        dos: false,
        tres: false
    });

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

    return (
        <div className="flex flex-col items-center gap-[1.5em] bg-[#2a5b45] py-[3em]">
            <h2 className="text-[1.5em] not-italic font-medium text-[#fff]">
                Preguntas frecuentes
            </h2>
            <section></section>
            {dataFaq.map((element, i) => {
                const palabra = i == 0 ? 'uno' : i == 1 ? 'dos' : 'tres'
                return (
                    <div
                        key={i}
                        onClick={() => setIsOpenIndex(prev => {
                            const holdPrev = { ...prev }
                            holdPrev[palabra] = !holdPrev[palabra]
                            return holdPrev
                        })}
                        className={`flex flex-col p-[1.5em] gap-[0.4em]  bg-white rounded-[0.6em] w-[41.7em] cursor-pointer $`}>
                        <article className="flex justify-between items-center ">
                            <h3 className="text-[1.1em] not-italic font-semibold">
                                {element?.question}
                            </h3>
                            <button
                                className={`${isOpenIndex[palabra] ? "rotate-180 transition duration-1000" : "transition duration-1000"}`}>
                                <img src={arrowDown} alt="" />
                            </button>
                        </article>
                        {isOpenIndex[palabra] ?
                            <article className='transition-all  duration-[700ms] h-[80px] opacity-100'>
                                <div className="my-[1em] bg-[#E3DED7] min-w-full h-[1px] "></div>
                                <p className="leading-4 transition-all duration-[1s] ease-in-out text-[0.75em] not-italic font-normal  ">
                                    {element.answer}
                                </p>
                            </article>
                            : <article className='transition-all duration-[700ms]  h-0 opacity-0  '>
                                <div className="my-[1em] bg-[#E3DED7] min-w-full h-[1px] "></div>
                                <p className="leading-4 ease-in-out opacity-0 text-[0.75em] not-italic font-normal  h-0">
                                    {element.answer}
                                </p>
                            </article>}
                    </div>
                );
            })}
            <div className="flex items-center gap-[1em]">
                <Link to={'/Contacto'}><ArrowRigth color={'white'} text={'Resolvemos tus dudas'}></ArrowRigth></Link>
            </div>
        </div>
    );
};

 */


