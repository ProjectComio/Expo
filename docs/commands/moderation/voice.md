---
sidebar_position: 8
---

# /voice
## Description
Manipulates (a) member(s) voice state

- Supports ephemeral response
- 3 seconds cooldown
- Can be used by members having the [moderator role](/docs/setup/modroles)

## Actions
| Action | Description |
| --- | --- |
| `Suppress` | Suppresses/unsuppresses (a) member(s) server-wide |
| `Deafen` | Deafens/undeafens (a) member(s) server-wide |
| `Disconnect` | Disconnects (a) member(s) from a voice channel |

## Sub-commands
### Member
Modifies a member's voice state.

### All
Modifies the voice state of all the members connected to a voice channel.

## Permissions
### Bot
- `SEND MESSAGES`
- `EMBED LINKS`
- `MUTE MEMBERS`
- `DEAFEN MEMBERS` 
- `MOVE MEMBERS`
### Member

:::info Note
If the command caller has a moderator role, they do not need the permission(s) listed below.
:::

- `MUTE MEMBERS`
- `DEAFEN MEMBERS` 
- `MOVE MEMBERS`