import React from 'react'
import './App.css'
import { Home } from './pages/Home'
import {Store} from './pages/Store'
import {ContextCoffeProvide} from './context/ContextCoffeProduct'
function App() {
  return (
    <>
    <ContextCoffeProvide>
        <Home/> 
     {/* <Store/>  */}
    </ContextCoffeProvide>
    </>
  )
}
export default App
