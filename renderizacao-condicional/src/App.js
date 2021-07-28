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
  
  return (
    <div>
      <p>tem cliente: {temClientes ? `sim` : `não`}</p>
      <h1 id="lula12">okOK</h1>
      {/* se clientes  for verdade o botão aparece */}
      {temClientes ? mostrarHistorico() : cadastrarCliente()}
      {mostrarCliente()}
    </div>
  );
}

export default App;
