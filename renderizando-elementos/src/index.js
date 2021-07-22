import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css'

const element = 'DIO'
const element2 = <p>SIM</p>

function chamaDoisElementos() {
  return (
    <div>
      {element}
      {element2}
    </div>
  )
}

const rootElement  = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)
ReactDOM.render(chamaDoisElementos(), rootElement)
