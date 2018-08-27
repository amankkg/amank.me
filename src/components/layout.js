import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { Header } from './header'
import { Body } from './body'

// TODO: use local variable once this issue resolved https://github.com/gatsbyjs/gatsby/issues/6545
// const layoutQuery = graphql`
//   query LayoutQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `

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
