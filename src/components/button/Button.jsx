import { React, useState, useEffect, useContext } from 'react'
import {ContextLocal} from '../../context/ContetxtLocal'

export const Button = ({ text, style, key, id, name, price, img, available }) => {
  const { infLocalContext, setinfLocalContext } = useContext(ContextLocal);
  const [buy, setBuy] = useState({
    cantidad: 1,
    nombre: name,
    precio: price,
    imagen: img,
    id: id
  })

  const putLocalStorage = (evt) => {

    if (evt.target.id !== '64d3e82ee685adf897acf29c') {
      const infoLocalStorage = JSON.parse(localStorage.getItem("buys")) || [];
      infoLocalStorage.push(buy)
      localStorage.setItem("buys", JSON.stringify(infoLocalStorage));
      setinfLocalContext([...infLocalContext,buy])
    }
  }
  return (
    <div id={id} onClick={(evt) => { evt.target.id === '64d3e82ee685adf897acf29c' ? alert('Pronto lo tendremos disponible') : ''; putLocalStorage(evt)}} key={key} className={style}>{text}</div>
  )
}
