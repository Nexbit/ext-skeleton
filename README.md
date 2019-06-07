# Plesk extension skeleton (`npm` flavour)

Plesk extension skeleton is a quick-start for your new Plesk extension using UI library.

**NOTE**: This fork deviates from the official one by replacing `yarn` with `npm`. It also adds more template files and CLI commands.

## Getting Started

Make sure your development environment has the following prerequisites installed:

* PHP 7.1+
* [Composer](https://getcomposer.org)
* [Node.js](https://nodejs.org)
* NPM

Create a new project by running `composer create-project --repository '{ "type": "vcs", "url": "https://github.com/Nexbit/ext-skeleton" }' nexbit/ext-skeleton ext-helloworld`.

## Available Features

- While developing, you can watch and recompile the changes by executing `npm run dev`.

- Compile assets for deployment with `npm run build`. At this point the extension is ready to be deployed.

- To create a deployment bundle, run `npm run zip`. Zip files are placed under the `dist` folder, and they are named using this pattern `{id}-{version}-{release}.zip`, 
where the `id`, `version` and `release` placeholders are extracted from your `meta.xml` file.

- To upload the latest zip bundle to your Plesk server, you can either use the **Extension Catalog** in the Plesk UI, or use the `npm run deploy` command. 
It will ask you the *host*, ssh *user* and *password*, and then it will upload and install the extension remotely using the 
[Plesk command line utility](https://docs.plesk.com/en-US/onyx/extensions-guide/extensions-management-utility.73617/).

## License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](LICENSE) file for details.
