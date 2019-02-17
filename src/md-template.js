import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, Metatags } from './components'

export const mdTemplateQuery = graphql`
  query MdTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMM Do YYYY")
        updated(formatString: "MMM Do YYYY")
        title
        description
        keywords
      }
    }
    site {
      siteMetadata {
        url
      }
    }
  }
`

const MdTemplate = ({ data, location }) => {
  const { pathname } = location
  const { url } = data.site.siteMetadata
  const { frontmatter, html } = data.markdownRemark
  const { date, updated, title, description, keywords } = frontmatter

  return (
    <Layout>
      <Metatags
        title={title}
        description={description}
        keywords={keywords}
        url={url}
        pathname={pathname}
      />
      <small title={`Created: ${date}`} css={{ float: 'right' }}>
        Last active: <strong>{updated}</strong>
      </small>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

MdTemplate.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        updated: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default MdTemplate
