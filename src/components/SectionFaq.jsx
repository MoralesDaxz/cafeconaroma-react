import { useState } from "react";
import arrowDown from "../assets/flecha-abajo.svg";
import { ArrowRigth } from "./ArrowRigth";
import { Link } from "react-router-dom";
const dataFaq = [
  {
    question: "¿Cómo hago el pedido?",
    answer:
      "Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.",
  },
  {
    question: "¿Por qué los precios son tan bajos?",
    answer:
      "Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.",
  },
  {
    question: "¿Es posible enviar café a mi oficina?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo unde quod corporis, tempora nesciunt dolore quos laboriosam beatae nulla eos! Alias adipisci mollitia est libero facere repudiandae, dolore magnam dicta!",
  },
];
export const SectionFaq = () => {
  const [answerClass, setanswerClass] = useState(null);
  return (
    <>
      <section className="flex flex-col items-center  bg-[#2A5B45] py-12 gap-6">
        <div className="font-medium text-2xl text-white">
          <h2>Preguntas frecuentes</h2>
        </div>
        <div className=" flex flex-col gap-4 w-[668px]">
          {dataFaq.map((item, indice) => {
            const isExpanded = indice == answerClass;
            return (
              <article
                onClick={() => setanswerClass(isExpanded ? null : indice)}
                key={indice}
                className="bg-[#F7F5F3] p-6 rounded-[10px] cursor-pointer"
              >
                <div className="flex flex-row justify-between ">
                  <h3 className=" font-semibold text-lg text-[#2B2A2B]">
                    {item.question}
                  </h3>
                  <img
                    className={
                      isExpanded
                        ? " duration-[0.8s] rotate-180 "
                        : "duration-[0.7s]"
                    }
                    src={arrowDown}
                    alt="flecha-abajo"
                  />
                </div>
                <div
                  style={{
                    height: isExpanded ? "80px" : "0",
                    overflow: "hidden",
                    transition: "height 0.6s ease",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "16px",
                  }}
                >
                  <div className="my-[16px] bg-[#E3DED7] min-w-full h-[1px]"></div>
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
        <Link to={"/Contact"}>
          <ArrowRigth
            color={"white"}
            text={"Resolvemos tus dudas"}
          ></ArrowRigth>
        </Link>
      </section>
    </>
  );
};
