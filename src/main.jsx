import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextCoffeProvide } from './context/ContextCoffeProduct'
import { ContextLocalProvide } from './context/ContextLocal'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextCoffeProvide>
      <ContextLocalProvide>
        <App />
      </ContextLocalProvide>
    </ContextCoffeProvide>
  </React.StrictMode>,
)
