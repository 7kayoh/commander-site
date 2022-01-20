---
title: Packages
description: ''
position: 4
category: Getting Started
---

By default, Commander does not ship with any packages. Users have to find and install packages they need for their game.

Installing a package is relatively simple by using our [Package Redistribution Services](#).

## Introduction
A package is basically an extension for Commander. Commander is shipped with what is needed for Commander to operate, so if you want make Commander actually works for your game, you have to install packages, extending the functionality of Commander itself.

A package can be a command, a theme, or a plugin.

### Command
Command is basically a function that the administrator can use, they usually requires input first before running.

`Ban`, `kick`, `message` and `kill`, those are commands.

### Theme
Theme customizes the appearance of Commander's interface, so you can try to make Commander fit into your game's UI as well.

We have provided a few official themes for you to use, some are in light theme and some are in dark theme. If you still can not find one that suits you, try looking at the Package Redistribution Services or make the theme yourself.

### Plugin
Plugin is a special kind of code that can integrate itself with Commander. If you have a system in your game and you want to make it work with Commander, creating a plugin as the middle bridge for both sides' communication will be the best method.

Apart from that, a plugin can use command to run specific action. A good usage of this is an anticheat, which you can create an anticheat in the plugin and make it work with commands in Commander.