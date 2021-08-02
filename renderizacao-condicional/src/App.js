import React, {useState} from 'react'
import Relogio from './Componentes/Relogio'

const buttonA = <button>ver histórico</button>
const buttonB = <button>cadastrar</button>
const temClientes = true

export default function App() {
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
  let data = new Date().getHours()
  // let data = 6
  const [log, setLog] = useState(false)

  const [cor, mudaCor] = useState(0)

  const cores = [
    {
      nome: 'vermelho',
      color: '#f00'
    },
    {
      nome: 'verde',
      color: '#0f0'
    },
    {
      nome: 'azul',
      color: '#00f'
    },{
      nome: null,
      color: null
    }
  ]

  const comprimento = () =>{
    let comprimento
    if(data >= 18){
      comprimento = 'boa noite'
    }else if(data>=12){
      comprimento = 'boa tarde!'
    }else if(data >= 6){
      comprimento = 'bom dia!'
    }else{
      comprimento = 'boa madrugada!'
    }

    return comprimento
  }
  // setInterval(alterarCor, 4000)
  return (
    // <div>
    //   <header>
    //     <Relogio/>
    //   </header>
      
      
      
      
      
      
      
      
      
    //   <p>tem cliente: {temClientes ? `sim` : `não`}</p>
    //   <h1 id="lula12">okOK</h1>
    //   {/* se clientes  for verdade o botão aparece */}
    //   {temClientes ? mostrarHistorico() : cadastrarCliente()}
    //   {mostrarCliente()}
      
      
      
      
      
      
    //   <h1>Arrays e objetos</h1>
    //   <ul>
    //     {arrClientes.map(renderizarClientola)}
    //   </ul>
    // </div>
    <>
      {comprimento()}
      <p  style={{color: cores[cor].color}}>Hora agora: {data}</p>

      <p  style={{color: cores[cor].color}}>Usuário <strong>{log ? 'logado' : 'deslogado, favor clique no botão'}</strong></p>

      <button  style={{color: cores[cor].color}} onClick={() => logar()}>{log ? 'deslogar' : 'logar'}</button>

      <br/>
      <br/>
      <button  style={{color: cores[cor].color, transition: '1s'}} onClick={() => alterarCor()}>Altere a cor. cor atual: {cores[cor].nome}</button>
    </>
  );
    function alterarCor(){
      cor > 2 ? mudaCor(0) : mudaCor(cor + 1)
    }
   

    function logar(){
      setLog(!log)
    }


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
