import { React, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link,Navigate } from "react-router-dom";
import iconBizum from "../assets/bizum.png";
import { Button } from "../components/Button";
import { SectionBasket } from "../components/SectionBasket";
import { ContextLocal } from "../context/ContextLocal";
import { paises } from "../utils/paises.js";

export const Checkout = () => {
  const {
infLocalContext,setInfLocalContext,
totalContext,setTotalContext,
ivaContext,setIvaContext,
reduceContext,setReduceContext,
priceDelivery,setPriceDelivery,
copyGeneral,setCopyGeneral,
stateCheckoutForm,setStateCheckoutForm,
} = useContext(ContextLocal);

const [inputKind, setinputKind] = useState(false);
const [stateSelect, setstateSelect] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({});
  
console.log(errors?'No hay errores':'Hay error');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setCopyGeneral({
      total: totalContext,
      iva: ivaContext,
      envio: priceDelivery,
      localStorage: infLocalContext,
    });
  }, [totalContext || reduceContext.cantidad]);

  const fnOnSubmit = handleSubmit((data) => {

    setStateCheckoutForm('habil');

    if (data.inputRadio === "on") {
      data.inputRadio = inputKind;
    }
    localStorage.setItem("formularioCheckout", JSON.stringify([data]));
    localStorage.setItem("pedido", JSON.stringify(copyGeneral));

  });
  return (
    <>
      <div className="bg-[#FFFFFF] w-full min-h-[100vh] flex flex-col items-center px-10 pb-10 pt-[7rem]">
        <h2 className=" mb-6 font-medium text-2xl text-[#2A5B45]">Checkout</h2>
        <form className="flex flex-col w-full" onSubmit={fnOnSubmit}>
          <div className="flex flex-row justify-center gap-6">
            <div className="w-[60%]  flex flex-col gap-6">
              <h3 className=" font-semibold text-lg">
                Seleccionar método de pago
              </h3>
              <div className="flex flex-row items-center gap-4 text-sm">
                <input
                  className=" h-4 w-4 accent-[#2A5B45]"
                  onClick={() => {
                    setinputKind("tarjeta");
                  }}
                  type="radio"
                  name="checkout"
                  {...register("inputRadio", {
                    required: {
                      value: true,
                      message: "Campo requerido.",
                    },
                  })}
                  onBlur={() => trigger("inputRadio")}
                ></input>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold ">Tarjeta de débito</p>
                  <p>Opción estándar sin seguimiento</p>
                </div>
              </div>
              {inputKind === "tarjeta" ? (
                <div className="w-[279px] transition-all ease  duration-[500ms] ">
                  <div className={"flex flex-col gap-2"}>
                    <div className="inputTjDebito">
                      <label>Titular</label>
                      <input
                        {...register("titularTj", {
                          required: {
                            value: true,
                            message: "Campo requerido.",
                          },
                          pattern: {
                            value: /[a-zA-Z]/,
                            message: "Formato no valido.",
                          },
                          minLength: {
                            value: 3,
                            message: "Debe contener al menos 3 caracteres.",
                          },
                          maxLength: {
                            value: 48,
                            message: "Logitud maxima 48 caracteres.",
                          },
                          onBlur: (e) => {
                            e.target.value === ""
                              ? setStateCheckoutForm(false)
                              : "";
                            fnOnSubmit();
                          },
                        })}
                        placeholder="Nombre del titular"
                        onBlur={() => trigger("titularTj")}
                      ></input>
                    </div>
                    {errors.titularTj && (
                      <span className="inputError">
                        {errors.titularTj.message}
                      </span>
                    )}
                    <div className="inputTjDebito">
                      <label>Número de la tarjeta</label>
                      <input
                        {...register("numeroTj", {
                          required: {
                            value: true,
                            message: "Campo requerido.",
                          },
                          pattern: {
                            value: /^[0-9]+$/,
                            message: "Este campo solo acepta numeros",
                          },
                          minLength: {
                            value: 16,
                            message: "Faltan digitos, Minimo 16.",
                          },
                          maxLength: {
                            value: 16,
                            message: "Maximo 16 digitos.",
                          },
                        })}
                        onBlur={() => trigger("numeroTj")}
                        placeholder="1234 1234 1234 1234"
                      ></input>
                    </div>
                    {errors.numeroTj && (
                      <span className="inputError">
                        {errors.numeroTj.message}
                      </span>
                    )}
                    <div className="flex flex-row gap-6">
                      <div className="inputTjDebito">
                        <label>Fecha de caducidad</label>
                        <input
                          {...register("fechaTj", {
                            required: {
                              value: true,
                              message: "Campo requerido.",
                            },
                            pattern: {
                              value:
                                /^(0[1-9]|1[0-2])\/(0[0-9]|1[0-9]|2[3-9])$/,
                              message: "Fecha invalida. MM/YY",
                            },
                          })}
                          onBlur={() => trigger("fechaTj")}
                          placeholder="MM/YY"
                        ></input>
                        {errors.fechaTj && (
                          <span className="inputError">
                            {errors.fechaTj.message}
                          </span>
                        )}
                      </div>
                      <div className="inputTjDebito">
                        <label>CVC</label>
                        <input type="password"
                          {...register("codigoTj", {
                            required: {
                              value: true,
                              message: "Campo requerido",
                            },
                            pattern: {
                              value: /^[0-9]+$/,
                              message: "Este campo solo acepta numeros",
                            },
                            minLength: {
                              value: 3,
                              message: "Faltan digitos, Minimo 3.",
                            },
                            maxLength: {
                              value: 3,
                              message: "Maximo 3 digitos.",
                            },
                          })}
                          placeholder="123"
                          onBlur={() => trigger("codigoTj") }
                        ></input>
                        {errors.codigoTj && (
                          <span className="inputError">
                            {errors.codigoTj.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-[0px] transition-all ease-in-out  opacity-0  duration-[500ms]"></div>
              )}
              {errors.inputRadio && (
                <span className="inputError">{errors.inputRadio.message}</span>
              )}
              <div
                className={
                  inputKind === "tarjeta"
                    ? "w-[98%] h-[1px] bg-[#E3DED7] self-center"
                    : "w-[98%] h-[1px] bg-[#E3DED7] self-center"
                }
              ></div>
              {/* Jugamos con el gap definido en padre, si se despliega  MT-- sino dejamos el gap del padre */}
              <div className="flex flex-row items-center gap-4 text-sm bg-white">
                <input
                  onClick={() => {
                    setinputKind("banco");
                  }}
                  className="h-4 w-4 accent-[#2A5B45]"
                  type="radio"
                  name="checkout"
                  {...register("inputRadio", {
                    required: {
                      value: true,
                      message: "Campo requerido.",
                    },
                  })}
                  onBlur={() => trigger("inputRadio")}
                ></input>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold ">
                    Transferencia bancaria a la cuenta ES12 1234 1234 123457890
                  </p>
                  {inputKind === "banco" ? (
                    <p>
                      Será necesario recibir el comprobante de la transferencia
                      para preparar tu pedido
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {errors.inputRadio && (
                <span className="inputError">{errors.inputRadio.message}</span>
              )}
              <div className=" w-[98%] h-[1px] bg-[#E3DED7] self-center"></div>
              <div className="flex flex-row items-center gap-4 text-sm">
                <input
                  className="h-4 w-4 accent-[#2A5B45]"
                  onClick={() => {
                    setinputKind("bizum");
                  }}
                  type="radio"
                  name="checkout"
                  {...register("inputRadio", {
                    required: {
                      value: true,
                      message: "Campo requerido.",
                    },
                  })}
                  onBlur={() => trigger("inputRadio")}
                ></input>
                <div className="flex flex-row gap-4 items-center">
                  <p className="font-semibold ">Bizum</p>
                  {inputKind === "bizum" ? <img src={iconBizum}></img> : ""}
                </div>
              </div>
              {errors.inputRadio && (
                <span className="inputError">{errors.inputRadio.message}</span>
              )}
              <div className=" transition-all ease-in opacity-100 duration-1000 w-[521px] flex flex-col gap-2">
                <h3 className=" font-semibold text-lg">Dirección de envío</h3>
                <div className="inputTjDebito">
                  <label>Nombres</label>
                  <input
                    className="checkNombre"
                    placeholder=""
                    {...register("checkNombre", {
                      required: {
                        value: true,
                        message: "Campo requerido.",
                      },
                      pattern: {
                        value: /[a-zA-Z]/,
                        message: "Formato no valido.",
                      },
                      minLength: {
                        value: 3,
                        message: "Debe contener al menos 3 caracteres.",
                      },
                      maxLength: {
                        value: 48,
                        message: "Este campo puede tener maximo 48 caracteres.",
                      },
                    })}
                    onBlur={() => trigger("checkNombre")}
                  ></input>
                </div>
                {errors.checkNombre && (
                  <span className="inputError">
                    {errors.checkNombre.message}
                  </span>
                )}
                <div className="inputTjDebito">
                  <label>Apellidos</label>
                  <input
                    className="inputForm"
                    placeholder=""
                    {...register("checkApellido", {
                      required: {
                        value: true,
                        message: "Campo requerido.",
                      },
                      pattern: {
                        value: /[a-zA-Z]/,
                        message: "Formato no valido.",
                      },
                      minLength: {
                        value: 3,
                        message: "Debe contener al menos 3 caracteres.",
                      },
                      maxLength: {
                        value: 30,
                        message: "Este campo puede tener maximo 30 caracteres.",
                      },
                    })}
                    onBlur={() => trigger("checkApellido")}
                  ></input>
                </div>
                {errors.checkApellido && (
                  <span className="inputError">
                    {errors.checkApellido.message}
                  </span>
                )}
                <div className="inputTjDebito">
                  <label>Teléfono</label>
                  <input
                  type="tel"
                    className="inputForm"
                    placeholder="+34 600 6000 600"
                    {...register("checkTelefono", {
                      required: {
                        value: true,
                        message: "Campo requerido.",
                      },
                      pattern: {
                        value:
                          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im,
                        message: "Valide formato, Ejemplo: +34614092275",
                      },
                        minLength:{
                        value:12,
                        message: 'Minimo 12 caracteres, Ejemplo: +34614092275'
                      },
                      maxLength:{
                        value:14,
                        message: 'Maximo 14 caracteres.'
                      }
                    })}
                    onBlur={() => trigger("checkTelefono")}
                  ></input>
                </div>
                {errors.checkTelefono && (
                  <span className="inputError">
                    {errors.checkTelefono.message}
                  </span>
                )}
                <div className="inputTjDebito">
                  <label>Email</label>
                  <input
                    className="inputForm"
                    placeholder=""
                    {...register("checkEmail", {
                      required: {
                        value: true,
                        message: "Campo requerido.",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                        message:
                          "Formato de correo no valido, Ejemplo: correo@corporation.com",
                      },
                    })}
                    onBlur={() => trigger("checkEmail")}
                  ></input>
                </div>
                {errors.checkEmail && (
                  <span className="inputError">
                    {errors.checkEmail.message}
                  </span>
                )}
                <div className="inputTjDebito">
                  <label>País</label>
                  <select
                    onChange={(e) => {
                      setstateSelect(e.value);
                      console.log(e);
                    }}
                    className="inputForm"
                    {...register("checkPais", {
                      required: {
                        value: true,
                        message: "Seleccione pais.",
                      },
                    })}
                    onBlur={() => trigger("checkPais")}
                  >
                    <option value="0" disabled selected hidden>
                      Seleccionar
                    </option>
                    {paises.map((item, indice) => {
                      return (
                        <option key={indice} value={item.shortName}>
                          {item.shortName}
                        </option>
                      );
                    })}
                  </select>
                </div>

                { }
                <div className="flex flex-row justify-between">
                  <div className="inputTjDebito">
                    <label>Población</label>
                    <input
                      placeholder=""
                      {...register("checkPoblacion", {
                        required: {
                          value: true,
                          message: "Campo requerido.",
                        },
                        pattern: {
                          value: /[A-Za-z]/,
                          message: "Formato no valido.",
                        },
                        minLength: {
                          value: 4,
                          message: "Debe contener al menos 3 caracteres.",
                        },
                        maxLength: {
                          value: 20,
                          message:
                            "Este campo puede tener maximo 20 caracteres.",
                        },
                      })}
                      onBlur={() => trigger("checkPoblacion")}
                    ></input>
                    {errors.checkPoblacion && (
                      <span className="inputError">
                        {errors.checkPoblacion.message}
                      </span>
                    )}
                  </div>
                  <div className="inputTjDebito">
                    <label>CP</label>
                    <input
                      placeholder="123"
                      {...register("checkPostal", {
                        required: {
                          value: true,
                          message: "Campo requerido.",
                        },
                        pattern: {
                          value: /[0-9]/,
                          message: "Formato invalido, (solo numeros)",
                        },
                        minLength: {
                          value: 3,
                          message: "Minimo 3 digitos",
                        },
                        maxLength: {
                          value: 6,
                          message: "Maximo 6 digitos",
                        },
                      })}
                      onBlur={() => trigger("checkPostal")}
                    ></input>
                    {errors.checkPostal && (
                      <span className="inputError">
                        {errors.checkPostal.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-row gap-6">
                  <div className="inputTjDebito">
                    <label>Calle</label>
                    <input
                      placeholder=""
                      {...register("checkCalle", {
                        required: {
                          value: true,
                          message: "Campo requerido.",
                        },
                        maxLength: {
                          value: 40,
                          message: "Maximo 40 caracteres.",
                        },
                      })}
                      onBlur={() => trigger("checkCalle")}
                    ></input>
                    {errors.checkCalle && (
                      <span className="inputError">
                        {errors.checkCalle.message}
                      </span>
                    )}
                  </div>
                  <div className="inputTjDebito">
                    <label>Nº</label>
                    <input
                      placeholder=""
                      {...register("checkNCalle", {
                        required: {
                          value: true,
                          message: "Campo requerido.",
                        },
                        maxLength: {
                          value: 15,
                          message: "Maximo 15 caracteres.",
                        },
                      })}
                      onBlur={() => trigger("checkNCalle")}
                    ></input>
                    {errors.checkNCalle && (
                      <span className="inputError">
                        {errors.checkNCalle.message}
                      </span>
                    )}
                  </div>
                  <div className="inputTjDebito">
                    <label>Piso</label>
                    <input
                      placeholder=""
                      {...register("checkPiso", {
                        required: {
                          value: true,
                          message: "Campo requerido.",
                        },
                        maxLength: {
                          value: 5,
                          message: "Maximo 5 caracteres.",
                        },
                      })}
                      onBlur={() => trigger("checkPiso")}
                    ></input>
                    {errors.checkPiso && (
                      <span className="inputError">
                        {errors.checkPiso.message}
                      </span>
                    )}
                  </div>
                  <div onMouseMove={()=>{fnOnSubmit()}} className="inputTjDebito">
                    <label>Puerta</label>
                    <input 
                      placeholder=""
                      {...register("checkPuerta", {
                        required: {
                          value: true,
                          message: "Campo requerido.",
                        },
                        minLength: {
                          value: 2,
                          message: "Minimo 2 caracteres.",
                        },
                        maxLength: {
                          value: 5,
                          message: "Maximo 5 caracteres.",
                        },
                      })}
                      onBlur={() => trigger("checkPuerta")}
                    ></input>
                    {errors.checkPuerta && (
                      <span className="inputError">
                        {errors.checkPuerta.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%]">
              <div className="">
                <div className="bg-[#F7F5F3] w-[30%] p-6 fixed z-60 ">
                  <SectionBasket
                    precio={reduceContext.precio}
                    totalyDelivery={totalContext}
                    envio={priceDelivery}
                  />
                  <div className="flex flex-row gap-7 mt-4">
                    <Link onClick={()=>{fnOnSubmit()}} to={stateCheckoutForm === 'habil'?'/success':null}> 
                    <input
                          type="submit"
                          value={"Pagar y realizar pedido"}
                          className={
                            "bg-[#2A5B45] opacity-30 cursor-pointer hover:opacity-100 w-[196px] h-[40px] flex flex-col justify-center items-center rounded text-[white] font-semibold text-sm"
                          }
                        /> 
                    </Link>
      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
