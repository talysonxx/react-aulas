import React from 'react'

const Nota = ({id, value, setNotas}) => {
    return (
        <>
            <label htmlFor={id}>Informe a nota: {id}</label>
            <input id={id} type="number" value={value} onChange={(component) => setNotas(component)}></input>
            <br/>
        </>
    )
}

export default Nota
