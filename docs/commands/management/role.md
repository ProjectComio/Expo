---
sidebar_position: 8
---

# /role
## Description
Manipulates a role

- Supports ephemeral response
- 3 seconds cooldown


## Sub-commands
### Info
Provides details about a role.

### All
Adds/removes a role to/from all the members in the server (including bots).

### Humans
Adds/removes a role to/from all the members in the server excluding bots.

### Bots
Adds/removes a role to/from all the bots in the server.

### Status
Provides details about an ongoing role modification process in the server (if any).

### Cancel
Terminates an ongoing role modification process in the server (if any).

### Members
Lists all the members in the server having a role.

:::caution
A maximum of 250 members can be displayed at a time to avoid overloading.
:::

### List
Lists all the roles in the server.

### Create
Creates a new role.

### Modify
Modifies an existing role. Properties that can be modified by the sub-command:
- [x] Name
- [x] Color
- [x] Hoist
- [x] Mentionable

### Delete
Deletes a role.

:::info Note
Adding or removing a role from a large number of members will take some time to avoid rate-limits. The `status` sub-command is meant to check the progress and the time elapsed since the modification process started.
:::

## Permissions
### Bot
- `SEND MESSAGES`
- `EMBED LINKS`
- `MANAGE ROLES`
### Member
- `MANAGE ROLES`