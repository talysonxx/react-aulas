import React from 'react'

function soma(a = 0, b = 0){
  return a + b
}

function primeiroJSX(){
  return(
    <div>
      Talys
      <h1 className="teste">LULA</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {/* pra executar qualquer js dentro do html, usa-se {} (chaves) */}
      {primeiroJSX()}
      <h1>Soma: {soma(10, 20)}</h1>
    </div>
  );
}

export default App;
