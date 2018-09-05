import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { Header } from './header'
import { Body } from './body'

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

  return (
    <StaticQuery
      // TODO: extract as local variable once https://github.com/gatsbyjs/gatsby/issues/6545 fixed
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={render}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export { Layout }
