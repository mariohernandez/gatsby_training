# Creating a template

Remember the `slug` context variable we passed in in **gatsby-node**?  That's the `$slug` we are querying with here!

```graphql
export const query = graphql`
 // Define our unique query name and tell it to expect
 // a required argument that is a string that we will call
 // $slug.
 moviePageQuery($slug: String!) {
   // Query a single nodeMovie that uses some built-in
   // Gatsby/GraphQL filtering to say path.alias should
   // equal the $slug argument.
   movie: nodeMovie(path: { alias: { eq: $slug } }) {
       // We rename nodeMove to movie and grab the fields we want.
    title
    rating
    stars
   }
 }
`;
```

See how we are getting the exact movie we want based on its unique slug? Then we can grab the data fields we want to render in our component. That component looks like this now:

```jsx
const MovieTemplate = ({ data }) => {
 const { movie } = data;
 return (
   <div>
     <div>{movie.title}</div>
     <div>{movie.rating}</div>
     <div>{movie.stars}</div>
   </div>
 );
};
```

Using Javascript destructuring we pull the data we named \`movie\` out and render the fields we want.

Wow, that’s a lot to take in, but if you get that pattern down alone, you are well on your way to building large sites with Gatsby. 💥

