import { React, useState, createContext, useEffect } from "react";

export const ContextLocal = createContext({});

const infoLocalStorage = JSON.parse(localStorage.getItem("buys")) || [];

export function ContextLocalProvide({ children }) {
    const [totalContext, settotalContext] = useState(0);
    const [infLocalContext, setinfLocalContext] = useState(infoLocalStorage);

    useEffect(() => {localStorage.setItem('buys', JSON.stringify(infLocalContext))
    /* setsubtotalContext( prev => prev =infLocalContext.reduce((accumulator, currentValue) => {
        accumulator.precio += currentValue.precio
        accumulator.cantidad += currentValue.cantidad
        return accumulator
         }, {
           cantidad: 0,
           precio: 0
         }) ) */
}, [infoLocalStorage])

    return (
        <ContextLocal.Provider value={{ infLocalContext,totalContext, setinfLocalContext,settotalContext }}>
            {children}
        </ContextLocal.Provider>
    )
}