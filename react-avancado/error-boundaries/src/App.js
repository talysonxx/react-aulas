import React from 'react'

function App() {
  const obj = [
    {
      type: 'sim'
    },
    {
      type: 'OK'
    }
  ]

  function renderElementos({type}) {
    return <p>{type.name.console}</p>
  }

  return (
    <>
      {obj.map(renderElementos)}
    </>
  )
}

export default App
