---
sidebar_position: 5
---

# /mute
## Description
Manipulates a member's mute

- Supports ephemeral response
- 3 seconds cooldown
- Can be used by members having the [moderator role](/docs/setup/modroles)

## Formats
| Mute type | Description |
| --- | --- |
| `Normal` | Restricts a member from sending messages |
| `Reaction` | Restricts a member from adding reactions to a message (They can still react using any existing reactions on the message) |
| `Emoji` | Restricts a member from sending emojis (both unicode and custom) |
| `Sticker` | Restricts a member from sending stickers (both standard and custom) |

## Sub-commands
### Add
Mutes a member.

### Remove
Unmutes a member.

:::caution
Comio will create the following default roles (if not present) in the server when someone is muted:

| Mute type | Role |
| --- | --- |
| `Normal` | <span className="mention">@Muted</span> |
| `Reaction` | <span className="mention">@Reaction Muted</span> |
| `Emoji` | <span className="mention">@Emoji Muted</span> |
| `Sticker` | <span className="mention">@Sticker Muted</span> |

You may change the color of these role(s), but the role name should **not** be changed.

:::tip
This command support a `dm` option, which allows you to choose wether or not to send a direct message to the offender when muted or unmuted.
:::

:::info Note
Timed mutes are also available, which will expire automatically after the specified amount of timeframe. Time formats:

- `year`/`years`/`yrs`/`yr`/`y` for year(s)
- `week`/`weeks`/`w` for week(s)
- `day`/`days`/`d` for day(s)
- `hour`/`hours`/`hrs`/`hr`/`h` for hour(s)
- `minute`/`minutes`/`mins`/`min`/`m` for minute(s)
- `second`/`seconds`/`secs`/`sec`/`s` for second(s)
- `millisecond`/`milliseconds`/`msecs`/`msec`/`ms` for milli-second(s)
 
The maximum timeframe is 2 years and the minimum is 60 seconds. If no time-frame is specified, the bot will permanently mute the member unless unmuted by a moderator.
:::

:::info Note
When a member leaves a server, their roles get cleared. This will also remove any mute role(s) that they have. To tackle this issue, Comio will auto-assign the mute role(s) when the member joins the server again.
:::

## Permissions
### Bot
- `SEND MESSAGES`
- `EMBED LINKS`
- `MANAGE ROLES`
### Member

:::info Note
If the command caller has a moderator role, they do not need the permission(s) listed below.
:::

- `MANAGE MESSAGES`
