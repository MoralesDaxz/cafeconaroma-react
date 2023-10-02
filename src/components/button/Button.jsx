import { React, useState, useContext } from 'react'
import { ContextLocal } from '../../context/ContextLocal'

export const Button = ({ text, style, key, id, name, price, img, add, bg }) => {

  const [buy, setBuy] = useState({ cantidad: 1, nombre: name, precio: price, imagen: img, id: id })

  const { infLocalContext, setinfLocalContext } = useContext(ContextLocal);
  const infoLocalStorage = JSON.parse(localStorage.getItem("buys")) || [];
  const buysLSFiltered = infoLocalStorage.filter(item => item.cantidad !== 0);
  const productExisting = infoLocalStorage.find(item => item.nombre === buy.nombre);

  function clearZerosLS() {
    localStorage.setItem("buys", JSON.stringify(buysLSFiltered));
  }
  clearZerosLS() //cada interaccion con el componente validara cantidades en LS

  const putLocalStorage = () => {

    if (add === 'true' || add === 'suma') {
      //buscamos primera coincidencia con nnombre 'buy' en LS
      const productExisting = infoLocalStorage.find(item => item.nombre === buy.nombre);

      if (productExisting) {
        productExisting.cantidad += buy.cantidad;
      } else {
        infoLocalStorage.push(buy);
      }
      localStorage.setItem("buys", JSON.stringify(infoLocalStorage));
    } else if (add === 'resta') {

      if (productExisting.cantidad >= 1) {
        productExisting.cantidad -= buy.cantidad;
      } else if (productExisting.cantidad === 0) {
        localStorage.setItem('buys', JSON.stringify(buysLSFiltered));
      }
      localStorage.setItem("buys", JSON.stringify(buysLSFiltered));
    }
    setinfLocalContext([...infLocalContext])
  }
  return (
    <div
      onClick={(evt) => { evt.target.textContent === 'Agotado' ? alert('Pronto lo tendremos disponible') : putLocalStorage() }}
      id={id}
      key={key}
      className={style}
      style={bg}>{text}</div>
  )
}
