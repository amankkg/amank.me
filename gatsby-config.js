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
    // TODO: finish adding these plugins
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     excerpt_operator: '<!-- end -->',
    //     plugins: [
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           maxWidth: 700,
    //           linkImagesToOriginal: false,
    //           wrapperStyle: 'margin: 15px -30px !important',
    //         },
    //       },
    //       {
    //         resolve: 'gatsby-remark-responsive-iframe',
    //         wrapperStyle: 'margin-bottom: 1.0725rem',
    //       },
    //       'gatsby-remark-prismjs',
    //       'gatsby-remark-copy-linked-files',
    //       'gatsby-remark-smartypants',
    //     ],
    //   },
    // },
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
  ],
}