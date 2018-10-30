# GPT-CLI
Genesis Pro Tools offers an open-source Command Line Interface that interacts with the Genesis Pro Tools directory structure.

It offers quick and easy commands that automate a lot of setup processes for both Composer and Node commands, including template file generation and more.

## Installation
Assuming you have [Node installed](../requirements/#node), you can install GPT-CLI globally by running the following command:

```bash
sudo npm i gpt-cli -g
```

Once installed, you can check the successful installation by running `gpt -v` in your terminal. You should get a version number output.

## Commands
### `gpt config`
Sets up your local machine with global credentials to access Genesis Pro Tools packages. If using GPT-CLI for the first time,
you'll likely want to run this command first so that all the following commands don't ask for authentication.

### `gpt install [packages...]`
Install Genesis Pro Tools packages in the current working directory. This typically handles creating a project `composer.json` file (if it doesn't exist already)
and adding required dependencies.

Example of how to install the free Core Theme package:

```bash
gpt install core-theme
```

### `gpt theme <cmd>`
Performs theme-level commands, like search/replace, copying of starter files, and more.

#### `start`
Copies over theme files from the Genesis Pro Tools starter theme, Uno. Since this includes required files for a theme,
it is recommended to only run it during a first-time install (thus using the command name `start` to emphasize it's purpose).

Example for installing the Core Theme package and copying Uno theme files immediately after:

```bash
gpt install core-theme && gpt theme start
```