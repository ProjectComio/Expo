---
sidebar_position: 13
---

# /sticker
## Description
Manipulates a sticker

- Supports ephemeral response
- 3 seconds cooldown

## Sub-commands
### Info
Provides details about a sticker.

### Save
Provides the URL for the sticker's image (or a `JSON` file for lottie stickers).

### Add

:::caution
This sub-command requires you to have the `MANAGE STICKERS` permission.
:::

Adds a custom sticker to the server.

### Remove

:::caution
This sub-command requires you to have the `MANAGE STICKERS` permission.
:::

Removes a custom sticker from the server.

## Permissions
### Bot
- `SEND MESSAGES`
- `EMBED LINKS`
- `MANAGE STICKERS` (for the `add` & `remove` sub-command)
### Member
- `MANAGE STICKERS` (for the `add` & `remove` sub-command)
