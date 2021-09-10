import React from 'react'
import Gallery from './components/SmartComponents/Gallery/Gallery'

function App() {
  const fotos = [
    'https://i.imgur.com/UAbroeh.jpeg',
    'https://i.imgur.com/55cDGz4.jpeg',
    'https://i.imgur.com/TNjYTFO.jpeg',
    'https://i.imgur.com/tkkqaTG.jpeg'
  ]

  return (
    <div>
      <Gallery fotos={fotos}/>
    </div>
  )
}

export default App
