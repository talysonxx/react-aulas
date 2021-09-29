import React, {useState, useEffect} from 'react'
// useEffect é chamado assim que a página é montada e sempre que é atualizada

const App = () => {
  const [contagem, setContagem] = useState(0)
  const [elemento, setElemento] = useState(true)

  // é executado uma vez (componentDidMount)
  // vai executar a função de retorno somente quando o component for desmontado (componentWillUnmout)
  useEffect(() => {
    console.log('A página foi carregada!')
    setContagem(parseInt(localStorage.getItem('contador')))

    return () => {
      console.log('Componente desmontado')
    }
  }, [])

  // executado sempre que contagem é atualizado (componentDidUpdate)
  useEffect(() => {
    window.document.title = `Contagem: ${contagem}`
    localStorage.setItem('contador', contagem)
  }, [contagem])
  
  let time = 0
  useEffect(() => {
    let timer = setInterval(() => {
      time++
      console.log(time)
  
      if (time === 10) {
        clearInterval(timer)
        setElemento(false)
      }
    }, 1000)
  }, [])


  if (elemento) {
    return (
      <>
        <p>Contagem : {contagem}</p>
        <button onClick={() => setContagem(contagem + 1)}>Iniciar contagem</button>
      </>
    )
  } else {
    return <>Sem contador</>
  }
}

export default App;
