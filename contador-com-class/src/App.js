import {Component} from 'react';

class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: props.inicio
    };

    // o this da função adicionar vai ser o mesmo this do elemento Contador
    this.adicionar = this.adicionar.bind(this);
    this.remover = this.remover.bind(this);
  };

  adicionar() {
    // this.setState({contador: this.state.contador + 1});
    this.setState((state => {return {contador: state.contador + 1}}));
  };
  remover(){
    // this.setState({contador: this.state.contador - 1});
    // jeito certo
    this.setState((state => {return {contador: state.contador - 1}}));
  };

  render() {
    return (
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.adicionar}>Adicinar</button>
        <button onClick={this.remover}>Remover</button>
      </div>
    );
  };
};

function App() {
  return (
    <Contador inicio={-999}/>
  );
};

export default App;
