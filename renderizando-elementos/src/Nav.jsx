import React from 'react';

function Nav(propriedades){

    const {tamanho, altura, quandoClicado} = propriedades
    return(
        <div>
            <ul onClick={quandoClicado}>
                <li className="item">Menu</li>
                <li className="item">Home</li>
                <li className="item">Sobre</li>
                <li>{tamanho}</li>
                <li>{altura}</li>
            </ul>
        </div>
    )
}

export default Nav