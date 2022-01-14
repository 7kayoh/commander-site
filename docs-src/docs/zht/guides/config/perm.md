# Permission Group
There's a few cases where commands may be too powerful for your administration team, you can setup administrator levels to avoid that. With administrator levels, you can restrict the usage of a specific command, and disallow the usage of prefixes, like `all`, `others`, `admins`, et cetera.

```lua
["Owner"] = {
	["Inherits"] = "Admin",
	["Priority"] = 3,
	["Permissions"] = {
		"*"
	}
}
```

We will take a look at the default `Owner` administrator level, which is the highest level in Commander by default.

The `["Inherits"]` is for when you want to copy configuration from a previous administrator level, such as `"Admin"`, for instance.

The `["Priority"]` is to set the level's priority, by default, because all other levels are 2 and 1 respectively, 3 is the highest, and `["Owner"]` would be the highest level in Commander.

The `["Permission"]` is to allow the usage of a specific command, where `*` stands for all commands, Commander follows the package name found in the panel, you should not be using the package's name in Studio, but the one found in the panel.

Apart from that, there is also an additional configuration in the `Moderator` level configuration, which is `["DisallowPrefixes"]`, which disallows the usage of a specific prefix, such as `All`, `Others`, `Admins`, `Randoms`, et cetera.