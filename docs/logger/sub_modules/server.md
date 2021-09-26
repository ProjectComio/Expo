---
sidebar_position: 5
---

# Server logs
Any modification in the server's properties will be logged by this sub-module.

## Events logged

| Property | Description |
| --- | --- |
| Name | Triggers when the server's name is modified |
| Icon | Triggers when the server's icon is modified |
| Banner | Triggers when the server's banner is modified |
| Invite splash | Triggers when the server's invite splash is modified |
| Discovery splash | Triggers when the server's discovery splash is modified |
| Settings | Triggers when the server's settings are modified | 
| Owner | Triggers when the server's owner is changed |
| Boost | Triggers when the server's boost/level is changed |
| Default channels | Triggers when the server's system channels are modified |
| Channel | Triggers when a channel (text, voice, thread, stage, news or store) is created, deleted or modified |
| Role | Triggers when a role is created, deleted or modified |
| Emoji | Triggers when a custom emoji is added, removed or modified |
| Sticker | Triggers when a custom sticker is added, removed or modified |
| Stage instance | Triggers when someone starts, ends or modifies a stage instance |

You can customize the events to log.

:::caution
Information logged by this sub-module may contain sensitive information, we recommend you to make this sub-module log events in a private channel that is only accessible to the server officials.
:::