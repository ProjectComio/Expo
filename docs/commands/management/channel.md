---
sidebar_position: 3
---

# /channel
## Description
Manipulates a channel

- Supports ephemeral response
- 3 seconds cooldown

## Sub-commands
### Info
Provides details about a channel.

### Lock

Locks a channel. 

| Channel Type | Permission denied | 
| --- | --- |
| Text | <i className="fas fa-times"></i> `SEND MESSAGES` |
| Voice | <i className="fas fa-times"></i> `CONNECT` |

### Unlock

Unlocks a channel. 

| Channel Type | Permission granted | 
| --- | --- |
| Text | <i className="fas fa-check"></i> `SEND MESSAGES` |
| Voice | <i className="fas fa-check"></i> `CONNECT` |

:::info Note
Only text and voice channels can be locked or unlocked.
:::

### Topic
Modifies the topic of a text-based channel.

### Slowmode
Modifies the slowmode of a text-based channel.

### Voice-limit
Modifies the user-limit of a voice channel.

:::caution
Channel modification commands will only work if you have the permission to **manage the target** channel, not the channel where the command is called.
:::

## Permissions
### Bot
- `SEND MESSAGES`
- `EMBED LINKS`
### Member
- `MANAGE CHANNELS`