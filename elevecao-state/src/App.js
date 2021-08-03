import React, {useState} from 'react'
import Nota from './Componentes/Nota/Nota'
import Resultado from './Componentes/Resultado/Resultado'

const App = () => {
    const[nota1, setNota1] = useState(0)
    const[nota2, setNota2] = useState(0)
    const[nota3, setNota3] = useState(0)
    const[nota4, setNota4] = useState(0)

    // const situacao = (nota) => {
    //     return nota >= 7 ? 'aprovado' : 'reprovado'
    // }
    // const somarNotas = () => {
    //     const notaGeral = (nota1 + nota2 + nota3 + nota4) / 4

    //     const resultado = {
    //         notaGeral,    
    //         resultado: situacao(notaGeral)
    //     }
    //     return resultado
    // }

    return (
        <>
            <Nota id="1" value={nota1} setNota={setNota1}/>
            <Nota id="2" value={nota2} setNota={setNota2}/>
            <Nota id="3" value={nota3} setNota={setNota3}/>
            <Nota id="4" value={nota4} setNota={setNota4}/>
            <Resultado somarNotas={parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)}/>
        </>
    )
}

export default App
