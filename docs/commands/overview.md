---
sidebar_position: 1
---

# Overview
Comio used different interaction types to interact and execute the commands. Each command category has its very own tab in your [server's settings](https://comio.cf/). 

## Master settings
Each category has master settings that will always override the individual command settings.

### Moderator only
If marked, the category or command will only be accessible to the moderators roles set in the server.

### Ephemeral
If marked and the command supports ephemeral response, the command result will only be visible to the user who called the command. Learn more about ephemeral messages [here](https://support.discord.com/hc/en-us/articles/1500000580222-Ephemeral-Messages-FAQ). Some commands always use ephemeral responses by default (such as to-do) due to privacy reasons.

<img className="imgAuto smImg" alt="Ephemeral response" src="/img/docs/6d97b17797db1b302e933902e2bd7527.png" />

### Allowed channels
If specified, the category or commands will only work in these channels.

### Allowed roles
If specified, the category or commands can only be called by members having these roles.

### Disabled channels
If specified, the category or commands will not work in these channels.

### Disabled roles
If specified, the category or commands called by members having these roles won't respond.

:::caution
You do not need to specify both allowed and disabled entities, specifying allowed channels/roles will automatically disable the category/commands for other channels/roles.
:::

:::info Note
Each commands can be disabled server-wide, and has its own customizable properties & options.
:::

## Command categories
The commands that the bot offers are arranged into thier own categories. Each command has its own sub-commands that can be accessed via `/help`.

