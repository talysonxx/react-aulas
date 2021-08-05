import React, {Component} from 'react'

export default class Paragrafo extends Component {
    constructor(props) {
        super(props)
        // criando variáveis
        this.nome = 'talyson'

        // useState
        this.state = {
             homem: true,
             idade: 18,
             soma: 0,
             velocidade: 0
        }
        // o this de homem() agora é o mesmo de Paragrafo
        this.LD = this.homem.bind(this)
    }

    homem(){
        // this.state.homem = false
        // this.setState({homem: !this.state.homem, soma: this.state.soma + 1})
        this.setState(
            (state) => (
                {
                    homem: !state.homem,
                    soma: state.soma + (1 * state.velocidade)
                }
            )
        )
    }
    aumentarVelocidade(){
        this.setState(
            (state, props) => (
                {
                    velocidade: state.velocidade + props.fator
                }
            )
        )
    }
    diminuirVelocidade(){
        this.setState(
            (state, props) => (
                {
                    velocidade: state.velocidade - props.fator
                }
            )
        )
    }

    render() {
        return (
            <p>
                <p>
                    soma: {this.state.soma}
                    <br/>
                    valocidade: {this.state.velocidade}
                </p>
                bah
                <br/>
                Texto pelo props: {this.props.texto}
                <br/>
                Nome: {this.nome}
                <br/>
                 kaka {this.state.homem ? 'sim' : 'não'} {this.state.idade} {this.state.soma}
                 <button onClick={this.LD}>clique</button>
                 <button onClick={() => this.aumentarVelocidade()}>Aumentar velocidade</button>
                 <button onClick={() => this.diminuirVelocidade()}>diminuir velocidade</button>
            </p>
        )
    }
}