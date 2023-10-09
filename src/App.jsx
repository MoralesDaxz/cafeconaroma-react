import React from 'react'
import './App.css'
import { Home } from './pages/Home'
import {Store} from './pages/Store'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { NavBar } from './components/navBar/NavBar';
import { Empresa } from './pages/Empresa';
import {Login} from './pages/Login'
import { Suscripcion } from './pages/Suscripcion';
import { Nosotros } from './pages/Nosotros';
import { Contacto } from './pages/Contacto';
import { Cookies } from './pages/Cookies';
import { Origenes } from './pages/Origenes';
import { Privacidad } from './pages/Privacidad';
import { Terminos } from './pages/Terminos';
import {Basket} from './pages/Basket';
import { Checkout } from './pages/Checkout';
import { CopyRight } from './components/copyRight/CopyRight';
import { CarShop } from './components/carShop/CarShop';
function App() {
  
  return (
    <>

    <BrowserRouter>
    <NavBar/>
    <Routes>
  
    <Route path='/login' element={<Login/>}></Route> 
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Contacto' element={<Contacto/>}></Route>
    <Route path='/Cookies' element={<Cookies/>}></Route>
    <Route path='/Empresa' element={<Empresa/>}></Route>
    <Route path='/Nosotros' element={<Nosotros/>}></Route>
    <Route path='/Origenes' element={<Origenes/>}></Route>
    <Route path='/Privacidad' element={<Privacidad/>}></Route>
    <Route path='/Store' element={<Store/>}></Route>
    <Route path='/Suscripcion' element={<Suscripcion/>}></Route>
    <Route path='/Terminos' element={<Terminos/>}></Route>
    <Route path='/Cesta' element={<Basket/>}></Route>
    <Route path='/Check' element={<Checkout/>}></Route>

    </Routes>
    <CopyRight/>
    </BrowserRouter>
    
     {/*   */}
    
    </>
  )
}
export default App
