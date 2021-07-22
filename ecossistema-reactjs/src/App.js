import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/cjs/react-dom-test-utils.production.min";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      clock: 1000,
      glass: 'water'
    }
  }

  // função nativa (executa depois que o elemento é montado no DOM)
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        glass: 'juice'
      })
    }, 2000)
  }

  changeGlass = () => {
    this.setState({
      glass: 'soda pop'
    })
  }

  render(){
    const {clock, glass} = this.state

    return(
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.changeGlass()}>{glass}</button>
      </div>
    )
  }
}

export default App;
