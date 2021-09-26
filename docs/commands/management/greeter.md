---
sidebar_position: 5
---

# /greeter
## Description
Manipulates the greeter module for the server

- Supports ephemeral response
- 10 seconds cooldown

## Sub-commands
### Test

:::caution
This sub-command assumes that you've properly configured the greeter module from the dashboard before-hand.
:::

Generates a greeting message for diagnosing any human errors made while configuring the greeter module.

### Enable
Enables the greeter module for the server.

### Disable
Disables the greeter module for the server.

### Reset
Resets the greeter module for the server. **This cannot be undone!**

## Permissions
### Bot
- `SEND MESSAGES`
- `EMBED LINKS`
- `ATTACH FILES`
### Member
- `MANAGE SERVER`

## Troubleshoot
Have a look at the [trouble-shooting page](/docs/greeter/troubleshoot).