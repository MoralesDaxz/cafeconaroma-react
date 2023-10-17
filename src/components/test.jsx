import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setvalue,
    reset
  } = useForm();
  

  const onSubmit = handleSubmit((data) => {
    let actualForm = JSON.parse(localStorage.getItem('info'))|| [];
    if (!Array.isArray(actualForm)) {
    
      actualForm = [];
    }
    actualForm.push(data)
    localStorage.setItem('info', JSON.stringify(actualForm))
    alert('Enviando formulario...')
    reset()
  });
  return (
    <div className="flex w-[36.75em] pt-[2em] pr-[2em] pb-[2em] pl-[3em] flex-col justify-center items-center bg-[#fff] shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)]">
      <form
        action=""
        onSubmit={onSubmit}
        className="flex flex-col items-start gap-[1.5em] w-11/12 group/input "
      >
        <div className="flex flex-col items-start gap-[0.25em] w-full">
          <label
            htmlFor="nombre"
            className="text-[#374151] text-[0.75em] not-italic font-normal"
          >
            Nombre completo
          </label>
          <input
            type="text"
            {...register("nombre", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              minLength: {
                value: 2,
                message: "Debe contener al menos dos caracteres",
              },
              maxLength: {
                value: 20,
                message: "Este campo puede tener maximo 20 caracteres",
              },
            })}
            id="nombre"
            className="flex h-[2.5em] py-[0.56em] px-[0.81em] items-center rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]"
          />
          {errors.nombre && (
            <span className="text-[red] text-[0.7em]">
              {errors.nombre.message}
            </span>
          )}
        </div>
        <div className="flex flex-col items-start gap-[0.25em] w-full">
          <label
            htmlFor="email"
            className="text-[#374151] text-[0.75em] not-italic font-normal"
          >
            Email
          </label>
          <input
            type="text"
            {...register("email", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Correo no valido",
              },
              // En general, un correo electrónico debe tener los siguientes elementos
              // Empezar por el identificador o nombre del usuario ^\w+([.-_+]?\w+)*
              // Seguido por el símbolo de la arroba @
              // Por último, el nombre del dominio del correo \w+([.-]?\w+)*(\.\w{2,10})+$
            })}
            id="email"
            className="flex h-[2.5em] py-[0.56em] px-[0.81em] items-center rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B]"
          />
          {errors.email && (
            <span className="text-[red] text-[0.7em]">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col items-start gap-[0.25em] w-full">
          <label
            htmlFor="telefono"
            className="text-[#374151] text-[0.75em] not-italic font-normal"
          >
            Teléfono
          </label>
          <div className="flex  w-full box-border border-solid border-[1px] border-[#D1D5DB] shadow-sm focus:outline-[#3F8F6B] rounded-[6px]">
<select
              name="codigo"
              {...register("codigoArea")}
              id="telefono"
              className="flex h-[2.5em] py-[0.56em] px-[0.81em] items-center  border-0 focus:outline-none text-[#111827] rounded-[6px]"
            >
              <option value="+1">US</option>
              <option value="+34">ES</option>
              <option value="+32">BEL</option>
              <option value="+43">AU</option>
            </select>
            <input
              type="tel"
              {...register("telefono", {
                required: {
                  value: true,
                  message: 'Este campo es requerido'
                },
              })}
              id="telefono"
              className="flex h-[2.5em] py-[0.56em] px-[0.81em] items-center border-0 focus:outline-none  w-full rounded-[6px]"
              placeholder="+1 (555) 987-6543"
            />
          </div>
            {errors.telefono && (
            <span className="text-[red] text-[0.7em]">
              {errors.telefono.message}
            </span>
          )}
        </div>
        <div>
          <textarea
            name=""
            id="messageArea"
            {...register("messageArea")}
            cols="60"
            rows="10"
            className="flex h-[7.6em] py-[0.56em] px-[0.81em] items-center rounded-[6px] border-solid border-[1px] border-[#D1D5DB] shadow-sm w-full focus:outline-[#3F8F6B] mt-[2.75em]"
            placeholder="¿En qué podemos ayudarte?"
          ></textarea>
        </div>
        <div>
          <div className="flex items-start gap-[0.75em] w-full">
          <input
            type="checkbox"
            id="politicas"
            {...register("politicas", {
              required: {
                value: true,
                message: 'Debe aceptar las politicas de privacidad y los Terminos y condiciones'
              }
            })}
            className="w-[1em] h-[1.25em] border-[#D1D5DB] accent-[#2A5B45]"
          />
          <label
            htmlFor="politicas"
            className="text-[0.9em] not-italic font-normal text-[#374151] w-full flex gap-[0.2em]"
          >
            Acepto la
            <Link to={"/politica_de_privacidad"}>
              <p className="text-[0.9em] not-italic font-semibold text-[#374151]">
                Política de Privacidad
              </p>
            </Link>
            y los
            <Link to={"/terminos_y_condiciones"}>
              <p className="text-[0.9em] not-italic font-semibold text-[#374151]">
                Términos y condiciones.
              </p>
            </Link>
          </label>
        </div>
          {errors.politicas && (
            <span className="text-[red] text-[0.7em]">
              {errors.politicas?.message}
            </span>
          )}
        </div>
        
        <Button style={"comprarCafe"} text={"Enviar"} />
      </form>
    </div>
  );
};

export default Form;