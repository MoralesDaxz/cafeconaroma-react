import { Link } from "react-router-dom";

export const Cookies = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-[40%] ">
          <h2 className=" text-2xl text-center font-medium">
            {" "}
            Politica de Cookies
          </h2>
          <h2 className="overflow-y-auto text-justify h-40">
            Uno de los principales requisitos de las leyes de privacidad es
            notificar a los usuarios sobre los datos que recopilas, con qué
            medios y con qué fines. Tu página de política de cookies es el lugar
            habitual para mostrar esa información. También se debe mantener
            actualizada, ya que tanto tu sitio web, como las cookies, otras
            tecnologías de seguimiento, y hasta el marco legal cambian.
            Cookiebot CMP puede ayudarte con eso. Detecta, te informa, y
            gestiona las cookies con tres potentes y automáticas funciones. Te
            ayuda a informar de forma adecuada tu uso de cookies y mantener esa
            información actualizada. El uso de sitio Web implica la aceptación
            de esta Política de Privacidad así como las condiciones incluidas en
            el Aviso Legal.
          </h2>

          <Link to={"/"} className=" text-3xl font-semibold">
            Inicio
          </Link>
        </div>
      </div>
    </>
  );
};
