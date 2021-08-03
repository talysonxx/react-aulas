import React from 'react'

const Resultado = ({somarNotas}) => {
    return (
        <>
           <p>Situação: <strong>{(somarNotas / 4).toFixed(2).replace('.', ',')}</strong></p>
           <p>Soma das notas: <strong>{somarNotas / 4>= 7 ? 'aprovado' : 'reprovado'}</strong></p>
        </>
    )
}

export default Resultado
