import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import { Layout } from './components'

const MdTemplate = ({
  data: {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
  },
}) => (
  <Layout>
    <Helmet title={title} />
    <small>last active: {date}</small>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)

MdTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
      html: PropTypes.string.isRequired,
    }),
  }),
}

// TODO: refactor to `export { MdTemplate as default, query }` once supported by gatsby
export const query = graphql`
  query MdTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`

export default MdTemplate
