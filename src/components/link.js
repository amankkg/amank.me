import React from 'react'
import PropTypes from 'prop-types'
import {Link as GatsbyLink} from 'gatsby'

const Link = ({children, text, ...props}) => (
  <GatsbyLink {...props}>
    {text != null && children == null ? text : children}
  </GatsbyLink>
)

Link.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
}

export {Link}
