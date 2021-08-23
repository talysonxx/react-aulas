import React, {useState, useEffect} from 'react'
import TabelaIMC from './Componentes/Tabela/Tabela'
import TabelaImcClass from './Componentes/Tabela/TabelaClass'
import InputAlturaClass from './Componentes/Input/InputAlturaClass'
import InputPesoClass from './Componentes/Input/InputPesoClass'
import './App.css'

function App(){
  useEffect(() => {
    document.title = 'Calcular IMC'
  })

  function atualizarPeso({target: {value}}){
    // console.log(value)
    setPesoAltura({peso: value, altura: pesoAltura.altura})
  }

  function atualizarAltura({target: {value}}){
    // console.log(value)
    setPesoAltura({peso: pesoAltura.peso, altura: value})
  }

  function validador(){
    if((pesoAltura.peso === '' || pesoAltura.peso <= 0)  || (pesoAltura.altura === '' || pesoAltura.altura <= 0)){
      alert('preencha os dados')
    }else{
      // alert('certo')
      calcularIMC()
    }
  }

  function calcularIMC(){
    const IMC = (pesoAltura.peso / pesoAltura.altura ** 2).toFixed(2).replace('.', ',')
    // console.log('Seu IMC é:', IMC)
    // const h1 = document.createElement('h1')
    // h1.innerHTML = `${IMC}`
    document.getElementById('resultado').innerHTML = `Seu IMC é: ${IMC}`
    // document.getElementById('resultado').appendChild(h1)
  }

  function focusInput(){
    document.getElementsByTagName('input')[0].focus()
  }

  const [pesoAltura, setPesoAltura] = useState({
    peso: '',
    altura: ''
  })

  return (
    <div className='container'>
      <h1 onClick={() => focusInput()}>Calcular IMC</h1>

      <div className='inputs'>
        {/* <input
        onChange={event => atualizarPeso(event)}
        value={pesoAltura.peso}
        type='number'
        placeholder='Digite o seu peso (em kg)'
        required/> */}
        <InputPesoClass
        placeholder='Digite o seu peso (em kg)'
        type='number'
        value={pesoAltura.peso}
        onChange={atualizarPeso}/>

        {/* <input
        onChange={event => atualizarAltura(event)}
        value={pesoAltura.altura}
        type='number'
        placeholder='Digite a sua altura (em metros)'
        required/> */}
        <InputAlturaClass
        placeholder='Digite a sua altura (em metros)'
        type='number'
        value={pesoAltura.altura}
        onChange={atualizarAltura}/>

        <button onClick={() => validador()}>Calcular IMC</button>
      </div>

      {/* <TabelaIMC/> */}
      <TabelaImcClass/>
    </div>
  )
}

export default App;
