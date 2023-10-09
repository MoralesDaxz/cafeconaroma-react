import { React, useState, useContext } from 'react'
import iconMail from '../../assets/form-email.svg'
import iconTlf from '../../assets/form-phone.svg'
import { Footer } from '../footer/Footer'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ContextLocal } from '../../context/ContextLocal'
export const SectionForm = () => {
    const [validateLS, setvalidateLS] = useState([])
    /*Mantener Modal -> validateLS.length >1  -> "REGISTRADO", JSON.parse(localStorage.getItem("formulario"))  control cada vez que se vulve a renderizar verifica LS como valor inicial*/
    /* Si quiere volver a registrar QUITAR valor inicial de estado*/
    const [inputCheckbox, setInputCheckBox] = useState(false)
    /* estadodel input ckeckbox true or false*/
    const { register, handleSubmit } = useForm('')
    const [nameRegistred, setnameRegistred]= useState([])

    return (
        <>
            <div className='bg-[#E3DED7] flex flex-row justify-center items-center'>
                <div className='w-[1200px] flex flex-row gap-6'>
                    <div className='w-[50%] h-[552px] flex flex-col justify-center gap-3'>
                        <h3 className=' font-semibold text-lg text-[#111827]'>Entra en contacto con nosotros</h3>
                        <div className='flex flex-col gap-6 font-normal text-sm text-[#6B7280]'>
                            <p>Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo antes posible.</p>
                            <p>También puedes ponerte en contacto con nosotros en nuestra dirección o a través del teléfono de la tienda.</p>
                            <div>
                                <p>742 Evergreen Terrace</p>
                                <p>Springfield, OR 12345</p>
                            </div>
                            <div className='flex flex-row  items-center gap-3'><img src={iconMail} /><p>+1 (555) 123-4567</p></div>
                            <div className='flex flex-row  items-center gap-3'><img src={iconTlf} /><p>support@example.com</p></div>
                            <p>¿Buscas un trabajo? <Link to={'https://www.m25.space/contact'} target='_blank'><span className=' font-medium text-sm underline text-black cursor-pointer'>Ver nuestras ofertas.</span></Link> </p>
                        </div>
                    </div>
                    {validateLS.length < 1 ? <div className='w-[50%] bg-white text-[#374151] p-[32px]'>
                        <form onSubmit={handleSubmit((data) => {
                            setnameRegistred(data.nombre)
                          
                            if (!data.check) {
                                let modal = confirm(`Aceptas politicas y terminos?`) /*con un required en input eliminamos esta validacion */
                                if (modal) {
                                    setInputCheckBox(true);
                                    setTimeout(()=>{ setvalidateLS( [data])
                                        localStorage.setItem('formulario', JSON.stringify([data]))},1000)
                                   
                                } else {
                                    setInputCheckBox(false)
                                }
                            } else {
                                setInputCheckBox(true);
                                setvalidateLS( [data])
                                localStorage.setItem('formulario', JSON.stringify([data]))
                            }

                        })}>
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col gap-1'>
                                    <label>Nombre completo</label>
                                    <input {...register('nombre', { required: true })} type='text' className='inputForm' required></input>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Email</label>
                                    <input {...register('email', { required: true })} type='email' className='inputForm' required></input>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Teléfono</label>
                                    <div className='inputForm flex flex-row items-center gap-3'>
                                        <select  {...register('extCountry', { required: true })} required>
                                            <option value="+34" title="España +34" >ES</option>
                                            <option value="+57" title="Colombia +57" >CO</option>
                                            <option value="+01" title="Estados Unidos +01" >EU</option>
                                            <option value="+58" title="Venezuela +58" >VE</option>
                                        </select>
                                        <input {...register('phone', { required: true })} type='tel' className='border-0' placeholder='+1 (555) 987-6543' required></input>
                                    </div>

                                </div>
                                <textarea {...register('textArea')} className='textareaForm' cols='30' rows='6' placeholder='¿En qué podemos ayudarte?'></textarea>
                                <div className='flex gap-3'>
                                    <input onClick={() => inputCheckbox ? setInputCheckBox(false) : setInputCheckBox(true)} checked={inputCheckbox} {...register('check')} id='checkBox' className='accent-[#2A5B45] w-auto' type='checkbox' ></input>
                                    <label>Acepto la <Link className='underline cursor-pointer font-semibold' to={'/Privacidad'}>Política de Privacidad</Link> y los <Link className='underline cursor-pointer font-semibold' to={'/Terminos'}>Términos y condiciones</Link>.</label>
                                </div>
                                <input type='submit' className={'bg-[#2A5B45] cursor-pointer rounded text-white flex flex-row items-center justify-center w-[90px] h-[40px]'} text={'Enviar'} />
                            </div>
                        </form>
                    </div>
                        : <div className='w-[50%] gap-4 flex flex-col justify-center items-center  bg-white text-[#374151]'>
                            <div className='flex flex-col items-center justify-center h-[50%] w-[80%] rounded-xl shadowModalCar'>
                            <h1 className=' text-xl'>¡Hola! {nameRegistred} hemos recibido la informacion.</h1>
                            <p className='underline'>Pronto daremos respuesta.</p>

                            </div>
                        </div>}
                </div>
            </div>
            <Footer />
        </>
    )
}

