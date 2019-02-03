import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'

import { Header } from './header'
import { Body } from './body'

const Layout = ({ children }) => (
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
      const title = data.site.siteMetadata.title

      return (
        <>
          <Helmet
            meta={[
              { name: 'description', content: 'TODO: data => ?' },
              { name: 'keywords', content: 'TODO: data => ?' },
            ]}
            defaultTitle={title}
            titleTemplate={`%s | ${title}`}
          >
            <html lang="en" />
          </Helmet>
          <Global styles={globalStyles} />
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

export { Layout }

const globalStyles = css`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    margin: 0;
  }
  code {
    font-family: 'Fira Code', 'SFMono-Regular', Consolas, 'Roboto Mono',
      'Droid Sans Mono', 'Liberation Mono', Menlo, Courier, monospace;
  }
  li {
    margin-bottom: 0.25rem;
  }
`
