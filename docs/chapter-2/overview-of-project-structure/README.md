# Overview of project structure

Now that you know how to start a Gatsby site from scratch, let’s pull down our more fleshed out repo with the project we will be working from for the remainder of this training, to save us some time.

If you haven’t done so already, visit the repo at [https://github.com/mediacurrent/gatsby-training](https://github.com/mediacurrent/gatsby-training) and follow the Getting Started instructions to do so.

Now that we have our project up and running locally, let’s go into detail about a few of the files used by Gatsby.

### Gatsby API Files:

```text
|-- gatsby-browser.js
|-- gatsby-config.js
|-- gatsby-node.js
|-- gatsby-ssr.js
```

#### gatsby-config.js

This file defines our site's metadata, plugins, and other general configuration.  This file is in the root of our Gatsby site.  

Within the _gatsby-config.js_ file, we hook up Gatsby to Drupal using the **gatsby-source-drupal** plugin.

```text
{
  resolve: 'gatsby-source-drupal',
  options: {
    baseUrl: 'http://nitflex.lndo.site/'
  }
}
```

{% hint style="warning" %}
**IMPORTANT:**  Before Gatsby can query data from a Drupal website, Drupal’s [JSONAPI module](https://www.drupal.org/project/jsonapi) needs to be enabled and an API end-point needs to be created.  See video in the module's URL above for more details on how to ensure JSONAPI is properly configured.
{% endhint %}

#### gatsby-browser.js

This file lets you respond to actions within the browser, and wrap your site in additional components. The [Gatsby Browser API](https://www.gatsbyjs.org/docs/browser-apis) gives you many options for interacting with the [client-side](https://www.gatsbyjs.org/docs/glossary#client-side) of Gatsby.

#### gatsby-node.js

The code in this file is run once in the process of building your site. You can use it to create pages dynamically, add nodes in GraphQL, or respond to events during the build lifecycle. To use the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/), create a file named gatsby-node.js in the root of your site. Export any of the APIs you wish to use in this file.

#### gatsby-ssr.js

This file lets you alter the content of static HTML files as they are being Server-Side Rendered \(SSR\) by Gatsby and Node.js. To use the [Gatsby SSR APIs](https://www.gatsbyjs.org/docs/ssr-apis/), create a file called gatsby-ssr.js in the root of your site. Export any of the APIs you wish to use in this file.

