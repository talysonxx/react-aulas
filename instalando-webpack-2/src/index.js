import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return(
        <h1>NavBar</h1>
    )
}

const container = document.getElementById('root')

container ? ReactDOM.render(<App />, container) : false