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





  const initObj = {
    nome: null,
    sobrenome: null,
    idade: null
  }
  const [form, setForm] = useState(initObj)
  const changeWithState = ({target: {id, value}}) => {
    // window.console.log({value, id})
    if(id == 'nome-form-2'){
      setForm({nome: value, sobrenome: form.sobrenome, idade: form.idade})
    }else if(id == 'sobrenome-form-2'){
      setForm({nome: form.nome, sobrenome: value, idade: form.idade})
    }else{
      setForm({nome: form.nome, sobrenome: form.sobrenome, idade: value})
    }
  }

  return (
    <>
      <form style={{marginBottom: '20px'}}>
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




      {/* agora usando apenas um state */}
      <form>
        <label htmlFor="nome-form-2">Digite nome</label>
        <br/>
        <input id="nome-form-2"value={form.nome} type="text" onChange={changeWithState}></input>
        <br/>

        <label htmlFor="sobrenome-form-2">Digite sobrenome</label>
        <br/>
        <input id="sobrenome-form-2" value={form.sobrenome} type="text" onChange={changeWithState}></input>
        <br/>

        <label htmlFor="idade-form-2">Digite idade</label>
        <br/>
        <input id="idade-form-2" value={form.idade} type="number" onChange={changeWithState}></input>

        <p>
          Nome completo: {form.nome} {form.sobrenome}
          <br/>
          Idade: {form.idade == null ? null : `${form.idade} anos`}
        </p>
      </form>
    </>
  );
}

export default App;
