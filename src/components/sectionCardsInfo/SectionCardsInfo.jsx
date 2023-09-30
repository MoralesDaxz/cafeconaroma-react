import React from 'react'
import cardsImgBg from '../../assets/Cards.png'
import cardsCheck from '../../assets/check.svg'
import cardsTruck from '../../assets/truck.svg'
import cardsGift from '../../assets/gift.svg'

export const SectionCardsInfo = () => {
    const cardsData = [
        {
            img: cardsCheck,
            title: 'Recibe tu pedido sin preocuparte',
            prf: 'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.'
        },
        {
            img: cardsTruck,
            title: 'Envío en 24/48h',
            prf: 'Pide tu café antes de las 12h y lo recibirás al día siguiente.'
        },
        {
            img: cardsGift,
            title: 'Descuentos y beneficios',
            prf: 'Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.'
        }
    ]
    return (
        <>
            <section className={`bg-center bg-cover bg-no-repeat  h-[380px] flex flex-col items-center justify-center gap-6 `} style={{ backgroundImage: `url(${cardsImgBg})`}} >
                <div className='font-medium text-2xl text-white leading-7'>
                    <h2>Café con las mejores condiciones</h2>
                </div>
                <article className='flex flex-row justify-center items-center'>
                    <div className='flex flex-wrap gap-6'>
                        {cardsData.map((item,indice )=> {
                            return (
                                <div key={indice} className=' bg-[#F7F5F3] rounded-lg w-[316px] flex flex-col items-center justify-center gap-4 text-center p-6'>
                                    <div className='border-0 rounded'>
                                        <img src={`${item.img}`} className='w-[64px] h-[64px] border-0' />
                                    </div>
                                    <p className='font-semibold text-lg'>{item.title}</p>
                                    <p className=' font-normal text-sm'>{item.prf}</p>
                                </div>
                            )
                        })}
                    </div>

                </article>
            </section>
        </>
    )
}

