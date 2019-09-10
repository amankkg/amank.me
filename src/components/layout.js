import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
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
            author
          }
        }
      }
    `}
    render={data => {
      const {title, author} = data.site.siteMetadata

      return (
        <>
          <Helmet
            meta={[
              {name: 'description', content: author},
              {name: 'keywords', content: author},
            ]}
            defaultTitle={title}
            titleTemplate={`%s | ${title}`}
          >
            <html lang="en" />
          </Helmet>
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
