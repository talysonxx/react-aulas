import React, {useEffect, useState} from 'react'
import Globais from './Componentes/Globais/Globais'

const App = () => {
  useEffect(
    () => {
      window.document.title = 'Variáveis Globais - React'
    }
  )

  const [resumo, setResumo] = useState(Globais.resumo)

  const gravarResumo = () => {
    Globais.resumo = resumo
  }
  const verResumo = () => {
    window.alert(Globais.resumo)
  }
  const onChangeInput = ({target: {value}}) => {
    setResumo(value)
  } 

  return (
      <>
        sim
        <p>
          Nome: {Globais.nome}
          Idade: {Globais.idade}
        </p>

        <input type="text" value={resumo} onChange={(event) => onChangeInput(event)}></input>
        <button onClick={() => gravarResumo()}>gravar</button>
        <button onClick={() => verResumo()}>mostrar</button>
      </>
  )
}

export default App
