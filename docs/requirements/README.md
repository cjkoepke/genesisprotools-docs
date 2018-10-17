# Requirements
These are basic installation instructions for the two main requirements for using Genesis Pro Tools.

## Composer
The industry standard PHP dependency management tool is Composer. It manages version control, package security, and deliverable consistency.
To read exhaustive instructions on installing Composer, [see the official documentation](https://getcomposer.org/download/).

There are a couple ways to quickly get Composer installed on your machine:

### Method 1: Homebrew
Most Macs come with Homebrew, a package manager that installs stuff you need that Apple didn't.

**Step 1**

First, check if you have Homebrew installed by opening a terminal and typing the following command:

```bash
brew -v
```

If you have Homebrew installed, you'll get a version number output and can **proceed to Step 2**. If it returns something similar to `command not found`, then you'll need to install Homebrew first:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Follow on-screen instructions. Once installed, you can proceed to Step 2.

**Step 2**

Installing Composer with Homebrew is a breeze. Simply type the following into your terminal:

```bash
brew install composer
```

After installation, confirm installation by typing `composer --version` into your terminal. You should get a version output.

### Method 2: Manual
Manual installation of Composer differs from platform to platform, since you'll likely need to bind your `$PATH` mappings to the associated executable file.

**Step 1**

To manually install Composer, download the `composer.phar` file from the official website here: [https://getcomposer.org/composer.phar](https://getcomposer.org/composer.phar)

**Step 2: Mac**

Run the following command to add the executable file to your `/bin`:

*NOTE: `~/Downloads/composer.phar` is the assumed path to your downloads folder. Adjust if different.*

```bash
cp ~/Downloads/composer.phar /usr/local/bin/composer
sudo chmod +x /usr/local/bin/composer
```

The first command copies the downloaded file to your `/bin` directory. The second command makes it executable.

Next, restart your terminal application and then run `composer --version` in your terminal. You should see a version output.

**Step 2: Windows**

Installing on Windows is easier than on Mac since they have an installer application. You can download the installer from Composer, here: [https://getcomposer.org/Composer-Setup.exe](https://getcomposer.org/Composer-Setup.exe).

After installing, restart your terminal and run `composer --version` to verify the command is usable. You should get a version output.

## Node
Node is the standard JavaScript library that runs on the server-level. It's used in almost all frontend asset compiling methods, as well as just about anything else you can think of.

The [Genesis Pro Tools CLI](/cli/) requires Node to be installed, as well as the free starter theme, Uno.

Installing Node is very easy, and all installers for both Mac, Windows, and Linux can be found on the official website: [https://nodejs.org/](https://nodejs.org/en/).

You can verify that Node is installed and accessible by running `npm -v` in your terminal. You should get a version output. Also make sure that NPM is installed by running `npm -v`.  