module.exports = {
  siteMetadata: {
    title: 'NitFlex',
    description: ''
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://nitflex.lndo.site/'
      }
    }
  ]
};
