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
        baseUrl: 'https://dev-psutraining.pantheonsite.io/'
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Roboto',
            variants: ['900, 700, 400']
          },
          {
            family: 'Roboto Slab',
            variants: ['700, 400']
          },
          {
            family: 'Roboto Condensed',
            variants: ['700, 400']
          }
        ]
      }
    }
  ]
};
