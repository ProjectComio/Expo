---
sidebar_position: 2
---

# /automod
## Description
Manipulates the auto-moderator for the server

- Supports ephemeral response
- 5 seconds cooldown

## Sub-commands
### Ignore channel
Adds or removes a channel from the list of channels ignored by the auto-moderator.

### Ignore role
Adds or removes a role from the list of roles ignored by the auto-moderator.

### Ignore list
Lists all the channels & roles of the server that are ignored by the auto-moderator.

### Banned-words modify
Adds or removes banned-words.

:::tip
You can provide multiple banned-words in a single command by separating them with a `,` (comma).
:::

### Banned-words list
Lists all the banned-words for the server.

### URL modify
Adds or removes whitelisted URLs.

:::tip
You can provide multiple URLs in a single command by separating them with a `,` (comma).
:::

### URL list
Lists all the whitelisted URLs for the server.

### Enable
Enables the auto-moderator module for the server.

### Disable
Disables the auto-moderator module for the server.

### Reset
Resets the auto-moderator module for the server. **This cannot be undone!**

## Permissions
### Bot
- `SEND MESSAGES`
- `EMBED LINKS`
### Member
- `MANAGE SERVER`