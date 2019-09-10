import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import {styled} from 'linaria/react'

import {Layout} from './components'

export const mdTemplateQuery = graphql`
  query MdTemplateQuery($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        updated(formatString: "MMM Do YYYY")
        title
      }
    }
  }
`

const MdTemplate = ({data}) => {
  const {frontmatter, html} = data.markdownRemark

  return (
    <Layout>
      <Helmet title={frontmatter.title} />
      <Info>
        Last active: <strong>{frontmatter.updated}</strong>
      </Info>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </Layout>
  )
}

MdTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        updated: PropTypes.string.isRequired,
      }),
      html: PropTypes.string.isRequired,
    }),
  }),
}

export default MdTemplate

const Info = styled.small`
  float: right;
`
