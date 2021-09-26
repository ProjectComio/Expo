---
sidebar_position: 7
---

# /purge
## Description
Deletes upto 100 messages in bulk that are not older than 2 weeks

- Supports ephemeral response
- 3 seconds cooldown

:::info Purging messages older than 2 weeks
Discord does not allow bots to bulk delete message that are older than 2 weeks as of now. The only way for bots to delete old messages is to fetch and delete them one by one, and Comio does **not** do it that way. This restriction was implemented due to the by-gone API stability issue, caused due to people using bulk delete to purge channels with extensive message history, creating excessive table fragmentation within Discord's database cluster.
:::

:::danger
All the sub-commands do not ignore pinned messages.
:::

## Sub-commands
### Filter
Purges the messages by filtering them with the filter parameter.

| Filter | Description |
| --- | --- |
| `Links` | Filters messages containing links (including server invites) |
| `Invites` | Filters messages containing server invites |
| `Images` | Filters messages containing images (`PNG`, `JPEG/JPG`, `WEBP` and `GIF`) |
| `Attachments` | Filters messages containing attachments (including uploaded images) |
| `Embeds` | Filters messages containing rich embeds |
| `Emojis` | Filters messages containing emojis (both unicode and custom) |
| `Stickers` | Filters messasges containing stickers (both standard and custom) |
| `Has reactions` | Filters messages containing reactions |
| `By Human` | Filters messages authored by human members |
| `By Bot` | Filters messages authored by bots |
| `Mentions user(s)` | Filters messages that mentions (a) user(s) |
| `Mentions role(s)` | Filters messages that mentions (a) role(s) (exlcuding <span className="mention">@everyone</span> and <span className="mention">@here</span>) |
| `Mentions everyone` | Filters messages that mentions <span className="mention">@everyone</span> or <span className="mention">@here</span> |

### Match 
Purges the messages containing a word. 

:::info Note
Only a single word shorter than 16 characters can be used as the match parameter
:::

### User
Purges the messages send by a user.

## Permissions
### Bot
- `SEND MESSAGES`
- `EMBED LINKS`
- `MANAGE MESSAGES`
### Member
- `MANAGE MESSAGES`