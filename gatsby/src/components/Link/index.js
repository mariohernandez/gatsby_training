import React from 'react';
import { Link as GatsbyLink } from "gatsby";

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({ children, to, ...other }) => {

  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);
  const file = /\.[0-9a-z]+$/i.test(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {

    // Sometimes if we are linking to a file (PDF), the url pattern
    //may look internal, but it shouldn't use <Link>
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

export default Link;
