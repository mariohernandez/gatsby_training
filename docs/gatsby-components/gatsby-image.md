# Working with Images

Gatsby Image is a React component that makes it easy to optimize all the images on your website.  It processes images by creating multiple instances of each image at different sizes and it helps lazy load images using several image effects including blug up, svg trace, and others.

Before you can use images on your gatsby site, you need to query for them using GraphQL.  In addition, Gatsby uses a couple of plugins to assist with the processing of images.
* [Gatsby Transformer Sharp](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-sharp): Creates **ImageSharp** nodes from image types that are supported by the Sharp image processing library and provides fields in their GraphQL types for processing your images in a variety of ways including resizing, cropping, and creating responsive images.
* [Gatsby Plugin Sharp](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp): It aims to provide excellent out-of-the box settings for processing common web image formats. For JPEGs it generates progressive images with a default quality level of 50. For PNGs it uses pngquant to compress images.
* [Gatsby Source Filesystem (If using local images)](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem): A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem. The plugin creates File nodes from files.

## Configuring Gatsby to manage images
Configuring Gatsby so it can manage your images is a pretty straight forward process.  First we need to install the plugins described above using either npm or yarn:

### Install required plugins
```
npm install gatsby-image

npm install gatsby-transformer-sharp gatsby-plugin-sharp gatsby-source-filesystem
```

### Update gatsby-config.js
After installing the required plugins, configure `gatsby-config.js` as follows:

```
const path = require(`path`)

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
```

### Testing by querying for images

* Add some images to `src/images`
First start up Gatsby by running `gatsby develop`
* Once Gatsby is running, go to the GraphQL page (`http://localhost:8000/___graphql`)
* Inside the empty Code Explorer, paste the following code and press the Play button
```
query MyQuery {
  file {
    relativePath
    gid
    childImageSharp {
      fluid(maxWidth: 600) {
        base64
        originalImg
        originalName
      }
      id
    }
  }
}
```

If you have images that match the criteria above (maxWidth 600), you should be able to see the details displayed on the browser.

### Using your query in a component
Now that you know you are getting images when you query your site, you can literally copy the query above into your component where you want to add an image.  For example:
```
import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

const IndexPage = props => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
```
