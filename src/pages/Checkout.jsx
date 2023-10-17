import { React, useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";
import iconBizum from '../assets/bizum.png'
import { Button } from '../components/Button';
import { SectionBasket } from '../components/SectionBasket';
import { ContextLocal } from "../context/ContextLocal";
import { paises } from '../utils/paises.js'
/* const selectValue = document.getElementsByTagName('select')[0].value */
export const Checkout = () => {

  const { infLocalContext, setinfLocalContext,
    totalContext, settotalContext,
    ivaContext, setivaContext,
    reduceContext, setreduceContext,
    priceDelivery, setpriceDelivery,
    copyGeneral, setCopyGeneral,
    stateCheckoutForm, setstateCheckoutForm
  } = useContext(ContextLocal);

  const { register, handleSubmit, formState: { errors } } = useForm({})
  const [inputKind, setinputKind] = useState(false)
  const [stateSelect, setstateSelect] = useState('')
  const [stateForm, setStateForm] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  useEffect(() => {
    setCopyGeneral({
      total: totalContext,
      iva: ivaContext,
      envio: priceDelivery,
      localStorage: infLocalContext
    })
  }, [totalContext || reduceContext.cantidad])



  const fnOnSubmit = handleSubmit((data) => {

    setstateCheckoutForm(true)
    if (data.inputRadio === 'on') {
      data.inputRadio = inputKind
    }
     if (inputKind === 'tarjeta' &&  data.codigoTj =='') {
      setstateCheckoutForm(false)
    }else{} 
  
    
 
          localStorage.setItem('formularioCheckout', JSON.stringify([data]));
          localStorage.setItem(('pedido'), JSON.stringify(copyGeneral))

          console.log(data);
        
          
  })
  useEffect(() => {
    fnOnSubmit()
  }, [window.scroll()]);
  return (
    <>
      <div className='bg-[#FFFFFF] w-full min-h-[100vh] flex flex-col items-center px-10 pb-10 pt-[7rem]'>{/* 535px */}
        <h2 className=' mb-6 font-medium text-2xl text-[#2A5B45]'>Checkout</h2>
        <form className='flex flex-col w-full' onSubmit={fnOnSubmit}>
          <div className='flex flex-row justify-center gap-6'>
            <div className='w-[60%]  flex flex-col gap-6'>
              <h3 className=' font-semibold text-lg'>Seleccionar método de pago</h3>
              <div className='flex flex-row items-center gap-4 text-sm'>
                <input className=' h-4 w-4 accent-[#2A5B45]' onClick={() => {setinputKind('tarjeta'); fnOnSubmit; setstateCheckoutForm(false)}} type='radio' name='checkout' {...register("inputRadio", {
                  required: {
                    value: true,
                    message: "Campo requerido.",
                  },
                })}></input>
                <div className='flex flex-col gap-1'>
                  <p className='font-semibold '>Tarjeta de débito</p>
                  <p>Opción estándar sin seguimiento</p>
                </div>
              </div>
              {inputKind === 'tarjeta' ? <div className='w-[279px] transition-all ease  duration-[500ms] '>
                <div className={'flex flex-col gap-2'}>
                  <div className='inputTjDebito'>
                    <label >Titular</label>
                    <input  {...register('titularTj', {
                      required: {
                        value: true,
                        message: "Campo requerido.",
                      },
                      pattern: {
                        value: /[a-zA-Z]/,
                        message: 'Formato no valido.'
                      },
                      minLength: {
                        value: 3,
                        message: "Debe contener al menos 3 caracteres.",
                      },
                      maxLength: {
                        value: 48,
                        message: "Logitud maxima 48 caracteres.",
                      },
                      onBlur: (e) => {e.target.value ===''?setstateCheckoutForm(false):'';fnOnSubmit()},
                    })} placeholder='Nombre del titular'></input>
                  </div>
                  {errors.titularTj && <span className='inputError'>{errors.titularTj.message}</span>}
                  <div className='inputTjDebito'>
                    <label>Número de la tarjeta</label>
                    <input  {...register('numeroTj', {
                      required: {
                        value: true,
                        message: "Campo requerido.",
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: 'Este campo solo acepta numeros',
                      },
                      minLength: {
                        value: 16,
                        message: 'Faltan digitos, Minimo 16.'
                      },
                      maxLength: {
                        value: 16,
                        message: 'Maximo 16 digitos.',
                      },
                      onBlur: (e) => {e.target.value ===''?setstateCheckoutForm(false):'';fnOnSubmit()},
                    })} placeholder='1234 1234 1234 1234'></input>
                  </div>
                  {errors.numeroTj && <span className='inputError'>{errors.numeroTj.message}</span>}
                  <div className='flex flex-row gap-6'>
                    <div className='inputTjDebito'>
                      <label>Fecha de caducidad</label>
                      <input {...register('fechaTj', {
                        required: {
                          value: true,
                          message: "Campo requerido.",
                        },
                        pattern: {
                          
                          value: /^(0[1-9]|1[0-2])\/(0[0-9]|1[0-9]|2[3-9])$/, 
                          message: 'Fecha invalida. MM/YY'
                        },
                        onBlur: (e) => {e.target.value ===''?setstateCheckoutForm(false):'';fnOnSubmit()},
                      })} placeholder='MM/YY'></input>
                    {errors.fechaTj && <span className='inputError'>{errors.fechaTj.message}</span>}
                    </div>
                    <div className='inputTjDebito'>
                      <label>CVC</label>
                      <input {...register('codigoTj', {
                        required: {
                          value: true,
                          message: "Campo requerido",
                        },
                        pattern: {
                          value: /^[0-9]+$/,
                          message: 'Este campo solo acepta numeros',
                        },
                        minLength: {
                          value: 3,
                          message: 'Faltan digitos, Minimo 3.'
                        },
                        maxLength: {
                          value: 3,
                          message: 'Maximo 3 digitos.'
                        },
                        onBlur: (e) => {e.target.value ===''?setstateCheckoutForm(false):'';fnOnSubmit()},
                      })} placeholder='123'></input>
                  {errors.codigoTj && <span className='inputError'>{errors.codigoTj.message}</span>}
                    </div>
                  </div>
                </div>

              </div> : <div className='h-[0px] transition-all ease-in-out  opacity-0  duration-[500ms]'></div>}
              {errors.inputRadio && <span className='inputError'>{errors.inputRadio.message}</span>}
              <div className={inputKind === 'tarjeta' ? 'w-[98%] h-[1px] bg-[#E3DED7] self-center mt-[24px]' : 'w-[98%] h-[1px] bg-[#E3DED7] self-center '}  ></div>
              {/* Jugamos con el gap definido en padre, si se despliega  MT-- sino dejamos el gap del padre */}
              <div className='flex flex-row items-center gap-4 text-sm bg-white'>
                <input onClick={() => { setinputKind('banco');fnOnSubmit() }} className='h-4 w-4 accent-[#2A5B45]' type='radio' name='checkout' {...register("inputRadio", {
                  required: {
                    value: true,
                    message: "Campo requerido.",
                  },
                  onBlur: (e) => {e.target.value === ''?setstateCheckoutForm(false):'';fnOnSubmit()},
                })}></input>
                <div className='flex flex-col gap-1'>
                  <p className='font-semibold '>Transferencia bancaria a la cuenta ES12 1234 1234 123457890</p>
                  {inputKind === 'banco' ? <p>Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p> : ''}
                </div>
              </div>
              {errors.inputRadio && <span className='inputError'>{errors.inputRadio.message}</span>}
              <div className=' w-[98%] h-[1px] bg-[#E3DED7] self-center'></div>
              <div className='flex flex-row items-center gap-4 text-sm'>
                <input className='h-4 w-4 accent-[#2A5B45]' onClick={() => { setinputKind('bizum');fnOnSubmit()}} type='radio' name='checkout' {...register("inputRadio", {
                  required: {
                    value: true,
                    message: "Campo requerido.",
                  },
                  onBlur: (e) => {e.target.value === ''?setstateCheckoutForm(false):'';fnOnSubmit()},
                })}></input>
                <div className='flex flex-row gap-4 items-center'>
                  <p className='font-semibold '>Bizum</p>
                  {inputKind === 'bizum' ? <img src={iconBizum}></img> : ''}

                </div>
              </div>
              {errors.inputRadio && <span className='inputError'>{errors.inputRadio.message}</span>}
              <div className=' transition-all ease-in opacity-100 duration-1000 w-[521px] flex flex-col gap-2'>
                <h3 className=' font-semibold text-lg'>Dirección de envío</h3>
                <div className='inputTjDebito'>
                  <label>Nombres</label>
                  <input className='checkNombre' placeholder='' {...register('checkNombre', {
                    required: {
                      value: true,
                      message: "Campo requerido.",
                    },
                    pattern: {
                      value: /[a-zA-Z]/,
                      message: 'Formato no valido.'
                    },
                    minLength: {
                      value: 3,
                      message: "Debe contener al menos 3 caracteres.",
                    },
                    maxLength: {
                      value: 48,
                      message: "Este campo puede tener maximo 48 caracteres.",
                    },
                    onBlur: (e) => {e.target.value === ''?setstateCheckoutForm(false):'';fnOnSubmit()},
                  })}></input>
                </div>
                {errors.checkNombre && <span className='inputError'>{errors.checkNombre.message}</span>}
                <div className='inputTjDebito'>
                  <label>Apellidos</label>
                  <input className='inputForm' placeholder='' {...register('checkApellido', {
                    required: {
                      value: true,
                      message: "Campo requerido.",
                    },
                    pattern: {
                      value: /[a-zA-Z]/,
                      message: 'Formato no valido.'
                    },
                    minLength: {
                      value: 3,
                      message: "Debe contener al menos 3 caracteres.",
                    },
                    maxLength: {
                      value: 30,
                      message: "Este campo puede tener maximo 30 caracteres.",
                    },
                    onBlur: (e) => {e.target.value === ''?setstateCheckoutForm(false):'';fnOnSubmit()},
                  })}></input>
                </div>
                {errors.checkApellido && <span className='inputError'>{errors.checkApellido.message}</span>}
                <div className='inputTjDebito'>
                  <label>Teléfono</label>
                  <input className='inputForm' placeholder='+34 600 6000 600'
                    {...register("checkTelefono", {
                      required: {
                        value: true,
                        message: "Campo requerido.",
                      },
                      pattern: {
                        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im,
                        message: 'No usar letras. Ejemplo: +34614092275'
                      },
                      onBlur: (e) => {e.target.value === ''?setstateCheckoutForm(false):'';fnOnSubmit()},
                    })}></input>
                </div>
                {errors.checkTelefono && <span className='inputError'>{errors.checkTelefono.message}</span>}
                <div className='inputTjDebito'>
                  <label>Email</label>
                  <input className='inputForm' placeholder=''  {...register("checkEmail", {
                    required: {
                      value: true,
                      message: "Campo requerido.",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                      message: "Formato de correo no valido, Ejemplo: correo@corporation.com",
                    },
                    onBlur: (e) => {e.target.value === ''?setstateCheckoutForm(false):'';fnOnSubmit()},
                  })} ></input>
                </div>
                {errors.checkEmail && <span className='inputError'>{errors.checkEmail.message}</span>}
                <div className='inputTjDebito'>
                  <label>País</label>
                  <select onChange={(e) => { setstateSelect(e.value); console.log(e) }} className='inputForm'  {...register("checkPais", {
                    required: {
                      value: true,
                      message: "Seleccione pais.",
                    },
                    onBlur: (e) => {e.target.value === ''?setstateCheckoutForm(false):'';fnOnSubmit()},
                  })}>
                    <option value="0" disabled selected hidden>Seleccionar</option>
                    {paises.map((item, indice) => {
                      return (
                        <option key={indice} value={item.shortName}>{item.shortName}</option>
                      )
                    })}
                  </select>
                </div>

                { }
                <div className='flex flex-row justify-between'>
                  <div className='inputTjDebito'>
                    <label>Población</label>
                    <input placeholder='' {...register('checkPoblacion', {
                      required: {
                        value: true,
                        message: "Campo requerido.",
                      },
                      pattern: {
                        value: /[A-Za-z]/,
                        message: 'Formato no valido.'
                      },
                      minLength: {
                        value: 4,
                        message: "Debe contener al menos 3 caracteres.",
                      },
                      maxLength: {
                        value: 20,
                        message: "Este campo puede tener maximo 20 caracteres.",
                      },
                      onBlur: (e) => {e.target.value === ''?setstateCheckoutForm(false):'';fnOnSubmit()},
                    })}></input>
                    {errors.checkPoblacion && <span className='inputError'>{errors.checkPoblacion.message}</span>}
                  </div>
                  <div className='inputTjDebito'>
                    <label>CP</label>
                    <input placeholder='123'   {...register("checkPostal", {
                      required: {
                        value: true,
                        message: "Campo requerido.",
                      },
                      pattern: {
                        value: /[0-9]/,
                        message: 'Formato invalido, (solo numeros)'
                      },
                      minLength: {
                        value: 3,
                        message: 'Minimo 3 digitos'
                      },
                      maxLength: {
                        value: 6,
                        message: 'Maximo 6 digitos'
                      },
                      onBlur: (e) => {e.target.value === ''?setstateCheckoutForm(false):'';fnOnSubmit()},
                    })}></input>
                    {errors.checkPostal && <span className='inputError'>{errors.checkPostal.message}</span>}
                  </div>
                </div>
                <div className='flex flex-row gap-6'>
                  <div className='inputTjDebito'>
                    <label>Calle</label>
                    <input placeholder=''
                      {...register("checkCalle", {
                        required: {
                          value: true,
                          message: "Campo requerido.",
                        },
                        maxLength: {
                          value: 40,
                          message: 'Maximo 40 caracteres.'
                        },
                        onBlur: (e) => {e.target.value === ''?setstateCheckoutForm(false):'';fnOnSubmit()},
                      })}>
                    </input>
                    {errors.checkCalle && <span className='inputError'>{errors.checkCalle.message}</span>}
                  </div>
                  <div className='inputTjDebito'>
                    <label>Nº</label>
                    <input placeholder=''  {...register("checkNCalle", {
                      required: {
                        value: true,
                        message: "Campo requerido.",
                      },
                      maxLength: {
                        value: 15,
                        message: 'Maximo 15 caracteres.'
                      },
                      onBlur: (e) => {e.target.value === ''?setstateCheckoutForm(false):'';fnOnSubmit()},
                    })}></input>
                    {errors.checkNCalle && <span className='inputError'>{errors.checkNCalle.message}</span>}
                  </div>
                  <div className='inputTjDebito'>
                    <label>Piso</label>
                    <input placeholder='' {...register("checkPiso", {
                      required: {
                        value: true,
                        message: "Campo requerido.",
                      },
                      maxLength: {
                        value: 5,
                        message: 'Maximo 5 caracteres.'
                      },
                      onBlur: (e) => {e.target.value === ''?setstateCheckoutForm(false):'';fnOnSubmit()},
                    })}></input>
                    {errors.checkPiso && <span className='inputError'>{errors.checkPiso.message}</span>}
                  </div>
                  <div className='inputTjDebito'>
                    <label>Puerta</label>
                    <input placeholder=''{...register("checkPuerta", {
                      required: {
                        value: true,
                        message: "Campo requerido.",
                      },
                      minLength: {
                        value: 2,
                        message: 'Minimo 2 caracteres.'
                      },
                      maxLength: {
                        value: 5,
                        message: 'Maximo 5 caracteres.'
                      },
                      onBlur: (e) => {e.target.value ===''?setstateCheckoutForm(false):'';fnOnSubmit()},
                    })}></input>
                    {errors.checkPuerta && <span className='inputError'>{errors.checkPuerta.message}</span>}
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[30%]'>
              <div className=''>
                <div className='bg-[#F7F5F3] w-[30%] p-6 fixed z-60 '>
                  <SectionBasket precio={reduceContext.precio} totalyDelivery={totalContext} envio={priceDelivery} />
                 <div className='flex flex-row gap-7 mt-4'>
                  {stateCheckoutForm?<Link  to={stateCheckoutForm && infLocalContext.length>0?'/success':'/store'} ><input type='submit' value={stateCheckoutForm && infLocalContext.length>0?'Pagar y realizar pedido':'Seguir comprando'} className={'bg-[#2A5B45] opacity-30 cursor-pointer hover:opacity-100 w-[196px] h-[40px] flex flex-col justify-center items-center rounded text-[white] font-semibold text-sm'}  /> </Link>
                  :''}
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
{/* <div className=''>
            <div className='bg-[#F7F5F3] w-[30%] p-6 fixed z-60 '>
              <SectionBasket precio={reduceContext.precio} totalyDelivery={totalContext} envio={priceDelivery} />
              <div className='flex flex-row gap-7 mt-4'>
                {reduceContext.cantidad >= 1 ? <Link  to={'/success'}> <Button  style={'bg-[#2A5B45] opacity-30 hover:opacity-100 w-[196px] h-[40px] flex flex-col justify-center items-center rounded text-[white] font-semibold text-sm'} text={'Pagar y realizar pedido'} /></Link> : <Link to={'/store'}> <Button style={'bg-[#2A5B45]  w-[196px] h-[40px] flex flex-col justify-center items-center rounded text-[white] font-semibold text-sm'} text={'Volver a Tienda'} /></Link>}
              </div>
            </div>
          </div> */}

{/*                 <input {...register('nombre', { required: 'This field is required' })} placeholder='Nombre'></input>
                <p className='text-[red]'>{errors.nombre?.message}</p>
                <input {...register('apellido', { required: 'This field is required', minLength: 3 })} placeholder='Apellido'></input>
                <p className='text-[red]'>{errors.apellido?.message}</p>
                <input type="number" {...register("edad", { required: 'This field is required' })} placeholder='Edad' />
                <p className='text-[red]'>{errors.edad?.message}</p>
                <input type='submit'></input>

                <input type='radio' name='checkout'></input>
                <input {...register('nombre', { required: 'This field is required' })} placeholder='Nombre'></input>
                <p className='text-[red]'>{errors.nombre?.message}</p>
                <input {...register('apellido', { required: 'This field is required', minLength: 3 })} placeholder='Apellido'></input>
                <p className='text-[red]'>{errors.apellido?.message}</p>
                <input type="number" {...register("edad", { required: 'This field is required' })} placeholder='Edad' />
                <p className='text-[red]'>{errors.edad?.message}</p>
                <input type='submit'></input>
                <input type='radio' name='checkout'></input> */}
