import React, {Fragment, useRef} from 'react'

function App() {
  const inputRef = useRef()

  function focarInput() {
    inputRef.current.focus()
    inputRef.current.style = 'width: 10px'
  }


  return (
    <Fragment>
      <label for='nome'>Foco: </label>
      <input id='nome' type='text' ref={inputRef}/>
      <button onClick={focarInput}>Clique para focar</button>
    </Fragment>
  )
}

export default App
