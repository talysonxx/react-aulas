import React from 'react'

const Resultado = ({somarNotas}) => {
    return (
        <>
           <p>Média geral: <strong>{(somarNotas / 4).toFixed(2).replace('.', ',')}</strong></p>
           <p>Situação: <strong>{somarNotas / 4>= 7 ? 'aprovado' : 'reprovado'}</strong></p>
        </>
    )
}

export default Resultado
