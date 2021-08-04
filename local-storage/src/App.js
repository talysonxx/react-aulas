import react from 'react'

function App() {
  const [name, setName]  = react.useState(null)
  const [storage, setStorage] = react.useState(null)

  function guardarNome(key, value){
    window.localStorage.setItem(key, value)
    setStorage(window.localStorage.getItem(key))
    window.alert(`Nome ${value} salvo!`)
  }
  function consultarNome(key){
    window.alert(window.localStorage.getItem(key) == null ? 'guarde primeiro' : window.localStorage.getItem(key))
  }
  function apagarNome(key){
    const oldName = window.localStorage.getItem(key)
    window.localStorage.removeItem(key)
    setStorage(null)
    window.alert(oldName == null ? 'guarde primeiro!' : `Nome ${oldName} deletado!`)
  }

  function handleChange({target: {value}}){
    setName(value)
  }

  // const teste = () => {
  //   window.alert('é')
  // }
  return (
    <>
      <label>Digite um nome</label>
      <input type="text" value={name} onChange={handleChange}></input>

      <br/>
      
      <p>Digitou: <strong>{name == null ? 'nada' : name}</strong></p>
      <p>Gardou: <strong>{storage == null ? 'nenhum' : storage}</strong></p>
      <p>Aqui {window.localStorage.getItem('nome')}</p>
      <br/>

      <label>O que desejas:</label>
      <button onClick={() => guardarNome('nome', name)}>Guardar o nome</button>
      <button onClick={() => consultarNome('nome')}>Consultar o nome</button>
      <button onClick={() => apagarNome('nome')}>Remover o nome</button>
    </>
  );
}

export default App;
