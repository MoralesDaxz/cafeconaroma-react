import { Link } from "react-router-dom";

export const Origins = () => {
  return (
    <>
      <h2> Bienvenido </h2>

      <h2>
        Producto de alta calidad cultivado en las montañas de Colombia y
        Venezuela, con notas y aromas que despertaran la mejor actitud del dia.
      </h2>

      <Link to={"/"} className=" text-3xl font-semibold">
        Inicio
      </Link>
    </>
  );
};
