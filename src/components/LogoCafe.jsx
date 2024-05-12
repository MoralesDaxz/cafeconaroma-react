import { Link } from 'react-router-dom'
import logoCafe from '../assets/Coffe.svg'
export const LogoCafe = () => {
    return (
        <>
            <Link to={'/'}>
                <div className='h-9 opacity-90 flex flex-row items-center gap-2 cursor-pointer'>
                    <p className='font-light text-2xl '>cafeconaroma.com</p>
                    <img className='w-5 h-6' src={logoCafe} alt="Logo" />
                </div>
            </Link>
        </>
    )
}

