---
Title: Getting Started
---

# Introduction
Genesis Pro Tools is a suite of developer tools and libraries, delivered as Composer packages, built specifically with the Genesis Framework in mind.

Some packages will likely work with other themes (such as JavaScript libraries and easy development functions), but support is only offered in the context of the Genesis Framework (must be on a paid plan).

There are both free and premium packages: the free packages are licensed under the standard GPL license used by WordPress. Premium
packages are proprietary and are only accessible with a valid `username` and `token`.

## Answering "Why?" 
The most important question to answer when adopting a new development workflow or framework is the question of "**why**":

Different developers often use as many different starter themes, as well as their own process for building exceptional client websites. While this is a reality
unlikely to change, streamlining these processes is still a goal to achieve.

Genesis Pro Tools aims to streamline the development process by enforcing 3 key principles:

1. Consistency across projects
2. Deployment friendliness
3. Modular composition

Having a suite of tools available that follow a similar pattern allows **predictability in a development workflow**, and thus provides **unique opportunities for automation.**

Diminishing repetitious tasks in favor of faster and more reliable startup-time has a direct impact on profit. As such, many of the packages that Genesis Pro Tools offers
are in the form of:
 
- Starter files (for both themes and plugins)
- Component libraries for re-usability
- Developer-facing features
- User-facing features

> Diminishing repetitious tasks in favor of faster and more reliable startup-time has a direct impact on profit.

## Requirements
Genesis Pro Tools requires some minimum dependencies for development, both of which are open-source and have their own documentations
available to the public. For convenience, we have added some basic instructions for installing these requirements on your machine.

Exhaustive instructions can be found at the linked documentation under each requirement.

- [Composer Instructions](/requirements/#composer)
- [Node Instructions](/requirements/#node)

## GPT-CLI
The Genesis Pro Tools CLI is a tool that provides a simple interface for managing and installing Genesis Pro Tools packages. It unifies and automates
most of the manual work that would have to be done to create initial `composer.json` and `package.json` files, and also includes helper commands
for common development tasks.

GPT-CLI is [open-source](https://github.com/cjkoepke/genesisprotools-cli) and therefore can be contributed to as users of Genesis Pro Tools see fit and choose to contribute. Rules for contributing are yet to be created, so stay tuned.
