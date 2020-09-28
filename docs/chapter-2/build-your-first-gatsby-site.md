# Build your first Gatsby site

## Gatsby CLI <a id="docs-internal-guid-337bec8f-7fff-6cb1-6ffc-7492002cd7e0"></a>

To get started on your first Gatsby site you need to be somewhat comfortable using the command line and have Node and Git installed. The Gatsby CLI tool lets you quickly create new Gatsby-powered sites and run commands for developing Gatsby sites. It is a published npm package.

The Gatsby CLI is available via npm and should be installed globally by running 

```bash
npm install -g gatsby-cli
```

To see the commands available to you with the Gatsby CLI, run `gatsby --help`

## Gatsby starters

Now you are ready to use the Gatsby CLI tool to create your first Gatsby site. Using the tool, you can download what are called “[starters](https://www.gatsbyjs.org/docs/starters/)” \(out of the box partially built sites with some default configuration\) to help you get moving faster on creating a certain type of site. The [gatsby-starter-default starter](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/) you’ll be using here is a starter with the bare essentials needed for a Gatsby site.

Install this starter anywhere in your file system by running the following in your command line:

```bash
gatsby new my-gatsby-site https://github.com/gatsbyjs/gatsby-starter-default
```

`Then navigate into the newly created directory`

```bash
cd my-gatsby-site
```

`And finally running the develop command to fire up your new gatsby site`

```bash
gatsby develop
```

### View your site locally:

Open up a new tab in your browser and navigate to [http://localhost:8000](http://localhost:8000/).

BAM! You’ve just created your first Gatsby site! 🌮

### Other things you can do with Gatsby CLI

### Create a Production build

To build a production-ready build you can run

```bash
gatsby build
```

* Gatsby will perform an optimized production build for your site, generating static HTML and per-route JavaScript code bundles.

### Serve the production build locally

If you would like to see a replica of the production site running locally, run

```bash
gatsby serve
```

Gatsby starts a local HTML server for testing your built site. Remember to build your site using `gatsby build` before using this command.

