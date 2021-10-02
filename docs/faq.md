---
sidebar_position: 9
---

# FAQ

### I cannot see slash commands or the context menus
You must enable the "Use slash commands" option in your user settings as shown below:

<img className="docImg" alt="User settings for slash commands" src="/img/docs/0f99fca0ac9ea66e198d02b9d65b0e35.png" />

Still can't see 'em? Make sure that the channel where you're trying to use the slash command has the "Allow members to use application commands" permission as shown below:

<img className="imgAuto smImg" alt="Channel settings for slash commands" src="/img/docs/cef634be9994ad04cf3d5fc3ff9b2be4.png" />

If you still cannot see slash commands or context menus, then you must be using an outdated Discord client. Please [update your Discord client](https://discord.com/download) to the latest version or a version that supports application commands.

### The bot is not responding
Make sure the bot has all the necessary permissions and is online, if the bot is still unresponsive, it's possible that Discord might be having connectivity issue. You can check Discord's status [here](https://discordstatus.com).

### The bot is offline in my server, but online in other servers
The bot is spread out to different shards having their own collection of servers. The shard your server is on may have died or disconnected, you can wait for it to reconnect or report the issue at the support server. You can also check the our service status at [this page](https://status.comio.cf/).

### The freeze parameter is not working
Make sure the bot's role is visually higher than the offender to freeze, and the bot has the `MANAGE ROLES` permission.

### How do I enable the developer mode?
Developer mode can be enabled via your settings as shown below:

<img className="docImg" src="/img/docs/0137c02aaa125de35732a49cdc84d852.png" />

### How do I restrict a command to a channel or role?
Each command can be configured via the dashboard, you can specify the allowed and disabled entities for each command.

### How do I restrict the commands to moderators?
A command or command category can be marked as moderator only which will only allow the members having the moderator role to use the commands.

### How do I copy a message's ID?
A message's ID can be copied by right-clicking the message as shown below:

<img className="imgAuto" src="/img/docs/b90f2a45168be0be9f195e0625959a62.png" />

:::caution
[Developer mode](/docs/faq#how-do-i-enable-the-developer-mode) must be enabled to copy a message's ID
:::

### Does Comio feature something like auto-setup?
No, Comio is not a bot that will work out of the box for you. It must be configured properly from the dashboard by someone having decent knowledge about bots and how Discord works.

### I want to suggest something
You can join our support server to submit feature requests, we try our best to implement your ideas into our services!

### Members can still send messages after being muted
The muted member is having a role that has explicitly enabled `SEND MESSAGES` permission in the channel. Make sure that the `SEND MESSAGES` permission for all the roles is neutral (greyed-out) and is disabled for the mute role in the channel.

### Auto-mod is not punishing server administrators
The auto-moderator will always ignore members having the `ADMINISTRATOR` or `MANAGE SERVER` permission.

### Auto-mod is not deleting messages
It might be the case that you've accidentally ignored the channel or role where the event is happening.

### Whom should I add to moderator role(s)?
Member who usually moderate the server should be added to the moderator role(s), unless you don't trust them.

:::info Note
Members having the `ADMINISTRATOR` and `MANAGE SERVER` permissions are immue to moderation and auto-moderation by default, you may not add them to the moderator roles.
:::

### Bot is not sending a direct message to the offender
Direct messages can only be sent to users accepting direct messages from the bot. Comio will not be able to send a direct message to the offender if they have blocked the bot or have disabled direct messages from server members.

### What if I use self-bot or scripts to automatically bump my server every 2 hours?
You should never attempt to use any macros or scripts to use our services or automatically bump servers. Users executing scripts to abuse our services will be blacklisted permanently from our services without any notice, and the server might also get blacklisted if involved in automated user accounts.

### Will I loose my data if I kick the bot from my server?
When you kick the bot from your server, all the server data (logging, greeting, moderation, auto-mod) will be erased, including moderation data such as mutes, warnings and modlogs. There is no way to recover this data.

### Others are not able to see my to-do list
The to-do command use ephemeral responses, which will be only visible to the user who called the command. This is to ensure that your privacy remains intact.

### Is Comio open-source?
No.

## Could not find your question?
Join our [support server](https://comio.cf/), we are always there to help you out! If you encountered something strange, found an exploit in the bot or found someone using macros/scripts to use our services or bump their server, kindly report the issue at the support server as soon as possible.
