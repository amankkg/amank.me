import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Layout } from './components'

const pageQuery = graphql`
  query MdTemplate($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

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
    <h5>{date}</h5>
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

export { MdTemplate as default, pageQuery }
