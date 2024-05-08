import { React, useState, createContext, useEffect } from "react";

export const ContextLocal = createContext({});

export function ContextLocalProvide({ children }) {
    const datosLocalStorage = JSON.parse(localStorage.getItem("buys")) || [];
    /* Mirar local stora renderizaciones */
    const [infLocalContext, setInfLocalContext] = useState(datosLocalStorage);
    const [totalContext, setTotalContext] = useState(0);
    const [ivaContext, setIvaContext] = useState(0);
    const [reduceContext, setReduceContext] = useState(0);
    const [priceDelivery, setPriceDelivery] = useState(0);
    const [copyGeneral, setCopyGeneral] = useState({})
    const [stateCheckoutForm, setStateCheckoutForm] = useState(false)

    const resultReduce = infLocalContext.reduce((accumulator, currentValue) => {
        accumulator.precio += currentValue.precio
        accumulator.cantidad += currentValue.cantidad
        return accumulator
    }, { cantidad: 0, precio: 0 });

    useEffect(() => {
        localStorage.setItem('buys', JSON.stringify(infLocalContext))
        if (resultReduce.cantidad > 0) {//Evaluamos si hay producto ? agregamos valor producto + envio, : muestra solo 9€ en basket sin afectar el total
            setTotalContext(Number.parseFloat(reduceContext.precio + priceDelivery).toFixed(2).replace('.', ','))
            setIvaContext(((reduceContext.precio + priceDelivery) * 21) / 100)
            return;
        }
            setTotalContext(0)
            setIvaContext(0)
     
    }, [datosLocalStorage])

    useEffect(() => {//evitamos multiple rederizacion, al cambiar lo que traemos de LS setea un nuevo resulReduce
        setReduceContext(resultReduce)
    }, [infLocalContext])

    useEffect(() => {
        // Limpiar localStorage al cargar el componente
        setInfLocalContext([])
        localStorage.setItem("formulario", JSON.stringify([]));
    }, [window]);

    return (
        <ContextLocal.Provider value={{
            infLocalContext, setInfLocalContext,
            totalContext, setTotalContext,
            ivaContext, setIvaContext,
            reduceContext, setReduceContext,
            priceDelivery, setPriceDelivery,
            copyGeneral, setCopyGeneral,
            stateCheckoutForm, setStateCheckoutForm,

        }}>
            {children}
        </ContextLocal.Provider>
    )
}