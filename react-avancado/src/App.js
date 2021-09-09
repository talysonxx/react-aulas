import React, {Fragment} from 'react'

function App() {
  const elementos = ['1', '2', '3']

  function renderElementos(elemento, posicao) {
    return (
      <Fragment key={posicao}>
        <td>elemento {elemento}</td>
      </Fragment>
    )
  }

  return (
    <table>
      <tr>
        {elementos.map(renderElementos)}
      </tr>
    </table>
  )
}

export default App
