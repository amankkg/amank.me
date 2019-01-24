module.exports = {
  siteMetadata: {
    title: 'amank.me',
    author: 'Aman Kubanychbek',
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
          // 'gatsby-remark-prismjs',
          // 'gatsby-remark-copy-linked-files',
          // 'gatsby-remark-smartypants',
        ],
      },
    },
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'amank.me',
        short_name: 'amank.me',
        start_url: '/',
        background_color: 'white',
        theme_color: 'black',
        display: 'minimal-ui',
        icon: 'content/code.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
  ],
}
