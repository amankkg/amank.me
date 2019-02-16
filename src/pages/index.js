import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import { Layout, Link } from '../components'

const IndexPage = ({ data }) => (
  <>
    <Helmet title="Home" />
    <Layout>
      <PostList>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostLink
            key={node.fields.slug}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
          />
        ))}
      </PostList>
    </Layout>
  </>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }),
      ),
    }),
  }),
}

export default IndexPage

export const pagesListQuery = graphql`
  query PagesListQuery {
    allMarkdownRemark(
      # filter: { frontmatter: { title: { ne: "CV" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`

const PostList = styled.div`
  display: flex;
  flex-direction: column;
`

const PostLink = ({ slug, title, date }) => (
  <Link to={slug}>
    <Date>{date}</Date>: <Title>{title}</Title>
  </Link>
)

PostLink.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

const Date = styled.span`
  font-style: italic;
`

const Title = styled.span`
  font-weight: bold;
`
