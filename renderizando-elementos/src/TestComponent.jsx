import React from 'react'

function TestComponent(propriedades){
    const {quandoClicado} = propriedades
    return(
        <div onClick={quandoClicado}>CLIQUE EM MIM</div>
    )
}

export default TestComponent