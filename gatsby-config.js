const constants = require('./constants')

module.exports = {
  siteMetadata: {
    title: constants.siteTitle,
    author: constants.fullName,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_operator: '<!-- end -->',
        plugins: [
          // {
          //   resolve: 'gatsby-remark-images',
          //   options: {
          //     maxWidth: 700,
          //     linkImagesToOriginal: false,
          //     wrapperStyle: 'margin: 15px -30px !important',
          //   },
          // },
          // {
          //   resolve: 'gatsby-remark-responsive-iframe',
          //   wrapperStyle: 'margin-bottom: 1.0725rem',
          // },
          'gatsby-remark-prismjs',
          // 'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: constants.siteTitle,
        short_name: constants.siteTitle,
        start_url: '/',
        background_color: 'white',
        theme_color: 'blue',
        display: 'minimal-ui',
        icon: 'content/code.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
  ],
}
