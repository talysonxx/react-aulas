import React, {useState} from 'react'

function App() {
  // cada input do formulário deve ter seu useState
  const [nome, setNome] = useState('')
  const [carro, setCarro] = useState('limosine')

  // const handleChangeNome = ({target: {value}}) =>{
  //   setNome(value)
  //   window.localStorage.setItem('valor', value)
  // }
  // const handleChangeSelect = ({target: {value}}) =>{
  //   setCarro(value)
  // }

  const onChangeSelect = ({target: {value}}) => {
    setCarro(value)
    window.console.log({value})
  }

  const onChangeName = ({target: {value}}) => {
    setNome(value)
    window.localStorage.setItem('valor', value)
    window.console.log({value})
  }

  return (
    <>
      <form>
        <label htmlFor="nome">Dgite algo</label>
        <br/>
        <input id="nome" type="text" value={nome} onChange={onChangeName}></input>
        <p>Digitou: {window.localStorage.getItem('valor')}</p>

        <label htmlFor="carros">Selecione um carro</label>
        <select id="carros" value={carro} onChange={onChangeSelect}>
          <option value="prisma">Prisma</option>
          <option value="limosine">Limosine</option>
          <option value="audio-ultron-r8">Audio Ultron R8</option>
          <option value="carro do most-wanted">NFSMW</option>
        </select>
        <br/>
        <label>Carro selecionado: {carro}</label>
      </form>
    </>
  );
}

export default App;
