import React, {useContext} from 'react'
import {ContadorContexto} from './ContadorContexto'

export default function Contador() {
  const [contagem, setContagem] = useContext(ContadorContexto)

  return (
    <div>
      <h1>{contagem}</h1>
      <div>
        <button onClick={() => setContagem(antigo => antigo - 1)}>-</button>
        <button onClick={() => setContagem(antigo => antigo + 1)}>+</button>
      </div>
    </div>
  )
}
