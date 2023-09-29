import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ContextCoffeProvide} from './context/ContextCoffeProduct'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<ContextCoffeProvide>

    <App/>
</ContextCoffeProvide>
  </React.StrictMode>,
)
