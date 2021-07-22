import React from 'react'

function Button(props){
    // pegando o valor da propriedade name e colocando na variável nome
    const {name: nome, onClick, age} = props

    return(
        <button onClick={onClick}>{nome} e {age}</button>
    )
}

export default Button
