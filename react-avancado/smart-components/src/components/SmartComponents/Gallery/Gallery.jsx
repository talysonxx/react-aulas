import React, {memo, Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import Img from '../../DumbComponents/Img/Img'
import Button from '../../DumbComponents/Button/Button'

function Gallery({fotos}) {
  const [gallery, setGallery] = useState(fotos)

  function renderizarFotos(foto, index) {
    return (
      <Fragment key={index}>
        <Img src={foto} alt=''/>
        <Button onClick={() => removerFoto(index)}>Remover foto {index}</Button>
        <br/>
      </Fragment>
    )
  }
  function removerFoto(indexFoto) {
    const novaGaleria = gallery.filter((foto, index) => index !== indexFoto)
    setGallery(novaGaleria)
    console.log('remover foto')
  }

  return (
    <Fragment>
      <h1>Galeria de Fotos</h1>
      {gallery.map(renderizarFotos)}
    </Fragment>
  )
}

Gallery.propTypes = {
  fotos: PropTypes.array.isRequired
}

export default memo(Gallery)
