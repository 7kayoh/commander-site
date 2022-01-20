---
title: Installation
description: ''
position: 2
category: Getting Started
---

Commander can be currently retrieved by two methods: Either by using the loader in Roblox Library, or by using Wally, the package manager.

<alert type="info">
In the future, we will be releasing a plugin in Studio called <strong>Commandion</strong> (merge of Commander + companion), which will allow users to deploy Commander into their game quickly, and install official and community packages.
</alert>

## Roblox Library

If you do not happen to use a project management library outside of Roblox (e.g. Rojo), this method is most recommended as it being the easiest to setup.

Retrieve [this model](#) and put it into your game's `ServerScriptService`, head to `MainConfig.lua` inside the loader and you will be able to configure Commander. Complete.

## Wally Package

At the moment, we have uploaded our loader to Wally. If you happened to use Rojo, you can consider using Wally to install the [Commander](#) package.

```bash
wally install evoincorp/commander
```

Once done, copy the default `MainConfig.lua` and get the packages you want. Create a script that requires the loader with the `MainConfig.lua` and the packages. Complete.

You may also use the [starter template](#).