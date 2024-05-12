import { useState } from 'react'
import iconMail from '../assets/form-email.svg'
import iconTlf from '../assets/form-phone.svg'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export const SectionForm = () => {
    const [validateLS, setvalidateLS] = useState([])
    /*Mantener Modal -> validateLS.length >1  -> "REGISTRADO", JSON.parse(localStorage.getItem("formulario"))  control cada vez que se vulve a renderizar verifica LS como valor inicial*/
    /* Si quiere volver a registrar QUITAR valor inicial de estado*/
    const [inputCheckbox, setInputCheckBox] = useState(false)
    const [nameRegistred, setnameRegistred] = useState([])
    const { register, handleSubmit, trigger, formState: { errors }, } = useForm('')

    const fnOnSubmit = handleSubmit((data) => {
        setInputCheckBox(true);
        setTimeout(() => {
            setvalidateLS([data])
            localStorage.setItem('formulario', JSON.stringify([data]))
        }, 1000)
        setnameRegistred(data.nombre)
    })
    return (
        <>
            <div className='bg-[#E3DED7] flex flex-row justify-center items-center'>
                <div className='w-[1200px] flex flex-row gap-6'>
                    <div className='w-[50%] h-[552px] flex flex-col justify-center gap-3'>
                        <h3 className=' font-semibold text-lg text-[#111827]'>Entra en Contact con nosotros</h3>
                        <div className='flex flex-col gap-6 font-normal text-sm text-[#6B7280]'>
                            <p>Si tienes dudas, ponte en Contact con nosotros a través del formulario y te responderemos lo antes posible.</p>
                            <p>También puedes ponerte en Contact con nosotros en nuestra dirección o a través del teléfono de la tienda.</p>
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
                        <form onSubmit={fnOnSubmit}>
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-col gap-1'>
                                    <label htmlFor='nombre'>Nombre completo</label>
                                    <input type="text" className='inputForm' onBlur={() => trigger("nombre")}
                                        {...register("nombre", {
                                            required: {
                                                value: true,
                                                message: "Nombre es requerido",
                                            },
                                            pattern: {
                                                value: /^[A-Za-z]+(?: [A-Za-z]+)?$/,
                                                message: 'Formato de nombre no valido.'
                                            },
                                            minLength: {
                                                value: 3,
                                                message: "Debe contener al menos 3 caracteres.",
                                            },
                                            maxLength: {
                                                value: 30,
                                                message: "Este campo puede tener maximo 30 caracteres",
                                            },
                                        })} />
                                    {errors.nombre && (<span className="inputError">{errors.nombre.message}</span>)}
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Email</label>
                                    <input className='inputForm' onBlur={() => trigger("email")} {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email es requerido",
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                                            message: "Formato de correo no valido, Ejemplo: correo@corporation.com",
                                        }

                                    })} ></input>
                                    {errors.email && (<span className="inputError">{errors.email.message}</span>)}
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Teléfono</label>
                                    <div className='inputForm flex flex-row items-center gap-3'>
                                        <select onBlur={() => trigger("codeCountry")} required {...register("codeCountry", {
                                        })} >

                                            <option value="+34" title="España +34" >ES</option>
                                            <option value="+57" title="Colombia +57" >CO</option>
                                            <option value="+01" title="Estados Unidos +01" >EU</option>
                                            <option value="+58" title="Venezuela +58" >VE</option>
                                        </select>
                                        <input type='tel' className='border-0' placeholder='+1 (555) 987-6543' onBlur={() => trigger("telefono")}
                                            {...register("telefono", {
                                                required: {
                                                    value: true,
                                                    message: "Telefono es requerido.",
                                                },
                                                pattern: {
                                                    value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
                                                    message: 'Formato maximo 13 digitos, No usar letras. Ejemplo: +3182286968'
                                                }
                                            })}
                                        ></input>
                                    </div>
                                    {errors.telefono && (<span className="inputError">{errors.telefono.message}</span>)}
                                </div>
                                <textarea  {...register('textArea', {
                                    required: {
                                        value: false, message: "Aceptar terminos y condiciones",
                                    }
                                })} className='textareaForm' cols='30' rows='6' placeholder='¿En qué podemos ayudarte?'></textarea>
                                <div className='flex gap-3'>
                                    <input onBlur={() => trigger("aceptTerms")} onClick={() => inputCheckbox ? setInputCheckBox(false) : setInputCheckBox(true)} checked={inputCheckbox} {...register('aceptTerms', {
                                        required: {
                                            value: true, message: "Aceptar terminos y condiciones",
                                        }
                                    })} id='checkBox' className='accent-[#2A5B45] w-auto' type='checkbox' ></input>
                                    <label>Acepto la <Link className='underline cursor-pointer font-semibold' to={'privacy'}>Política de Privacidad</Link> y los <Link className='underline cursor-pointer font-semibold' to={'/terms'}>Términos y condiciones</Link>.</label>
                                </div>
                                {errors.aceptTerms && (<span className="inputError">{errors.aceptTerms.message}</span>)}
                                <input type='submit' value={'Enviar'} className={'bg-[#2A5B45] cursor-pointer rounded text-white flex flex-row items-center justify-center w-[90px] h-[40px]'} />
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

