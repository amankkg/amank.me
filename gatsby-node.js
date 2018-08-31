const path = require('path')

exports.createPages = ({ actions: { createPage }, graphql }) =>
  new Promise((resolve, reject) => {
    const MdTemplate = path.resolve('./src/md-template.js')

    resolve(
      graphql(`
        {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      `),
    ).then(({ data, errors }) => {
      if (errors) reject(errors)

      data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: MdTemplate,
        })
      })
    })
  })
