---
sidebar_position: 3
---

# Message logs
Any modification in cached messages (sent while or after the bot is online) will be logged by this sub-module.

:::caution
Changes in messages that are not cached (very old or modified when the bot was offline) won't get logged.
:::

## Events logged

| Property | Description |
| --- | --- |
| Edit | Triggers a cached message is edited |
| Delete | Triggers when a cached message is deleted |
| Purge | Triggers when cached messages are deleted in bulk (only bots can deleted messages in bulk) |
| Image delete | Triggers when a cached image attachment is deleted |

You can customize the events to log.

:::tip
Comios uses image fallback safety feature, when an image is deleted, the bot will save the deleted image and embed it as a new attachment, so that your logs channel won't be filled by monochrome "**💩s**" instead of the images.
:::