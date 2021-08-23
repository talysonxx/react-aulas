import React, {Component} from 'react'

class CalcularImcClass extends Component{
  constructor(){
    super()
    this.calc = this.funcaoCalcular.bind(this)
  }

  funcaoCalcular = () => {
    const resultado = (this.props.pesoAltura.peso / this.props.pesoAltura.altura ** 2).toFixed(2).replace('.', ',')
    this.props.validador(resultado)

  }

  render(){
    return(
      <button onClick={() => this.calc()}>{this.props.texto}</button>
    )
  }
}

export default CalcularImcClass
