import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

import constants from '../../constants'

const Metatags = ({title, description, keywords, thumbnail}) => (
  <StaticQuery
    query={graphql`
      query MetatagsQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => {
      const {title: siteTitle, author} = data.site.siteMetadata

      const keywordsString = keywords ? keywords.join(', ') : author

      const metatags = [
        {name: 'title', content: title},
        {name: 'description', content: description || author},
        {name: 'keywords', content: keywordsString},
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: constants.siteTitle},
        {property: 'og:title', content: title},
        // TODO: use `location.href`?
        {property: 'og:url', content: 'https://amank.me'},
        {property: 'og:image', content: thumbnail && thumbnail},
        {property: 'og:image:secure_url', content: thumbnail && thumbnail},
        {property: 'og:description', content: description},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'og:locale', content: 'en'},
        {name: 'robots', content: 'index, follow'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: title},
        {name: 'twitter:description', content: description},
        {name: 'twitter:image', content: thumbnail && thumbnail},
        {name: 'twitter:creator', content: constants.twitter},
      ]

      return (
        <Helmet
          title={title}
          defaultTitle={siteTitle}
          titleTemplate={`%s | ${siteTitle}`}
          meta={metatags}
        >
          <html lang="en" />
        </Helmet>
      )
    }}
  />
)

Metatags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  thumbnail: PropTypes.string,
}

export {Metatags}
