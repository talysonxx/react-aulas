import React, {useContext} from 'react'
import {ContadorContexto} from './ContadorContexto'

export default function Cabecalho() {
  const [contagem, setContagem] = useContext(ContadorContexto)

  return (
    <div>
      <h3>Contador</h3>
      <div>{contagem}</div>
    </div>
  )
}
