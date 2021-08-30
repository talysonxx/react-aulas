import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import PgUm from './Componentes/PaginaUm'
import PgDois from './Componentes/PaginaDois'
import PgTres from './Componentes/PaginaTres'

function App() {
  return (
    <>
      <header>
        <Link to='/'>Home Pag</Link>
        <br/>
        <Link to='/pag1'>Pagina Um</Link>
        <br/>
        <Link to='/pag2'>Pagina Dois</Link>
        <br/>
        <Link to='/pag3'>Pagina Tres</Link>
      </header>

      <main>
        <Switch>
          <Route path='/pag1' component={PgUm}></Route>
          <Route path='/pag2' component={PgDois}></Route>
          <Route path='/pag3' component={PgTres}></Route>
        </Switch>
      </main>
    </>
  )
}

export default App
