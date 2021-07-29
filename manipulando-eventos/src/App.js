import React from 'react'

/*
eventos são nomeados usando camelCase (ao invés de onclick, usa-se onClick);

com jsx você passa uma função como manopulador de eventos ao invés de uma string
(ao invés de onclick="executar()", usa-se onClick={() => executar});
*/

const butao = <button onClick={dispararConsole}>Clique em mim</button>

function dispararConsole({target}) {
  window.console.log('botao clicado', target)
}

function mudancaAleatoria({target: {value}}){
  // desctruction (ecms6)
  // mesma coisa de const target = event.target; const value = target.event <==> const {target: {value}} = event
  console.log(value)
}

const clientes = [
  {
    nome: 'lucas',
    id: 1
  },
  {
    nome: 'breno',
    id: 2
  },
  {
    nome: 'giovanna',
    id: 3
  }
]

function imprimirCliente(cliente, index){
  return(
  <li key={index}>nome: {cliente.nome} - id: {cliente.id} <button onClick={() => excluirCliente(cliente.id, cliente.nome)}>excluir cliente</button></li>
  )
}

function excluirCliente(idCliente, nomeCliente){
  window.alert(`${nomeCliente} tem id ${idCliente}`)
}

function App() {
  return (
    <div>
      {butao}
      <input onChange={mudancaAleatoria} />

      <ul>
        {clientes.map(imprimirCliente)}
      </ul>
    </div>
  );
}

export default App;
