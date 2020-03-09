# Data sources with Gatsby

One of the best things about Gatsby is its ability to fetch data from sources at build time, and then use that data to generate the static pages of your site. Gatsby does this by using specific source plugins depending on the data sources you want to use \(Drupal, Wordpress, Shopify, Contentful, static files in the filesystem, Google Spreadsheets -- you name it!\) At build time the data that comes from your sources is pulled into a single GraphQL database to provide a unified access point.  
For our training we’ll be using the Drupal source plugin \([gatsby-source-drupal](https://www.gatsbyjs.org/packages/gatsby-source-drupal/?=gatsby-source-#gatsby-source-drupal)\) to ingest data from a Drupal website, plus we’ll set up the file system source plugin \([gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/?=#gatsby-source-filesystem)\) to reference local files.

{% hint style="info" %}
Further reading:

[https://www.gatsbyjs.org/docs/recipes/sourcing-data/](https://www.gatsbyjs.org/docs/recipes/sourcing-data/)

[https://gatsbyguides.com/tutorial/get-data-out-drupal-and-gatsby](https://gatsbyguides.com/tutorial/get-data-out-drupal-and-gatsby)
{% endhint %}

