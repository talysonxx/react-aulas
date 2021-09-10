import React, {memo} from 'react'
import PropTypes from 'prop-types'

function Button({children, onClick}) {
  return <button onClick={onClick}>{children}</button>
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default memo(Button)
