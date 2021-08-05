import React, {useEffect} from 'react'
import Paragrafo from './Componentes/Paragrafo/Paragrafo'

function App() {
  useEffect(
    () => {
      window.document.title = 'Componentes com Classes'
    }
  )
  return (
    <>
      <Paragrafo fator={10} texto="lorem ipsulom"/>
    </>
  );
}

export default App;
