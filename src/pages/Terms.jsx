import { Link } from 'react-router-dom'

export const Terms = () => {
    return (
        <>
            <div className='flex flex-col items-center'>
                <div className='w-[40%] '>
                    <h2 className=' text-2xl text-center font-medium'>  Terminos y condiciones</h2>
                    <h2 className='overflow-y-auto text-justify h-40'>Tus datos de identificación. Los usuarios tienen que saber a quién es el propietario de la página web. Y también a quién están pagando a la hora de contratar cualquier producto o servicio.
                        Qué producto o servicio puede contratar el usuario en tu sitio web. Además de incluir una descripción detallada de las características del mismo, indica qué pasos deben seguir para adquirir tus productos o servicios. Incluye los derechos que se le reconocen y las obligaciones que debe asumir. Como, por ejemplo, algún tipo de garantía relativa a tus productos o servicios o la política de devoluciones aplicable.
                        Dejar claro si los precios incluyen impuestos o no, o si los gastos de envío están incluidos en el importe de cada compra. Además, en el caso de servicios que puedan prolongarse en el tiempo – como, por ejemplo, los que ofrece GoDaddy- es importante señalar el plazo de duración que vas a ofrecer el servicio y las condiciones a las que se somete el pago del mismo (si es un pago único o mensual).
                        Establecer qué derechos legales se conceden cuando obligas a los usuarios a registrarse para adquirir tus productos. También debes aclarar qué sucede si el usuario no cumple con el pago de facturas pendientes, etc. Es decir, incluir las condiciones de forma clara respecto del servicio, así como las limitaciones de tu negocio online.</h2>
                    <Link to={'/'} className=' text-3xl font-semibold'>Inicio</Link>
                </div>
            </div>
        </>
    )
}



