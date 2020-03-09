# What is Gatsby?

Gatsby is a [React](https://reactjs.org/docs/getting-started.html)-based, [GraphQL](https://graphql.org/learn/) powered, [static site generator](https://www.netlify.com/blog/2017/05/25/top-ten-static-site-generators-of-2017/). What does that mean? Well, it weaves together the best parts of React, [webpack](https://webpack.js.org/concepts/), [react-router](https://reacttraining.com/react-router/core/guides/philosophy), GraphQL, and other front-end tools into one very enjoyable developer experience. Don’t get hung up on the moniker ‘static site generator’. That term has been around for a while, but Gatsby is far more like a modern front-end framework than a static site generator of old.

## Gatsby is special for 3 main reasons;

1. Gatsby uses GraphQL to build a [data layer](https://www.gatsbyjs.org/tutorial/part-four/#data-in-gatsby). Gatsby is made to collect your data from wherever it may be: Markdown, JSON, your favorite CMS, third party APIs, anywhere! And at build time, it creates an internal GraphQL server of all of this data. So in your React components, all of your data is queried at build time from that same place, in the same way through GraphQL.
2. The richness of the Gatsby ecosystem is unique. Gatsby boasts great documentation, and a number of starters to help you get a site up quickly.  That GraphQL data collection I mentioned before may sound intimidating, but due to Gatsby's well-documented [data source plugins](https://www.gatsbyjs.org/plugins/), it can be as simple as a few lines of code in the config file.
3. Dedication to performance. Every aspect of performance and accessibility is a point of emphasis, and you can really feel that in the final product with Gatsby.

## Overview of the Gatsby Build Process

Gatsby has two modes for compiling a site: 1. Develop - run with the `gatsby develop` command 2. Build - run with `gatsby build`

You can start Gatsby in either mode with its respective command: gatsby develop or gatsby build.

## Build time vs runtime

Interaction with the front-end after a build has completed can be referred to as runtime. Gatsby creates a JavaScript runtime that takes over in the browser once the initial HTML has loaded. This makes it possible to run ajax callbacks and inject markup into the DOM.

## Understanding gatsby build \(build time\)

Gatsby’s build command should be run when you've added the finishing touches to your site and everything looks great. Gatsby build creates a version of your site with production-ready optimizations like packaging up your site’s config, data, and code, and creating all the static HTML pages that eventually get rehydrated into a React application.

## Differences between develop and build

If you compare the outputs of the two commands \(gatsby develop vs gatsby build\), you can see that everything \(with the exception of deleting HTML and CSS files\) up until the line that says info bootstrap finished are the same. However, gatsby build runs some additional steps to prepare your site to go live after the bootstrap phase.

![Gatsby development workflow](../.gitbook/assets/gatsbyjs%20%281%29.png)

{% hint style="info" %}
Further reading: [https://www.gatsbyjs.org/](https://www.gatsbyjs.org/)
{% endhint %}

