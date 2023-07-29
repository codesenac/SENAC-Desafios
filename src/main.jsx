import React from 'react'
import ReactDOM from 'react-dom/client'
import { GreetingFuncional } from './components/greeting/GreetingFuncional'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GreetingFuncional name="Rafaela"/>
    <GreetingFuncional name="Marcos"/>
  </React.StrictMode>,
)
