import { React, useState, useEffect, useContext } from 'react'
import { ContextLocal } from '../../context/ContextLocal'
import sumaImg from '../../assets/iconSuma.png'
import restaImg from '../../assets/iconResta.png'
export const Button = ({ text, style, key, id, name, price, img, add, bg }) => {

  const { infLocalContext, setinfLocalContext } = useContext(ContextLocal);

  const [buy, setBuy] = useState({
    cantidad: 1,
    nombre: name,
    precio: price,
    imagen: img,
    id: id
  })
  const putLocalStorage = (param) => {

    if (add === 'true' || add === 'suma') {

      const infoLocalStorage = JSON.parse(localStorage.getItem("buys")) || [];
      const productoExistente = infoLocalStorage.find(item => item.nombre === buy.nombre);
      if (productoExistente) {
        productoExistente.cantidad += buy.cantidad;
      } else {
        infoLocalStorage.push(buy);
      }
      localStorage.setItem("buys", JSON.stringify(infoLocalStorage));

    } else if (add === 'resta') {
      const infoLocalStorage = JSON.parse(localStorage.getItem("buys")) || [];
      const productoExistente = infoLocalStorage.find(item => item.nombre === buy.nombre);

      if (productoExistente.cantidad >= 1) {
        productoExistente.cantidad -= buy.cantidad;
      } else if (productoExistente.cantidad < 1) {
        const buys = JSON.parse(localStorage.getItem('buys')).filter(function (item) {
          return item.cantidad >= 1;
        });
        
        localStorage.setItem('buys', JSON.stringify(buys));
       /*  setinfLocalContext([buys]) */
      }
      localStorage.setItem("buys", JSON.stringify(infoLocalStorage));

    }
    setinfLocalContext([...infLocalContext])
  }

  return (
    <div id={id} onClick={(evt) => { evt.target.textContent === 'Agotado' ? alert('Pronto lo tendremos disponible') : putLocalStorage() }} key={key} className={style} style={bg}>{text}</div>
  )
}
