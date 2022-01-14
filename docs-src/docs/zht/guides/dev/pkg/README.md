# Making a package
:::warning
Requires Luau knowledge
:::

Package is a module with code inside for a command, it is extremely powerful as it has access to Commander's API.

By default, Commander ship with packages that are useful for the majority, but if you can not find the package you need, you can try giving our Discord community a visit, head to [this page](https://evoincorp.github.io) to learn more.

However, if you still can not find the package you want in the community, you can create your own!

## The lifecycle of a package

Packages have lifecycle, in the lifecycle, there are multiple stages. When you are building a package, brief understanding of the lifecycle is required.

Here is concentrated version of the lifecycle:
1. Commander loads
2. Preparing (load settings, move packages, etc)
3. Load packages
4. Check packages
5. Symlink system packages to packages
6. Call `.Execute` with type `firstRun`
7. Wait for user request

If you want to execute a piece of code at the beginning, do it when the type is `firstRun`.

### Location options
By default, there are **two** locations for packages to load in, either **Server** or **Player**.

## Requirements
* Roblox Studio
* An installation of Commander
* Luau knowledge

## Getting started
To get started, create a `ModuleScript` with the name `Kick`. and then follow the format located below:

```lua
local module = {
	Name = "Kick",
	Description = "Kicks a player from the server",
	Location = "Player"
}

module.Execute = function(Client, Type, Attachment)
	
end

return module
```

:::tip
As mentioned above, the system will call the package's `.Execute` function at load time, so the system can verify information, as well as running specific first-run only code from the package. As a result, you should have an if statement in order to separate from the actual command execution from the first run. An example of that can be found below.
:::

```lua
if Type == "command" then
	-- Command execution code goes here
elseif Type == "firstRun" then
	-- First run code goes here
end
```

### Finding the target
In most cases, you should use the built-in player finder. However, if you happened to create your own player finder, please **be sure not** to use fuzzy search for finding the player.

:::tip
If your command is inside the **Player** location, the `Attachment` parameter will be the input of the `TARGET` TextField.
:::

After the player finder, your code should look something similar to this:

```lua
local module = {
	Name = "Kick",
	Description = "Kicks a player from the server",
	Location = "Player"
}

module.Execute = function(Client, Type, Attachment)
	if Type == "command" then
		local target = module.API.getPlayerWithName(Attachment)
		if target then
			target:Kick("Kicked by " .. Client.Name)
			return true
		end
		return false
	end
end

return module
```

:::warning
See the incompatibility warning after executing the command? This is because you did not return a boolean after the command is ran. Return `true` when the command is ran successfully, and return `false` when the command failed or was cancelled by user, such as a modal. 
:::

### Getting further
You've implemented a simple kick command, but the administrator can not put a reason to justify the kick. So, what to do?

That's where the `API.sendModalToPlayer` kicks in. This function will send a request to the client, to create a new input modal for user to put text there, as well as a RBXScriptSignal so the command can halt until an input has been submitted.

:::danger Read the docs!
Callback hell affect your code readability and maintainability, as `API.sendModalToPlayer` returns a RBXScriptSignal, you can simply just use `:Wait()` instead of using `:Connect`.

Apart from that, we **highly** recommend to use `:Wait()` for this, you can learn more by reading our Code of Conduct
:::

With `API.sendModalToPlayer`, your code should look something like this:
```lua
local module = {
	Name = "Kick",
	Description = "Kicks a player from the server",
	Location = "Player"
}

module.Execute = function(Client, Type, Attachment)
	if Type == "command" then
		local target = module.API.getPlayerWithName(Attachment)
		local input = module.API.sendModalToPlayer(Client, "Reason?"):Wait()
		if not target then return false end
		if not input then return false end
		target:Kick("Kicked by " .. Client.Name .. "\nReason: " .. input)
		return true
	end
end

return module
```

**However!** We are still not done yet, `.sendModalToPlayer` by default does **not** filter the actual input. In order to compile with Roblox's safety guidelines, filter the input via `API.filterText`, which will looks something like this:

```lua
local module = {
	Name = "Kick",
	Description = "Kicks a player from the server",
	Location = "Player"
}

module.Execute = function(Client, Type, Attachment)
	if Type == "command" then
		local target = module.API.getPlayerWithName(Attachment)
		local input = module.API.sendModalToPlayer(Client, "Reason?"):Wait()
		if not target then return false end
		if not input then return false end
		local status, result = module.API.filterText(Client, input)
		if not status then return false end
		target:Kick("Kicked by " .. Client.Name .. "\nReason: " .. result)
		return true
	end
end

return module
```

:tada: Congratulations, you have successfully made your first package!

## Continue...
Our API documentation has it all for you to explore, if you have a question or encountered a problem with your own package, feel free to ask in our Discord.