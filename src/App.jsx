import './App.css'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Company } from './pages/Company';
import { Login } from './pages/Login'
import { Subscription } from './pages/Subscription';
import { Us } from './pages/Us';
import { Contact } from './pages/Contact';
import { Cookies } from './pages/Cookies';
import { Origenes } from './pages/Origenes';
import { Privacidad } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Basket } from './pages/Basket';
import { Checkout } from './pages/Checkout';
import { CopyRight } from './components/CopyRight';
import { Success } from './pages/Success';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/cookies' element={<Cookies />}></Route>
          <Route path='/company' element={<Company />}></Route>
          <Route path='/us' element={<Us />}></Route>
          <Route path='/origenes' element={<Origenes />}></Route>
          <Route path='/privacidad' element={<Privacidad />}></Route>
          <Route path='/store' element={<Store />}></Route>
          <Route path='/subscription' element={<Subscription />}></Route>
          <Route path='/terms' element={<Terms />}></Route>
          <Route path='/cesta' element={<Basket />}></Route>
          <Route path='/check' element={<Checkout />}></Route>
          <Route path='/success' element={<Success />}></Route>
        </Routes>
        <CopyRight />
      </BrowserRouter>

    </>
  )
}
export default App
