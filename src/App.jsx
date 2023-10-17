import React from 'react'
import './App.css'
import { Home } from './pages/Home'
import {Store} from './pages/Store'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { NavBar } from './components/NavBar';
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
import { CopyRight } from './components/CopyRight';
import { CarShop } from './components/CarShop';
import { Success } from './pages/Success';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/login' element={<Login/>}></Route> 
    <Route path='/' element={<Home/>}></Route>
    <Route path='/contacto' element={<Contacto/>}></Route>
    <Route path='/cookies' element={<Cookies/>}></Route>
    <Route path='/empresa' element={<Empresa/>}></Route>
    <Route path='/nosotros' element={<Nosotros/>}></Route>
    <Route path='/origenes' element={<Origenes/>}></Route>
    <Route path='/privacidad' element={<Privacidad/>}></Route>
    <Route path='/store' element={<Store/>}></Route>
    <Route path='/suscripcion' element={<Suscripcion/>}></Route>
    <Route path='/terminos' element={<Terminos/>}></Route>
    <Route path='/cesta' element={<Basket/>}></Route>
    <Route path='/check' element={<Checkout/>}></Route>
    <Route path='/success' element={<Success/>}></Route>
    </Routes>
    <CopyRight/>
    </BrowserRouter>
    
     {/*   */}
    
    </>
  )
}
export default App
