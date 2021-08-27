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
        {this.state.carros.map(carro => (
          <div key={carro.id}>
            {carro.marca} - {carro.modelo}
          </div>
        ))}
      </div>
    )
  }
}
