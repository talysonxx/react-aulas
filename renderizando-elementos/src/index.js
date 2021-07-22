import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css'

const element = 'DIO'
const element2 = <h1>SIM</h1>

// isso é um componente para o React
function chamaDoisElementos() {
  return (
    <div>
      {element}
      {element2}
    </div>
  )
}

const rootElement  = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
// ReactDOM.render(chamaDoisElementos(), rootElement)
