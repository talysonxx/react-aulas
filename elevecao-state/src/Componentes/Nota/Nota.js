import React from 'react'

const Nota = ({id, value, setNota}) => {
    return (
        <>
            <label htmlFor={id}>Informe a nota: {id}</label>
            <input id={id} type="number" value={value} onChange={({target: {value}}) => setNota(value)}></input>
            <br/>
        </>
    )
}

export default Nota
