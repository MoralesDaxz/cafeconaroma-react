import { React, useState, useContext } from 'react'
import { ContextLocal } from '../../context/ContextLocal'

export const Button = ({ text, style, key, id, name, price, img, add, bg }) => {

  const [buy, setBuy] = useState({ cantidad: 1, nombre: name, precio: price, imagen: img, id: id })
  const {  setinfLocalContext } = useContext(ContextLocal);
  const infoLocalStorage = JSON.parse(localStorage.getItem("buys")) || [];
  const buysLSFiltered = infoLocalStorage.filter(item => item.cantidad !== 0);
  const productExisting = infoLocalStorage.find(item => item.nombre === buy.nombre);
 
  function clearZerosLS() {
    localStorage.setItem("buys", JSON.stringify(buysLSFiltered));
  }
  clearZerosLS() //cada interaccion con el componente validara cantidades en LS

  const putLocalStorage = () => {
    /*     const productExisting = infoLocalStorage.find(item => item.nombre === buy.nombre); */
    if (add === 'addCoffee' || add === 'suma') {
      //buscamos primera coincidencia con nnombre 'buy' en LS

      if (productExisting) {
        productExisting.cantidad += buy.cantidad;
        productExisting.precio =  productExisting.cantidad*buy.precio
      } else {
        infoLocalStorage.unshift(buy);//ultimo producto comprado, primero que se muestra.
      }
      localStorage.setItem("buys", JSON.stringify(infoLocalStorage));
    } else if (add === 'resta') {

      if (productExisting.cantidad >= 1) {
        productExisting.cantidad -= buy.cantidad;
        productExisting.precio =  productExisting.cantidad*buy.precio
      } else if (productExisting.cantidad < 1 || productExisting.cantidad === 0) {
        localStorage.setItem('buys', JSON.stringify(infoLocalStorage.filter(item => item.cantidad !== 0)));
      }
      localStorage.setItem("buys", JSON.stringify(infoLocalStorage.filter(item => item.cantidad !== 0)));
    }

     setinfLocalContext([...infoLocalStorage]) 
  }
  return (
    <div
      onClick={(evt) => { evt.target.textContent === 'Agotado' ? alert('Pronto lo tendremos disponible') : putLocalStorage() }}
      id={id}
      key={id}
      className={style}
      style={bg}>{text}</div>
  )
}