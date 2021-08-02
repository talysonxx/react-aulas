import ReactDOM from 'react-dom';
import App from './App';
import './style.css';

const divHTML = window.document.getElementById('root')

function renderizacaoPag(){
    ReactDOM.render(<App />, divHTML)
}

setInterval(renderizacaoPag, 1000);