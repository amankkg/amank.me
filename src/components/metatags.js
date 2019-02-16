import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import constants from '../../constants'

const Metatags = ({
  title,
  description,
  keywords,
  url,
  pathname,
  thumbnail,
}) => (
  <Helmet
    title={title}
    meta={[
      { name: 'title', content: title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:url',
        content: pathname ? url + pathname : url,
      },
      {
        property: 'og:image',
        content: thumbnail && thumbnail,
      },
      {
        property: 'og:image:secure_url',
        content: thumbnail && thumbnail,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        property: 'og:locale',
        content: 'en',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'twitter:image',
        content: thumbnail && thumbnail,
      },
      { property: 'og:type', content: 'website' },
      { name: 'robots', content: 'index, follow' },
      { name: 'twitter:creator', content: constants.twitter },
      { property: 'og:site_name', content: constants.siteTitle },
    ]}
  >
    <html lang="en" />
  </Helmet>
)

Metatags.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
  pathname: PropTypes.string,
  thumbnail: PropTypes.string,
}

export { Metatags }
