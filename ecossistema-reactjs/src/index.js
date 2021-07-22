import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)