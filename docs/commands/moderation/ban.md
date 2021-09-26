---
sidebar_position: 1
---

# /ban
## Description
Manipulates a member's ban

- Supports ephemeral response
- 3 seconds cooldown
- Can be used by members having the [moderator role](/docs/setup/modroles)

## Sub-commands
### User
Bans a user by mention, tag or ID (even if the user is not a member of the server) from the server.

### Mass
Bans upto 15 members in bulk, by mention, tag or ID (even if they are not a member of the server) from the server.

:::caution
This sub-command usually takes a few seconds for banning the specified members to avoid rate-limits. All the banned and provided users will get logged via the [moderation logs](/docs/logger/sub_modules/moderation) sub-module (if enabled).
:::

### Soft
Bans and immediately unbans a user to delete all the messages sent by them in the last 7 days. Similar to a kick which deletes the user's messages.

### Remove
Unbans a user by tag or ID from the server.

### Fetch
Fetches a user's ban by tag or ID from the server. Useful for checking the reason for the ban.

:::tip
Ban sub-commands support a `dm` option, which allows you to choose wether or not to send a direct message to the offender when banned or unbanned. A `message history` option is also provided to purge the messages sent by the user in the specified amount of days.
:::

## Permissions
### Bot
- `SEND MESSAGES`
- `EMBED LINKS`
- `BAN USERS`
### Member

:::info Note
If the command caller has a moderator role, they do not need the permission(s) listed below.
:::

- `BAN USERS`
