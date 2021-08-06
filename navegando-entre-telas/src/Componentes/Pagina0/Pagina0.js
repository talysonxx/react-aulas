import React from 'react'

export default function Pagina0({clickButton1, clickButton2}) {
    return (
        <div>
            <p>tela inicial</p>
            <button onClick={clickButton1}>Ir para a página 1</button>
            <button onClick={clickButton2}>Ir para a página 1</button>
        </div>
    )
}
