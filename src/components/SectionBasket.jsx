import { SubTotal } from "./SubTotal";
import { Total } from "./Total";
import { TotalIva } from "./TotalIva";
import { TotalDelivery } from "./TotalDelivery";

export const SectionBasket = ({ precio, envio, totalyDelivery }) => {
  return (
    <>
      <div className=" flex flex-col gap-4">
        <h3 className=" font-semibold text-lg">Total del carrito</h3>
        <div className="w-[92%] h-[1px] bg-[#E3DED7] self-center"></div>
        <SubTotal precio={precio} />
        <TotalDelivery envio={envio} />
        <div className="w-[92%] h-[1px] bg-[#E3DED7] self-center"></div>
        <Total precio={precio} envio={envio} totalyDelivery={totalyDelivery} />
        <TotalIva precio={precio} envio={envio} />
      </div>
    </>
  );
};
