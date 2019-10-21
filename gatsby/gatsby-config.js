module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description: ''
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://nitflex.lndo.site/'
      }
    }
  ]
};
