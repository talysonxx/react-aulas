import React, {useState, useEffect} from 'react'
import TabelaIMC from './Componentes/Tabela/Tabela';

function App(){
  useEffect(() => {
    document.title = 'Calcular IMC'
  })

  function atualizarPeso({target: {value}}){
    console.log(value)
    setPesoAltura({peso: value, altura: pesoAltura.altura})
  }
  function atualizarAltura({target: {value}}){
    console.log(value)
    setPesoAltura({peso: pesoAltura.peso, altura: value})
  }
  function calcularIMC(){

    // if(pesoAltura.peso == ('' || 0) || pesoAltura.altura == ('' || 0)){
    if((pesoAltura.peso == '' || pesoAltura.peso <= 0)  || (pesoAltura.altura == '' || pesoAltura.altura <= 0)){
      alert('preencha os dados')
    }else{
      alert('certo')
    }
  }

  const [pesoAltura, setPesoAltura] = useState({
    peso: null,
    altura: null
  })

  return (
    <div>
      <input
      onChange={event => atualizarPeso(event)}
      value={pesoAltura.peso}
      type='number'
      placeholder='Digite o seu peso (em kg)'
      required/>

      <input
      onChange={event => atualizarAltura(event)}
      value={pesoAltura.altura}
      type='number'
      placeholder='Digite a sua altura (em cm)'
      required/>
      <button onClick={() => calcularIMC()}>Calcular IMC</button>
      <TabelaIMC/>
    </div>
  );
}

export default App;
