import React, {Component} from 'react'

class InputPesoClass extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <input
      placeholder={this.props.placeholder}
      onChange={(event => this.props.onChange(event))}
      value={this.props.value}
      type={this.props.type}/>
    )
  }
}

export default InputPesoClass
