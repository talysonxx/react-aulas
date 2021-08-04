import React, {useState, useEffect} from 'react'
// useEffect é chamado assim que a página é montada e sempre que é atualizada

const App = () => {
  const [contagem, setContagem] = useState(0)

  useEffect(
    () => {
      window.console.log('página carregada!')
      window.document.title = `Contagem: ${contagem}`
    }
  )

  return (
    <>
      <p>Contagem : {contagem}</p>
      <button onClick={() => setContagem(contagem + 1)}>Iniciar contagem</button>
    </>
  );
}

export default App;
