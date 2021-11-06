# Configuration

Commander needs to be configured first before being used in game.

Head to the Settings module in order to configure Commander.

In this section, we will be setting up the administrators and rank groups. You can always refer to the guides found in the documentation for other types of configuration.

## Adding administrators
You can add endless amount of administrators in Commander, it can be person-specified or group-specified.

### Adding someone as an administrator
You can add someone as an administrator in Commander with either their username or user Id, here is an example in username and user Id.

#### Username
```lua
module.Admins = {
    ["7kayoh"] = "Owner"
}
```

#### User Id
```lua
module.Admins = {
    [87924253] = "Owner"
}
```

#### Multiple administrators
```lua
module.Admins = {
    ["7kayoh"] = "Owner",
    ["Roblox"] = "Moderator"
}
```

While you are expected to know about this, remember to add the symbol Comma `,` at the end of each entry, in the table (eg `["7kayoh"] = "Owner",`).

#### Notes
When you are adding an administrator with their user Id, use numerics (:white_check_mark: `87924253`), not string (:no_entry_sign: `"87924253"`). Commander assumes you are adding an user Id if it is presented in numerics. Username/group if in string.

### Adding a group as administrators
If you have a group of administrators in a Roblox group, using the method above can be time-consuming and labour-intensive. Instead, you can add a Roblox group to be administrators. Examples below:

```lua
module.Admins = {
    ["12312312:>50"] = "Owner"
}
```
The code above will tell Commander to set users to be Owner if the following requirements are met:

- Is in group with Id `12312312`
- Above or equal to rank number `50`

___

```lua
module.Admins = {
    ["12312312:<50"] = "Owner"
}
```
The code above will tell Commander to set users to be Owner if the following requirements are met:

- Is in group with Id `12312312`
- Below or equal to rank number `50`

___

```lua
module.Admins = {
    ["12312312:50"] = "Owner"
}
```
The code above will tell Commander to set users to be Owner if the following requirements are met:

- Is in group with Id `12312312`
- Equal to rank number `50`

## Adding rank groups
Rank groups, in short is a permission group, users in the group will have special permissions in Commander, such as access to specific commands, access to prefixes, etc.

Here is how you add a new group to Commander:

Copy and paste the template below into `module.Permissions`

```lua
["NameOfGroup"] = {
    ["Inherits"] = "AnotherGroup",
    ["Priority"] = 4
    ["Permission"] = {}
},
```

Here's a table of configurations available:

|Name|Description|Examples|
|:-|:-|:-:|
|NameOfGroup|Name of the group|`"Senior Moderator"`|
|Inherits|(Optional), which group to inherit. The group will inherit permission settings specified in this field|`"Moderator"`|
|Priority|Group priority, the greater it is, the higher the group is in ranking|`7`|
|Permission|What commands the group is allowed to use, write down the command name to grant, or use an asterick symbol for all commands (`*`)|`{"Ban", "Unban", "Kick", "Kill"}`|

____
