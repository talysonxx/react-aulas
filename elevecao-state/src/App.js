import React, {useState} from 'react'
import Nota from './Componentes/Nota/Nota'
import Resultado from './Componentes/Resultado/Resultado'

const App = () => {
    const initObj = {
        nota1: 0,
        nota2: 0,
        nota3: 0,
        nota4: 0
    }
    const [notas, setNotas] = useState(initObj)

    // const[nota1, setNota1] = useState(0)
    // const[nota2, setNota2] = useState(0)
    // const[nota3, setNota3] = useState(0)
    // const[nota4, setNota4] = useState(0)

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
    const handleChangeNotas = ({target: {id, value}}) => {
        if(id == '1'){
            setNotas({nota1: value, nota2: notas.nota1, nota3: notas.nota3, nota4: notas.nota4})
        }else if(id == '2'){
            setNotas({nota1: notas.nota1, nota2: value, nota3: notas.nota3, nota4: notas.nota4})
        }else if(id == '3'){
            setNotas({nota1: notas.nota1, nota2: notas.nota1, nota3: value, nota4: notas.nota4})
        }else{
            setNotas({nota1: notas.nota1, nota2: notas.nota1, nota3: notas.nota3, nota4: value})
        }
    }

    return (
        <>
            <Nota id="1" value={notas.nota1} setNotas={handleChangeNotas}/>
            <Nota id="2" value={notas.nota2} setNotas={handleChangeNotas}/>
            <Nota id="3" value={notas.nota3} setNotas={handleChangeNotas}/>
            <Nota id="4" value={notas.nota4} setNotas={handleChangeNotas}/>
            <Resultado somarNotas={parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)}/>
        </>
    )
}

export default App
