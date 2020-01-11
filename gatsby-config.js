const constants = require('./constants')

module.exports = {
  siteMetadata: {
    title: constants.siteTitle,
    author: constants.fullName,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: constants.siteTitle,
        short_name: constants.siteTitle,
        start_url: '/',
        background_color: 'white',
        theme_color: 'blue',
        display: 'minimal-ui',
        icon: 'content/logo.svg',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-linaria',
  ],
}
