---
sidebar_position: 14
---

# /todo
## Description
Manipulates a user's very own to-do list

- Always ephemeral
- 3 seconds cooldown

## Sub-commands
### Add
Adds a task to the to-do list.

### Remove
Removes a task from the to-do list.

### Show
Displays the to-do list.

### Edit
Edits a task in the to-do list.

### Exports
Exports the to-do list.

:::danger
The exported text file will be visible to everyone in the channel where the command is called, as ephemeral responses do not support text file attachments at the moment.
:::

### Reset
Resets the to-do list. **This cannot be undone!**

## Permissions
### Bot
- `SEND MESSAGES`
- `EMBED LINKS`
### Member
None
