# Local Setup

### Directly from the horse's mouth

We are literally going to use most of the instructions provided by Gatsby to help you set up your development environment.  [Their documentation can be found here](https://www.gatsbyjs.org/tutorial/part-zero/).

Before you start building your first Gatsby site, you’ll need to familiarize yourself with some core web technologies and make sure that you have installed all required software tools.

### The Command Line

This training makes use of the command line so it is important that you become familiar with how to run basic commands.  take a moment to locate and open up the command line interface \(CLI\) for your computer. Depending on which operating system you are using, see [instructions for Mac](http://www.macworld.co.uk/feature/mac-software/how-use-terminal-on-mac-3608274/), [instructions for Windows](https://www.quora.com/How-do-I-open-terminal-in-windows) or [instructions for Linux](https://www.howtogeek.com/140679/beginner-geek-how-to-start-using-the-linux-terminal/).

### Homebrew

IWe will use Homebrew to install NodeJS

1. Open your Terminal. 
2. See if Homebrew is installed by running brew -v. You should see “Homebrew” and a version number. 
3. If not, download and install [Homebrew with the instructions](https://docs.brew.sh/Installation) for your operating system \(Mac, Linux or Windows\). 
4. Once you’ve installed Homebrew, repeat step 2 to verify.

### Mac Users: install Xcode Command Line Tools

1. Open your Terminal.
2. On a Mac, install Xcode Command line tools by running `xcode-select —install`.
   1. If that fails, download it  [directly from the Apple site](https://developer.apple.com/download/more/) , after signing-in with Apple developer account
3. After being prompted to start the installation, you’ll be prompted again to accept a software license for the tools to download.

## Install Node.js and npm

Node.js is an environment that can run JavaScript code outside of a web browser. Gatsby is built with Node.js. To get up and running with Gatsby, you’ll need to have a recent version installed on your computer. 

{% hint style="info" %}
_Note: Gatsby’s minimum supported Node.js version is Node 8, but feel free to use a more recent version._ 
{% endhint %}

1. Open your Terminal. 
2. Run `brew update` to make sure you have the latest version of Homebrew. 
3. Run this command to install Node and npm in one go: `brew install node` 

Once you have followed the installation steps, make sure everything was installed properly:

### Check your Node.js installation

1. Open up your terminal.
2. Run `node —version`. \(If you’re new to the command line, “**run command**” means “**type** `node —version` in the command prompt, and hit the Enter key”. From here on, this is what we mean by “_run command”_\).
3. Run `npm —version`.

The output of each of those commands should be a version number. If entering those commands doesn’t show you a version number, go back and make sure you have installed Node.js.

### Using the Gatsby CLI 

The Gatsby CLI \(Command Line Interface\), tool lets you quickly create new Gatsby-powered sites and run commands for developing Gatsby sites. It is a published npm package. The Gatsby CLI is available via npm and should be installed globally by running `npm install -g gatsby-cli`. To see the commands available, run `gatsby —help`.

{% hint style="warning" %}
If you are unable to successfully run the Gatsby CLI due to a permissions issue, you may want to check out the [npm docs on fixing permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions), or [this guide](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md).
{% endhint %}

### Create a Gatsby site

Now you are ready to use the Gatsby CLI tool to create your first Gatsby site. 

1. Open up your terminal. 
2. Run `gatsby new project-name`
3. Run `cd project-name` 
4. Run `gatsby develop`.

### Viewing your new site

Open up a new tab in your browser and navigate to [http://localhost:8000](http://localhost:8000).

Congratulations! you just built a new Gatsby site.

