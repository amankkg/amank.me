import React from 'react'
import Helmet from 'react-helmet'

import Layout from './components/layout'

export default function MdTemplate({
  data: {
    markdownRemark: {
      frontmatter: { title, date },
      html,
    },
  },
}) {
  return (
    <Layout>
      <Helmet title={title} />
      <h5>{date}</h5>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
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
