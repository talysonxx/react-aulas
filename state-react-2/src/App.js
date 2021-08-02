import React, {useState} from "react";

export default function App(){
  const [numState, alterarNum] = useState(30)
  let numero = 20
  let cont = 0

  const numeroVariavel = () =>{
    numero++
    if(cont == 0) window.alert('Olhe o console (F12)')
    window.console.log('valor da variável: ' + numero)
    cont++
  }

  return(
    <>
      <p>Usando variável: {numero}</p>
      <button onClick={() => numeroVariavel()}>adicionar + 1 na Variável => valor: {numero}</button>
      
      <p>Usando state: {numState}</p>
      <button onClick={() => alterarNum(numState + 1)}>adicionar + 1 no state => valor: {numState}</button>
    </>
  )
}