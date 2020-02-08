# createPages function

The `createPages` function is probably going to be your first foray out of just the **gatsby-config** file and into the meat of Gatsby’s API. The `gatsby-node.js` file is where most of a developer’s interaction with Gatsby’s API takes place. Let’s look at how we are building a page for each of our movies in Nitflex:

```jsx
const path = require('path');
exports.createPages = async ({ graphql, actions }) => {
 // createPages (note the plural) is a Gatsby API lifecycle hook.
 // Each lifecycle hook receives an `actions` object with helper methods.
 // We will be leveraging the `createPage` function.
 const { createPage } = actions;
 // **Note:** The graphql function call returns a Promise
 // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
 // Here we query all of our movies and get their url (path.alias).
 // Note we rename allNodeMovie to 'movies'
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
 
 // We then map over each movie in the array.
 result.data.movies.edges.forEach(({ node }) => {
   // Now we call the createPage helper function and pass it
   // the necessary data.
   createPage({
     // The relative url we want for the page when published.
     path: node.path.alias,
     // The path to the template component for this page.
     component: path.resolve('./src/templates/movie.js'),
     context: {
       // Data passed to context is available
       // in page queries as GraphQL variables.
       slug: node.path.alias
     }
   });
 });
};

```

This is really cool! We could make 1000s of pages this way. This is the most common way that pages are made in Gatsby. But we aren’t querying enough data to make our page have content. How does the page get all the data it needs? Here, we are just querying enough to get an ‘id’ type field for each movie. We need to look in the `movie.js`.

