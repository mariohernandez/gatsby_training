# Creating pages

Creating pages in Gatsby can be done in three ways:

* Static Page creation
* Using the **createPages** function
* Using a plugin's **createPages** function

### Static Page creation

This is the simplest. You can explicitly define pages by giving them their own `myPage.js` file inside **src/pages**. Gatsby automatically looks in this directory and takes whatever React components you have in each page, runs their GraphQL queries, marries them together and outputs a single static page.

#### Creating our site's Index page

If we look in our folder structure, we have a `src/pages/` directory. Let’s add an `index.js` file there and see what happens. We add our markup, and Gatsby picks it up automatically, knows `index` means it’s the homepage, and now we see it. Easy! But how do we get our data on to the page? Let’s look at Gatsby’s idea for that.

#### Page queries

Gatsby has a concept of ‘page queries’. This means you structure a GraphQL query in a certain way that Gatsby knows you want to query this data at build time, not in the browser. Remember, GraphQL queries certainly can be made in the browser, but our special Gatsby GraphQL server only exists during our build time. So this type of query can only exist in **page** or **template** files. I didn’t show this aspect on the `index.js` page template, but it functions in the same way. To create one, at the bottom of the file we would put something like this:

```graphql
export const query = graphql`
 {
  // gatsby-plugin-drupal created a query for us called allNodeMovie
  // that doesn’t take any arguments
   allNodeMovie {
     // We get the array and get the fields off of each node that we want.
     edges {
       node {
         title
      rating
      stars
       }
     }
   }
 }
`;
```

When you query data this way in a page component, the root component, will now get a new prop called `data`. Then you can pull out the data that you queried and render it.

So the upside, it’s simple! Downside, imagine for a blog, you would have to create a blog-1.js, blog-2.js, and so on. You could say well, I can make a React component template and each of these would leverage that and use the same data in the same way. Well, guess what! Gatsby already has a mechanism for all of this. Which brings us to the `createPages` function.

