# Overview
By default, Commander ships with recommended configuration, so you do not need to spend a lot of time on setting up the configuration for Commander, here is an overview of all configurations available:

```lua
local module = {}

module.Admins = {
	["nana_kon"] = "Owner",
}

module.Permissions = {
	["Moderator"] = {
		["Priority"] = 1,
		["DisallowPrefixes"] = {
			"All",
			"Others"
		},
		["Permissions"] = {
			"Kick",
			"ChatLogs",
			"JoinLogs",
			"CheckBan",
			"Message",
			"HandTo",
			"View",
			"Unview"
		}
	},
	["Admin"] = {
		["Inherits"] = "Moderator",
		["Priority"] = 2,
		["Permissions"] = {
			"Ban",
			"Shutdown",
			"TimeBan",
			"Unban",
			"SystemMessage",
			"ServerLock"
		}
	},
	["Owner"] = {
		["Inherits"] = "Admin",
		["Priority"] = 3,
		["Permissions"] = {
			"*"
		}
	}
}

module.UI = {
	["Accent"] = Color3.fromRGB(64, 157, 130),
	["Keybind"] = Enum.KeyCode.Semicolon,
	["Theme"] = "Minimal Dark"
}

module.Misc = {
	["DisableCredits"] = false,
	["DataStoresKey"] = {
		["Ban"] = "commander.bans"
	}
}

module.Version = {"1.4.0", "1.4.0 (Official Build)", "Lilium"}

return module
```

Please note that there are a few differences between the default configuration for the Loader version, and the source code one.