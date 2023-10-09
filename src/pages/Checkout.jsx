import { React, useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";
import iconBizum from '../assets/bizum.png'
import { Button } from '../components/button/Button';
import { SectionBasket } from '../components/sectionBasket/SectionBasket';
import { ContextLocal } from "../context/ContextLocal";
import { paises } from '../../src/utils/paises.js'
export const Checkout = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { infLocalContext, setinfLocalContext,
    totalContext, settotalContext,
    ivaContext, setivaContext,
    reduceContext, setreduceContext,
    priceDelivery, setpriceDelivery } = useContext(ContextLocal);
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { nombre: '', apellido: '' } })
  return (
    <>
      <div className='bg-[#FFFFFF] min-h-[100vh] flex flex-col items-center px-10 pb-10 pt-[7rem]'>{/* 535px */}
        <h2 className=' mb-6 font-medium text-2xl text-[#2A5B45]'>Checkout</h2>
        <div className='w-full  flex flex-row gap-6 '>
          <div className='w-[65%] px-2'>
            <div className='flex flex-col gap-6'>
              <h3 className=' font-semibold text-lg'>Seleccionar método de pago</h3>

              <form className='flex flex-col gap-6' onSubmit={handleSubmit((data) => {
          
              })}>
                <div className='flex flex-row items-center gap-4 text-sm'>
                  <input className=' h-4 w-4 accent-[#2A5B45]' type='radio' name='checkout'></input>
                  <div className='flex flex-col gap-1'>
                    <p className='font-semibold '>Tarjeta de débito</p>
                    <p>Opción estándar sin seguimiento</p>
                  </div>
                </div>
                <div className='w-[279px] flex flex-col gap-2'>
                  <div className='inputTjDebito'>
                    <label>Titular</label>
                    <input placeholder='Nombre del titular'></input>
                  </div>
                  <div className='inputTjDebito'>
                    <label>Número de la tarjeta</label>
                    <input placeholder='1234 1234 1234 1234'></input>
                  </div>
                  <div className='flex flex-row gap-6'>
                    <div className='inputTjDebito'>
                      <label>Fecha de caducidad</label>
                      <input placeholder='MM / YY'></input>
                    </div>
                    <div className='inputTjDebito'>
                      <label>CVC</label>
                      <input placeholder='123'></input>
                    </div>
                  </div>
                </div>
                <div className='w-[98%] h-[1px] bg-[#E3DED7] self-center'></div>
                <div className='flex flex-row items-center gap-4 text-sm'>
                  <input className=' h-4 w-4 accent-[#2A5B45]' type='radio' name='checkout'></input>
                  <div className='flex flex-col gap-1'>
                    <p className='font-semibold '>Transferencia bancaria a la cuenta ES12 1234 1234 123457890</p>
                    <p>Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p>
                  </div>
                </div>
                <div className='w-[98%] h-[1px] bg-[#E3DED7] self-center'></div>
                <div className='flex flex-row items-center gap-4 text-sm'>
                  <input className=' h-4 w-4 accent-[#2A5B45]' type='radio' name='checkout'></input>
                  <div className='flex flex-row gap-4 items-center'>
                    <p className='font-semibold '>Bizum</p>
                    <img src={iconBizum}></img>
                  </div>
                </div>
                <div className='w-[521px] flex flex-col gap-2'>
                  <h3 className=' font-semibold text-lg'>Dirección de envío</h3>
                  <div className='inputTjDebito'>
                    <label>Nombres</label>
                    <input placeholder=''></input>
                  </div>
                  <div className='inputTjDebito'>
                    <label>Apellidos</label>
                    <input placeholder=''></input>
                  </div>
                  <div className='inputTjDebito'>
                    <label>Teléfono</label>
                    <input placeholder='+34 600 6000 600'></input>
                  </div>
                  <div className='inputTjDebito'>
                    <label>Email</label>
                    <input placeholder=''></input>
                  </div>
                  <div className='inputTjDebito'>
                    <label>País</label>
                    <select className=''>
                      <option value="0" disabled selected hidden>Seleccionar</option>
                      {paises.map(item => {
                        return (
                          <option value={item.shortName}>{item.shortName}</option>
                        )
                      })}
                    </select>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <div className='inputTjDebito'>
                      <label>Población</label>
                      <input placeholder='MM / YY'></input>
                    </div>
                    <div className='inputTjDebito'>
                      <label>CP</label>
                      <input placeholder='123'></input>
                    </div>
                  </div>
                  <div className='flex flex-row gap-6'>
                    <div className='inputTjDebito'>
                      <label>Calle</label>
                      <input placeholder='MM / YY'></input>
                    </div>
                    <div className='inputTjDebito'>
                      <label>Nº</label>
                      <input placeholder='123'></input>
                    </div>
                    <div className='inputTjDebito'>
                      <label>Piso</label>
                      <input placeholder='123'></input>
                    </div>
                    <div className='inputTjDebito'>
                      <label>Puerta</label>
                      <input placeholder='123'></input>
                    </div>
                  </div>
                </div>
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
              </form>

            </div>
          </div>
          <div className=''>
            <div className='bg-[#F7F5F3] w-[30%] p-6 fixed z-60 '>
              <SectionBasket precio={reduceContext.precio} totalyDelivery={totalContext} envio={priceDelivery} />
              <div className='flex flex-row gap-7 mt-4'>

              {reduceContext.cantidad >= 1? <Link to={'/Check'}> <Button style={'bg-[#2A5B45] opacity-30 hover:opacity-100 w-[196px] h-[40px] flex flex-col justify-center items-center rounded text-[white] font-semibold text-sm'} text={'Pagar y realizar pedido'} /></Link>:<Link to={'/store'}> <Button style={'bg-[#2A5B45]  w-[196px] h-[40px] flex flex-col justify-center items-center rounded text-[white] font-semibold text-sm'} text={'Volver a Tienda'} /></Link>}
               

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

