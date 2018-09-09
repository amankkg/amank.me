import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, defaultTheme } from '../global-style'
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
          />
          <ThemeProvider theme={defaultTheme}>
            <>
              <GlobalStyle />
              <Header siteTitle={title} />
              <Body>{children}</Body>
            </>
          </ThemeProvider>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node,
}

export { Layout }
