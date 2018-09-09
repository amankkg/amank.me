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
    render={data => {
      const title = data.site.siteMetadata.title
      const meta = [
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]
      console.log(data)

      return (
        <>
          <Helmet
            meta={meta}
            defaultTitle={title}
            titleTemplate={`%s | ${title}`}
          />
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
          </ThemeProvider>
          <ThemeProvider theme={defaultTheme}>
            <Header siteTitle={title} />
          </ThemeProvider>
          <ThemeProvider theme={defaultTheme}>
            <Body>{children}</Body>
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
