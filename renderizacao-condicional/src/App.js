import React from 'react'

const buttonA = <button>ver histórico</button>
const buttonB = <button>cadastrar</button>
const temClientes = true

function App() {
  const mostrarHistorico = () => (
        <div>
          Clique aqui para acessar o histórico dos clientes
          {buttonA}
        </div>
  )
  const cadastrarCliente = () => (
    <div>
    cadastre aqui {buttonB}
    </div> 
  )

  const nomeCliente = 'simSimSIMsiMimS'

  const mostrarCliente = () => {
    if(!temClientes) return null

    return(
      <div>
        <h1>nome do cliente: {nomeCliente}</h1>
      </div>
    )
  }
  
  const arrClientes = [
    {
      id: 1,
      nome: 'mateus',
      skills: ['c', 'c++', 'assembly']
    },
    {
      id: 2,
      nome: 'julia',
      skills: ['java', 'go', 'kotlin']
    },
    {
      id: 12,
      nome: 'breno',
      skills: ['python', 'js', 'c#']
    }
  ]
  return (
    <div>
      <p>tem cliente: {temClientes ? `sim` : `não`}</p>
      <h1 id="lula12">okOK</h1>
      {/* se clientes  for verdade o botão aparece */}
      {temClientes ? mostrarHistorico() : cadastrarCliente()}
      {mostrarCliente()}
      
      
      
      
      
      
      <h1>Arrays e objetos</h1>
      <ul>
        {arrClientes.map(renderizarClientola)}
      </ul>
    </div>
  );
  function renderizarClientola(clientes, index){
    return( 
      <div  key={`cliente-${clientes.id}`}>
        <li>{clientes.nome}; id: {clientes.id + 1}; skills: {clientes.skills.map(renderizarSkills)}</li>
      </div>
    )
  }
  function renderizarSkills(skills, index){
    return <span>{skills}, </span>
  }
}

export default App;
