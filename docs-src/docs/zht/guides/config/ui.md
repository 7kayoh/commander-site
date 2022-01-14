# UI
This part is where you configure the user interface for Commander, changes are usually much focused at the panel rather than the client user interface, but you can still see some configuration for it.

```lua
module.UI = {
	["Accent"] = Color3.fromRGB(64, 157, 130),
	["Keybind"] = Enum.KeyCode.Semicolon,
	["Theme"] = "Minimal Dark",
  ["AlertSound"] = 6518811702
}
```


The `["Accent"]` property is to set the panel's theme color, depends on the theme, this option may not affect the interface.

The `["Keybind"]` property is to set the keybind to activate Commander, there's three ways to activate Commander, via the keybind, via the button at the topbar and via the bindable we've created for you.

The `["Theme"]` property is to set the panel's theme, by default, Commander ships with 6 themes, `Teal`, `Minimal`, `Minimal Dark`, `Material`, `Material Dark` and `AMOLED Dark`. Please note that themes are case sensitive, be sure to write in the same case. To install a custom theme, you can refer to the [Installing themes](../installthemes/) page.

The `["AlertSound"]` property is to set the notification sound, you do not need to put this in however, as Commander will simply use the default notification sound if you didn't assign one in the settings module. This property expects a number, not a string with `rbxassetid://` protocol, et cetera.