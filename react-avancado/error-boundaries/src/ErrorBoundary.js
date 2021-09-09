import React, {Component} from 'react'
import ErrorImg from './img/ErrorImg.jpg'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temErro: false
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log('error', error)
    console.log('errorInfo', errorInfo)

    this.setState({
      temErro: true
    })
  }

  render() {
    if(this.state.temErro) {
      return <img src={`${ErrorImg}`} alt=''/>
    }

    return this.props.children
  }
}

export default ErrorBoundary
