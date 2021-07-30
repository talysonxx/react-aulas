import { prependToMemberExpression } from '@babel/types'
import React from 'react'
// método class
import './style.css'

// método inline
const divStyle = {
  color: 'blue',
  backgroundColor: 'red'
}

function App() {
  function HelloWord({style, children}){
    return(
      <h1 style={style}>{children}</h1>
    )
  }

  // const EstiloDiv = styled.div`
  //   color: blue;
  //   background: url('${props => props.imageUrl}')
  // `
  // function DivEstilizada(){
  //   const imagem = 'bit.ly/2L8xxHz'
  //   return <EstiloDiv imageUrl={imagem}></EstiloDiv>
  // }

  return (
    <div>
      {/* método inline */}
      <div
      style={divStyle}>
        こんにちは、世界！
      </div>

    <HelloWord
    style={{color: 'blue', marginTop: '20px'}}>
      こんにちは、世界！
    </HelloWord>




    {/* método class */}
    <div id="divClass">SIMSIM</div>
    

    {/* css in js */}
    {/* <DivEstilizada></DivEstilizada> */}
    </div>
  );
}

export default App;
