import React from 'react'
import './App.css'
import { Home } from './pages/Home'
import {Store} from './pages/Store'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/navBar/NavBar';
import { Empresa } from './pages/Empresa';
import {Login} from './pages/Login'
import { Suscripcion } from './pages/Suscripcion';
import { Nosotros } from './pages/Nosotros';
import { Contacto } from './pages/Contacto';
import { Cookies } from './pages/Cookies';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/Empresa' element={<Empresa/>}></Route>
    <Route path='/Suscripcion' element={<Suscripcion/>}></Route>
    <Route path='/Nosotros' element={<Nosotros/>}></Route>
    <Route path='/Contacto' element={<Contacto/>}></Route>
    <Route path='/Cookies' element={<Cookies/>}></Route>






    <Route path='/Store' element={<Store/>}></Route>
    </Routes>
    </BrowserRouter>
    
     {/*   */}
    
    </>
  )
}
export default App
