import React, {useEffect} from 'react'
import Carousel from './components/Carousel/Carousel'

function App() {
  useEffect(() => {
    document.title = 'React - carrosel'
  })

  return (
    <>
      <h1>Carrosel</h1>
      <Carousel/>
    </>
  )
}

export default App
