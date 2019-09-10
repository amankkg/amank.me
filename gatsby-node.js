const path = require('path')
const {createFilePath} = require('gatsby-source-filesystem')

exports.createPages = ({graphql, actions: {createPage}}) =>
  new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          sort: {fields: [frontmatter___date], order: DESC}
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(({data, errors}) => {
      if (errors) return reject(errors)

      data.allMarkdownRemark.edges.forEach(({node}) => {
        const mdTemplate = path.resolve('./src/md-template.js')

        createPage({
          path: node.fields.slug,
          component: mdTemplate,
          context: {
            slug: node.fields.slug,
          },
        })
      })

      resolve()
    })
  })

exports.onCreateNode = ({node, getNode, actions: {createNodeField}}) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({node, getNode, basePath: 'pages'})

    createNodeField({node, name: 'slug', value: slug})
  }
}
