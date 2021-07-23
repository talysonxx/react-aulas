import React from "react";
import Button from './Button'

function MyLabel(props){
  return(
    <div>
      {console.log(props)}
      <p>{props.text}</p>
    </div>
  )
}

class MinhaLabel extends React.Component{
  render(){
    return(
      <div>
        {console.log(this.props)}
        <p>{this.props.text}</p>
      </div>
    )
  }
}
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      nomeLabel: 'bahh'
    }
  }

  changeTextLabel = (nomeLabel) =>{
    this.setState({nomeLabel})
    console.log(nomeLabel)
  }

  render(){
    return(
     <div>
       {/* LEMBRE-SE: COMPONENTES EM REACT TEM LETRA INICIAL MAIÚSCULA */}
       <MyLabel text={this.state.nomeLabel}/>
       <MinhaLabel text={this.state.nomeLabel}/>
       <Button nomeBotao="btn-1" quandoClicado={this.changeTextLabel}  texto="lula" quandoClicar={() => console.log('bla')} />
       <Button nomeBotao="btn-2" quandoClicado={this.changeTextLabel}  texto="bolsonaro"/>
       <Button nomeBotao="btn-3" quandoClicado={this.changeTextLabel}  texto="haddad"/>
       <Button nomeBotao="btn-4" quandoClicado={this.changeTextLabel}  texto="ciro 12"/>
     </div>
    )
  }
}

export default App;
