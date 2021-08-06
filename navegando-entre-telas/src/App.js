import React, {useState, useEffect} from 'react'
import Pagina1 from './Componentes/Pagina1/Pagina1'
import Pagina2 from './Componentes/Pagina2/Pagina2'
import Pagina0 from './Componentes/Pagina0/Pagina0'

function App() {
  const [pagina, setPagina] = useState(0)
  
  // método 1
  const retornarPagina = () => {
    if (pagina == 1) {
      return (
        <Pagina1 onClick0={() => irParaPagina(0)} onClick2={() => irParaPagina(2)}/>
      )
    } else if (pagina == 2){
      return (
        <Pagina2 onClick0={() => irParaPagina(0)} onClick1={() => irParaPagina(1)}/>
      )
    } else {
      return (
        <Pagina0
          clickButton1={() => irParaPagina(1)}
          clickButton2={() => irParaPagina(2)}
        />
      )
    }
  }

  function irParaPagina(pagina){
    setPagina(pagina)
  }





  // método 2
  // useEffect(
  //   () => {
  //     let url = window.location.href.split('?')[1]
  //     setPagina(url)
  //   }
  // )

  // function metodo2() {
  //   if (pagina == 1) {
  //     return <Pagina1 onClick0={() => linksPagina(0)} onClick2={() => linksPagina(2)}/>
  //   } else if (pagina == 2) {
  //     return <Pagina2 onClick0={() => linksPagina(0)} onClick1={() => linksPagina(1)}/>
  //   } else {
  //     return <Pagina0 clickButton1={() => linksPagina(1)} clickButton2={() => linksPagina(2)}/>
  //   }
  // }

  // function linksPagina(pagina){
  //   if (pagina == 1) {
  //     window.open('http://localhost:3000?1', '_self')
  //   } else if (pagina == 2) {
  //     window.open('http://localhost:3000?2', '_self')
  //   } else {
  //     window.open('http://localhost:3000?0', '_self')
  //   }
  // }


  return (
   <>
      {retornarPagina()}
      {/* {metodo2()} */}
   </>
  )
}

export default App
