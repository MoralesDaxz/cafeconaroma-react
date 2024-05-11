import heroCafe from '../assets/heroCafe.png'
import { Button } from './Button'
import { Link } from 'react-router-dom'
export const SectionHero = () => {
    return (
        <>
            <section className=" flex flex-row justify-center pt-[8rem] pb-12 px-10 gap-6">
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
                        <Link to={'/origenes'}>
                        <Button style={'w-[168px] h-10 flex flex-row justify-center items-center rounded text-white bg-[#1F1815]'} text={'Descubrir orígenes'} />
                        </Link>
                        <Link to={'/store'} >
                        <Button style={'w-[168px] h-10 flex flex-row justify-center items-center rounded text-white bg-[#2A5B45]'} text={'Comprar café'} />
                        </Link>
                    </div>
                </article>

                <article>
                    <img className='shadowElement rounded-3xl' src={heroCafe} alt="Hero-imagen" />
                </article>
            </section>
        </>

    )
}

