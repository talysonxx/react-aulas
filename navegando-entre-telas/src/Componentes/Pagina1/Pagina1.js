import React from 'react'

export default function Pagina1({onClick0, onClick2}) {
    return (
        <div>
            <h1>Página 1</h1>
            <h3>Sim</h3>
            <button onClick={onClick0}>voltar</button>
            <button onClick={onClick2}>Página 2</button>
        </div>
    )
}
