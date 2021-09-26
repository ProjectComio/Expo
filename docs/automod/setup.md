---
sidebar_position: 1
---

# Setup
The auto-moderator can be configured using the auto-mod tab in your [server's settings](https://comio.cf/manage).
- Ignored channels and roles are immune from auto-mod.
- Moderator roles are immune from auto-mod.
- You can choose a logging channel where all the actions taken by the auto-moderator will get logged, learn more about [logging](/docs/logger/setup).

:::info Note
Comio will automatically join any new threads created, this is a safety feature.
:::

## Permissions

:::caution
We highly recommened granting the **administrator** permission to the bot for the auto-moderator to work properly.
:::

The bare-minimum permissions required are listed below:
- `Send and manage messages`
- `Embed links`
- `Manage roles`
- `Kick and ban members`
- `Manage channels` (for automatic slowmode)
- `Manage webhooks` (for logging)