---
Title: Package - Core Theme
---

# Core Theme
> This package is available for anyone who has a subscription on the main Genesis Pro Tools website, and is available on the Free Tier.

The Core Theme package from Genesis Pro Tools offers basic theme development support, and handles much of the initial setup in a theme with a simple class instantiation.

As of now, the Core Theme Package offers these features:

- Theme Constants
- Autoloading

## Installation
The Core Theme Package can be included in your Genesis Framework child theme by running the following command from the theme directory:

```bash
gpt install core-theme
```

Once installed, load the Composer `autoload.php` file and call the GPT class in your `functions.php` file to instantiate the benefits (this is default in the [Uno Starter Theme](/docs/theme/uno/), and easily generated for you with our [CLI](/cli)).

```php
/**
 * Autoload packages.
 *
 * @since 1.0.0
 */
require_once( get_stylesheet_directory() . '/vendor/autoload.php' );

/**
 * Instantiate Genesis Pro Tools Core to enable the development workflow.
 *
 * @since 1.0.0
 */
GenesisProTools::init();
```

## Theme Constants
The Core Theme Package defines a multitude of constants that are useful for development in conjunction with the [Uno Starter Theme](/docs/theme/uno/).

### Core Paths

| Constant | Description |
| :--------: | :---------- |
| `GPT_CORE_PATH` | The path to the Core Theme Package root directory. |
| `GPT_CORE_URL` | The forward facing URL to the Core Theme Package root directory. |
| `CHILD_ROOT_PATH` | The path to the root directory of the current child theme. |
| `CHILD_ROOT_URL` | The forward facing URL to the root directory of the current child theme. |
| `CHILD_VENDOR_PATH` | The path to the child theme's `/vendor` directory. |
| `CHILD_VENDOR_PATH` | The forward facing URL to the child theme's `/vendor` directory. |

### Asset Paths
Note that these asset paths are mapped to the default paths of the [Uno Starter Theme](/docs/theme/uno/).

| Constant | Description |
| :--------: | :---------- |
| `CHILD_CSS_PATH` | The path to `/dist/css` in the child theme. |
| `CHILD_CSS_URL` | The forward facing URL to `/dist/css` in the child theme. |
| `CHILD_JS_PATH` | The path to `/dist/js` in the child theme. |
| `CHILD_JS_URL` | The forward facing URL to `/dist/js` in the child theme. |
| `CHILD_IMAGE_PATH` | The path to `/dist/images` in the child theme. |
| `CHILD_IMAGE_URL` | The forward facing URL to `/dist/images` in the child theme. |
| `CHILD_SVG_PATH` | The path to `/dist/svg` in the child theme. |
| `CHILD_SVG_URL` | The forward facing URL to `/dist/svg` in the child theme. |

### Theme Data

| Constant | Description |
| :--------: | :---------- |
| `CHILD_THEME_NAME` | The theme name as defined in the stylesheet header. |
| `CHILD_THEME_URL` | The theme URL as defined in the stylesheet header. |
| `CHILD_THEME_VERSION` | The theme version as defined in the stylesheet header. |
| `CHILD_THEME_AUTHORS` | The theme author as defined in the stylesheet header. |
| `CHILD_THEME_HANDLE` | The theme handle as defined in the stylesheet header, and sanitized with dashes. |

## Autoloading
The Core Theme Package initiates a default directory autoloading of the `./src` folder in the child theme. In the [Uno Starter Theme](/docs/theme/uno/), the `./src` folder is pre-populated with some default files to illustrate the convenenience.

In this scenario, any file (and folder) added inside the the `./src` directory will be autoloaded (up to a max depth of 200). The autoloading is performed by a great open-source [Composer package by Aaron Holbrook](https://github.com/a7/autoload).