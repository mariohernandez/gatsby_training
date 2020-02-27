# Gatsby Link

Any page that Gatsby creates is going to be static and fast. Gatsby knows which pages it has created, so we can do something special to make those pages feel even faster. Let’s look at this example from the docs:

```jsx
import React from "react"
import { Link } from "gatsby"

const Page = () => (
  <div>
    <p>
      Check out my <Link to="/blog">blog</Link>!
    </p>
    <p>
      {/* Note that external links still use `a` tags. */}
      Follow me on <a href="https://twitter.com/gatsbyjs">Twitter</a>!
    </p>
  </div>
)
```

What `Link` does is preload or prefetch any pages it is directed to.  One preload is a low priority request when its corresponding `Link` is in the viewport.  Then, if the user hover or focuses the `Link` a high priority request is made. So then, by the time the user clicks the `Link` the destination page is probably already loaded.  This gives navigation a nearly instant feel.

The `Link` component has its own documented powerful API that I recommend looking into specifically.  It, along with `gatsby-image` are two of the best features that come out of the box with Gatsby. Often you will see built-in logic added to a wrapper component to test for whether the Gatsby should render a `Link` or an `a` tag, as well as whether the destination is a file download.  This let’s you be more flexible, and not have to determine whether you can use `Link` in every instance. Here is the documented example of what most `Link` tags end up looking like in production as a new wrapper component called `GatsbyLink`:

```jsx
import { Link as GatsbyLink } from "gatsby"
// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)
  const file = /\.[0-9a-z]+$/i.test(to)

  // Use Gatsby Link for internal links, and <a> for others
 if (internal) {
   if (file) {
       return (
         <a href={to} {...other}>
           {children}
         </a>
     )
   }

   return (
     <GatsbyLink
       to={to}
       activeClassName={activeClassName}
       partiallyActive={partiallyActive}
       {...other}
     >
       {children}
     </GatsbyLink>
   )
 }
 return (
   <a href={to} {...other}>
     {children}
   </a>
 )
 }

export default Link
```

