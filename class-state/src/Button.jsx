import React from 'react'

function Button(props){
    return(
        // <button onClick={props.quandoClicar}>{props.texto}</button>
        <div>
            <button onClick={() => {props.quandoClicado(props.nomeBotao)}}>{props.nomeBotao}</button>
        </div>
    )
}

export default Button
