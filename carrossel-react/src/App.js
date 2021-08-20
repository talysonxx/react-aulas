import React, {useEffect} from 'react'
import Carousel from './components/Carousel/Carousel'

function App() {
  useEffect(() => {
    document.title = 'React - carrosel'
    document.body.style.backgroundColor = 'lightblue'
  })

  return (
    <>
      <h1>Carrosel</h1>
      <Carousel/>
    </>
  )
}

export default App
