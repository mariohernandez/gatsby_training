# Build your first gatsby site

### Gatsby CLI <a id="docs-internal-guid-337bec8f-7fff-6cb1-6ffc-7492002cd7e0"></a>

To get started on your first Gatsby site you need to be somewhat comfortable using the command line and have Node and Git installed. The Gatsby CLI tool lets you quickly create new Gatsby-powered sites and run commands for developing Gatsby sites. It is a published npm package.

The Gatsby CLI is available via npm and should be installed globally by running npm install -g gatsby-cli.

{% hint style="info" %}
**Note:** when you install Gatsby and run it for the first time, you’ll see a short message notifying you about anonymous usage data that is being collected for Gatsby commands, you can read more about how that data is pulled out and used in the [telemetry doc](https://www.gatsbyjs.org/docs/telemetry).
{% endhint %}

To see the commands available to you with the Gatsby CLI, run `gatsby --help`

### Gatsby starters

Now you are ready to use the Gatsby CLI tool to create your first Gatsby site. Using the tool, you can download what are called “[starters](https://www.gatsbyjs.org/docs/starters/)” \(out of the box partially built sites with some default configuration\) to help you get moving faster on creating a certain type of site. The [gatsby-starter-default starter](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/) you’ll be using here is a starter with the bare essentials needed for a Gatsby site.

Install this starter locally by running the following in your command line:

* `gatsby new gatsby-starter-default` [`https://github.com/gatsbyjs/gatsby-starter-default`](https://github.com/gatsbyjs/gatsby-starter-default)\`\`
* `cd gatsby-starter-default`
* `gatsby develop`

#### View your site locally:

Open up a new tab in your browser and navigate to [http://localhost:8000](http://localhost:8000/).

BAM! You’ve just created your first Gatsby site! 🌮

