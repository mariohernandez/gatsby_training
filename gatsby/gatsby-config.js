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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/global/images/`
      }
    },
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://nitflex.lndo.site/',
        // apiBase: `api`, // optional, defaults to `jsonapi`
      }
    }
  ]
};
