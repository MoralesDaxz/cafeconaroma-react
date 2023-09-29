import { React, useState, createContext,useEffect } from "react";
import { getApiCoffee } from "../utils/getApiCoffee";
const apiCoffe = "https://cafe-de-altura.vercel.app/api/products"

export const ContextCoffe = createContext(null);

export function ContextCoffeProvide({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getApiCoffee(apiCoffe).then(param => { setProducts(param.products) })
  }, []);
  return (
    <ContextCoffe.Provider value={{ products, setProducts }}>
      {children}
    </ContextCoffe.Provider>
  )
}