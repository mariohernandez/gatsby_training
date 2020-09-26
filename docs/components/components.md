# About Components

### _Everything in Gatsby is built using components._

Components are independent and reusable. They can either be Javascript functions or classes. Either way, they both return a piece of code that represents part of a web page.

### Our project's structure

```text
gatsby
├── gatsby-config.js
├── package.json
└── src
    ├── components
    │   ├── ...
    │   └── ctaButton
    │   │   └── index.js
    │   │   └── style.module.scss
    │   └── eyebrow
    │       └── index.js
    │       └── style.module.scss
    |
    ├── pages
    │   ├── index.js
    │   └── 404.js
    |
    ├── templates
        └── movie.js
```

### Page components

Components under `src/pages` become pages automatically with paths based on their file name. For example `src/pages/index.js` is mapped to `yoursite.com` and `src/pages/404.js` becomes `yoursite.com/404/`. Every `.js` or `.jsx` file in the pages directory must resolve to either a string or react component, otherwise your build will fail.

**Example:**

{% tabs %}
{% tab title="src/pages/about.js" %}
```javascript
import React from "react"

function AboutPage(props) {
  return (
    <div className="container">
      <p>About me.</p>
    </div>
  )
}

export default AboutPage
```
{% endtab %}
{% endtabs %}

### Non-page components, or Sub-components

A Non-page component is one that’s embedded inside some other component, forming a component hierarchy. An example would be a Header component that’s included in multiple page components. Gatsby uses GraphQL to enable components to declare the data they need. Using the [StaticQuery](https://www.gatsbyjs.com/docs/static-query/) component or [useStaticQuery hook](https://www.gatsbyjs.com/docs/use-static-query/), you can colocate a non-page component with its data.

Let's do a couple of exercises on non-page components

