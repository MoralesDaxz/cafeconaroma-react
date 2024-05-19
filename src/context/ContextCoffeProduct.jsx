import { useState, createContext, useEffect, useContext } from "react";
import { getApiCoffee } from "../utils/getApiCoffee";
const apiRender = "https://api-cafeconaroma.onrender.com/products";
/* const apiVercel = "https://api-cafeconaroma.vercel.app/products/"; */

export const ContextCoffe = createContext(null);

export function ContextCoffeProvide({ children }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getApiCoffee(apiRender)
      .then((data) =>
        setProducts(
          data.products?.sort((a, b) => {
            if (!a.available ) {
              return 1;
            }
             if (!b.available) {
              return -1;
            }
            return a.price - b.price;
          })
        )
      )
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <ContextCoffe.Provider value={{ products, setProducts }}>
      {children}
    </ContextCoffe.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export const useContextCoffee = () => useContext(ContextCoffe);
