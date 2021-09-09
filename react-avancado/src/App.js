import React, {Fragment} from 'react'

function App() {
  const colunas = ['1', '2', '3']

  function renderColunas(elemento, posicao) {
    return (
      <Fragment key={posicao}>
        <td>elemento {elemento}</td>
      </Fragment>
    )
  }

  return (
    <table>
      <tr>
        {colunas.map(renderColunas)}
      </tr>
    </table>
  )
}

export default App
