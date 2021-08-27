import React from 'react'
import axios from 'axios'

export default class ListaCarros extends React.Component {
  state = {
    carros: []
  }

  componentDidMount() {
    axios.get('https://primeiraapireact.talysonxx.repl.co')
    .then(responde => {
        console.log('Requisição realizada com sucesso')
        const dadosCarros = responde.data
        this.setState({carros: dadosCarros})
      })
    .catch(error => console.log('Houve alguem erro:', error))
  }

  render() {
    return (
      <div>
        {this.state.carros.map(({id, modelo, marca}) => (
          <div key={id}>
           {id} | {marca} - {modelo}
          </div>
        ))}
      </div>
    )
  }
}
