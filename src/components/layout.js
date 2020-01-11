import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'

import {Header} from './header'
import {Body} from './body'

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const {title} = data.site.siteMetadata

      return (
        <>
          <Header siteTitle={title} />
          <Body>{children}</Body>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node,
}

export {Layout}
