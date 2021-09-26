---
sidebar_position: 7
---

# /punishment
## Description
Manipulates a member's punishment for the server

- Supports ephemeral response
- 3 seconds cooldown
- Can be used by members having the [moderator role](/docs/setup/modroles)

## Sub-commands
### Reason
Modifies an existing punishment's reason.

### Remove
Removes a member's punishment from the server.

### Reset
Resets a member's punishment history for the server. **This cannot be undone!**

## Permissions
### Bot
- `SEND MESSAGES`
- `EMBED LINKS`
### Member

:::info Note
If the command caller has a moderator role, they do not need the permission(s) listed below.
:::

- `MANAGE MESSAGES`