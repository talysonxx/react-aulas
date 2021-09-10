import React, {memo} from 'react'
import PropTypes from 'prop-types'

function Img({src, alt, width}) {
  return <img src={src} alt={alt} width={width}></img>
}

Img.defaultProps = {
  width: '200px'
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default memo(Img)
