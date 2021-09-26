---
sidebar_position: 10
---

# /member
## Description
Provides details for a member

- Supports ephemeral response
- 5 seconds cooldown

## Sub-commands
### Info
Provides details about a member

### Avatar
Provides the image URL for the member's avatar

### Status
Generates an image of the member's custom status (for you to save as a memory `:)`)

### Search
Searches the server for a member, based on the input provided such as:
- `#0000` (Discriminator)
- `123456789012345678` (ID)
- `Liz` (Username or Nickname)

:::info Note
Username and nicknames are broken down into simple text, this sub-command can also fetch members having zalgos in their name.
:::

## Permissions
### Bot
- `SEND MESSAGES`
- `EMBED LINKS`

### Member
None