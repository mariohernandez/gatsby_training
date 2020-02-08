# What is Webpack?

[Webpack](https://www.gatsbyjs.org/docs/glossary#webpack) is a static module bundler, in other words a software that collects chunks or modules of JavaScript and compiles them into one or more optimized bundles. Webpack is one of the core software packages that underpins Gatsby.

Webpack works by creating a dependency graph. In other words, webpack determines which modules depend on other modules to make your site work. A module is a chunk of code that encapsulates some functionality. It may be as small as a single JavaScript function, or it may be an entire library such as [React](https://www.gatsbyjs.org/docs/glossary#react).

### Notable uses of Webpack:

* Optimize how CSS and JavaScript are delivered to the browser. Webpack supports a feature known as [code splitting](https://webpack.js.org/guides/code-splitting/). Code splitting allows you to divide your code across a few bundles that are loaded as needed or as requested. Gatsby is already configured to use this feature. You do not have to do any additional set up to reap the benefits.

Add support for features such as [Sass/SCSS  
](https://www.gatsbyjs.org/docs/sass/)Gatsby does not support Sass/SCSS out of the box, so you can [add a custom webpack configuration](https://www.gatsbyjs.org/docs/add-custom-webpack-config/), or use one of the [Gatsby plugins](https://www.gatsbyjs.org/docs/plugins/) contributed by the community.

{% hint style="info" %}
Further reading: [https://webpack.js.org/](https://webpack.js.org/)
{% endhint %}

