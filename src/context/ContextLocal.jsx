import { React, useState, createContext, useEffect } from "react";

export const ContextLocal = createContext({});

export function ContextLocalProvide({ children }) {
    const datosLocalStorage = JSON.parse(localStorage.getItem("buys")) || [];
    const [infLocalContext, setinfLocalContext] = useState(datosLocalStorage);
    const [totalContext, settotalContext] = useState(0);
    const [ivaContext, setivaContext] = useState(0);
    const [reduceContext, setreduceContext] = useState(0);
    const [priceDelivery, setpriceDelivery] = useState(0);
    const [copyGeneral, setCopyGeneral] = useState({})
    const [stateCheckoutForm, setstateCheckoutForm] = useState(false)

    const resultReduce = infLocalContext.reduce((accumulator, currentValue) => {
        accumulator.precio += currentValue.precio
        accumulator.cantidad += currentValue.cantidad
        return accumulator
    }, { cantidad: 0, precio: 0 });

    useEffect(() => {
        localStorage.setItem('buys', JSON.stringify(infLocalContext))
        if (resultReduce.cantidad > 0) {//Evaluamos si hay producto ? agregamos valor producto + envio, : muestra solo 9€ en basket sin afectar el total
            settotalContext(Number.parseFloat(reduceContext.precio + priceDelivery).toFixed(2).replace('.', ','))
            setivaContext(((reduceContext.precio + priceDelivery) * 21) / 100)
        } else {
            settotalContext(0)
            setivaContext(0)
        }
    }, [datosLocalStorage])

    useEffect(() => {//evitamos multiple rederizacion, al cambiar lo que traemos de LS setea un nuevo resulReduce
        setreduceContext(resultReduce)
    }, [infLocalContext])

    useEffect(() => {
        // Limpiar localStorage al cargar el componente
        setinfLocalContext([])
        localStorage.setItem("formulario", JSON.stringify([]));
    }, [window]);

    return (
        <ContextLocal.Provider value={{
            infLocalContext, setinfLocalContext,
            totalContext, settotalContext,
            ivaContext, setivaContext,
            reduceContext, setreduceContext,
            priceDelivery, setpriceDelivery,
            copyGeneral, setCopyGeneral,
            stateCheckoutForm, setstateCheckoutForm,

        }}>
            {children}
        </ContextLocal.Provider>
    )
}