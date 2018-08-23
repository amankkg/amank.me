import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { Header } from './header'
import { Body } from './body'

const layoutQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children }) => {
  const render = ({
    site: {
      siteMetadata: { title },
    },
  }) => (
    <>
      <Helmet
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
        defaultTitle={title}
        titleTemplate={`%s | ${title}`}
      />
      <Header siteTitle={title} />
      <Body>{children}</Body>
    </>
  )

  return <StaticQuery query={layoutQuery} render={render} />
}

Layout.propTypes = {
  children: PropTypes.node,
}

export { Layout }
