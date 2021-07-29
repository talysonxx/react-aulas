import React from 'react'
import Button from '../Button'
import {useState} from 'react'

function Card(){
    // useState traz um array com uma variável e uma função
    // estado inicial: 0
    const [valor, setValor] = useState(0)

    function Adicionar(){
        setValor(valor + 1)
    }

    function Remover(){
        setValor(valor - 1)
    }
    
    return(
        <div className="card">
            <div className="card-header">
                Meu Card
            </div>
            <div className="card-body">

            <Button
                className="btn btn-success"
                type="button"
                onClick={Adicionar}>
                    Adicionar
            </Button>

            <br/><br/>
            <p>{valor}</p>

            <Button
                className="btn btn-danger"
                type="button"
                onClick={Remover}>
                    Remover
            </Button>
            </div>
        </div>
    )
}

export default Card
