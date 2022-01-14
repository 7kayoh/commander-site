# Miscellaneous
The `Misc` section holds miscellaneous configurations for Commander, in most cases, you do not need to configure those, but we will still explain all of them.

```lua
module.Misc = {
	["DisableCredits"] = false,
	["DataStoresKey"] = {
		["Ban"] = "commander.bans"
  }
}
```

The `["DisableCredits"]` property sets whether Commander should send out a notification of `This game is powered by Commander from Evo...`

The `["DataStoresKey"]` property holds a table of custom DataStore keys, such as the `["Ban"]` key, in most cases, packages usually override it with the default key if you didn't put it in the table.