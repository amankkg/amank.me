import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'

import { light } from '../themes'
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
          <ThemeProvider theme={light}>
            <>
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
