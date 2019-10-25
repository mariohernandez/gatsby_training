/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      movies: allNodeMovie {
        edges {
          node {
            path {
              alias
            }
          }
        }
      }
    }
  `);

  result.data.movies.edges.forEach(({ node }) => {
    createPage({
      path: node.path.alias,
      component: path.resolve('./src/templates/movie.js'),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.path.alias
      }
    });
  });
};
