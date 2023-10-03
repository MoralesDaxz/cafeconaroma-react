import { React, useState, createContext } from "react";

export const ContextLocal = createContext({});
const infoLocalStorage = JSON.parse(localStorage.getItem("buys")) || [];

export function ContextLocalProvide({ children }) {
    const [infLocalContext, setinfLocalContext] = useState([
        {
        id: '',
        cantidad: 1,
        urlImg: '',
        name: '',
        price: '',
    }
]);
    return (
        <ContextLocal.Provider value={{ infLocalContext, setinfLocalContext }}>
            {children}
        </ContextLocal.Provider>
    )
}