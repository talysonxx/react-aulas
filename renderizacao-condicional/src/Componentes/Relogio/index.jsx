import React from 'react'

export default function relogio(){
    return(
        // retorna uma string com uma representação sensível a hora do idioma padrão, sem necessidade do ('pt-BR')
        <p>{new Date().toLocaleTimeString('pt-BR')}</p>
    )
}