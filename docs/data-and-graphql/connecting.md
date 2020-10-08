# Connecting a data source

To connect a data source to Gatsby you’ll need to first add the relevant plugin. Plugins are added via the gatsby-config.js file. The options and requirements for each source plugin can be found on the [gatsbyjs.org](https://www.gatsbyjs.org/plugins/) site.

## The File System Source Plugin

We added the [File System Source Plugin](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/) to allow us to reference local files within the filesystem or our Gatsby site \(e.g., the files included in the images directory under src/global/images\) We have already added the configuration for the plugin to the `gatsby-config.js` file \(see line 12\), but if you were to do this on your own, you would need to first install the plugin:

```text
npm install --save gatsby-source-filesystem
```

Then add the plugin configuration to the `gatsby-config.js` file, and the data source will be available in Gatsby from that point on.

## The Drupal Source Plugin

{% hint style="info" %}
**About JSON API:**  Before Gatsby can pull data from Drupal, the [JSON API Module](https://www.drupal.org/project/jsonapi) needs to be enabled and configured
{% endhint %}

Just like the File System Source plugin, the [Drupal Source Plugin](https://www.gatsbyjs.com/plugins/gatsby-source-drupal/) has already been added \(see line 19\), but if you were to set this up on your own you’d follow the same process:

```text
npm install --save gatsby-source-drupal
```

Then add the plugin configuration to the **gatsby-config.js** file, and data from your Drupal site will then be available in Gatsby.

Be sure to review the different options available for the source plugins on the GatsbyJS site. For example, with the Drupal source plugin you can provide basic authentication credentials if you wanted to keep your Drupal site behind a basic authentication, but still make it available to Gatsby.

### Configure Gatsby to pull data from Drupal

Inside `gatsby-config.js` configure the Drupal Source Plugin by providing the `baseURL` for Drupal as well as the `apiBase`.  See example:

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://nitflex.lndo.site/`,
        apiBase: `api`, // optional, defaults to `jsonapi`
      },
    },
  ],
}
```

**NOTE**:  As long as Drupal's API endpoint is `jsonapi`, the `apiBase` line can be omitted.

