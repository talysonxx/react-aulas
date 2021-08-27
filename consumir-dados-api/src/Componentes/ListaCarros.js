import React from 'react'
import axios from 'axios'

export default class ListaCarros extends React.Component {
  state = {
    carros: []
  }

  // é executado logo após seu componente ser montado e também após o render; ótimo para requestes, listeners, setState e promisses
  componentDidMount() {
    axios.get('https://primeiraapireact.talysonxx.repl.co')
    .then(({data}) => {
        console.log('Requisição realizada com sucesso')
        // const dadosCarros = responde.data
        this.setState({carros: data})

        // console.log(data)
        // console.log(this.state.carros)
      })
    .catch(error => console.log('Houve alguem erro:', error))
  }

  render() {
    const {carros} = this.state

    return (
      <div>
        {carros.map(({id, modelo, marca}) => (
          <div key={id}>
           {id} | {marca} - {modelo}
          </div>
        ))}
      </div>
    )
  }
}
