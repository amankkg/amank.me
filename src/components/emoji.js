import React from 'react'
import PropTypes from 'prop-types'

const Emoji = ({label, value}) => (
  <span role="img" aria-label={label}>
    {value}
  </span>
)

Emoji.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export {Emoji}
