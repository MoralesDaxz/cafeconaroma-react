import { useContext } from "react";
import { Product } from "./Product";
import { AddOrSubs } from "./AddOrSubs";
import { ContextLocal } from "../context/ContextLocal";
export const SectionProductBasket = () => {
  const { infLocalContext } = useContext(ContextLocal);

  return (
    <>
      <div className="flex flex-col gap-6 mb-6">
        {infLocalContext?.map((item, indice) => {
          if (item.cantidad > 0 && indice >= 0) {
            return (
              <Product
                line={
                  <div className="w-[98%] h-[1px] bg-[#E3DED7] self-center"></div>
                }
                key={item.id}
                id={item.id}
                imagen={item.imagen}
                cantidad={item.cantidad}
                precio={item.precio}
                nombre={item.nombre}
                signos={
                  <AddOrSubs
                    cantidad={item.cantidad}
                    id={item.id}
                    nombre={item.nombre}
                    precio={item.precio}
                    imagen={item.imagen}
                  />
                }
              />
            );
          }
        })}
      </div>
    </>
  );
};
