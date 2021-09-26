---
sidebar_position: 6
---

# /emoji
## Description
Manipulates a custom emoji

- Supports ephemeral response
- 3 seconds cooldown

## Sub-commands
### Info
Provides details about a custom emoji.

### Save
Provides the URL for the emoji's image.

### Add

:::caution
This sub-command requires you to have the `MANAGE EMOJIS` permission.
:::

Adds a custom emoji to the server.

### Remove

:::caution
This sub-command requires you to have the `MANAGE EMOJIS` permission.
:::

Removes a custom emoji from the server.

### Count
Counts the total number of emojis in the server.

## Permissions
### Bot
- `SEND MESSAGES`
- `EMBED LINKS`
- `MANAGE EMOJIS` (for the `add` & `remove` sub-command)
### Member
- `MANAGE EMOJIS` (for the `add` & `remove` sub-command)
