---
sidebar_position: 6
---

# Voice logs
Any modification in the member's voice state will be logged by this sub-module.

## Events logged

| Property | Description |
| --- | --- |
| Join | Triggers when a member joins a voice channel |
| Leave | Triggers when a member leaves a voice channel |
| Move | Triggers when a member moves between voice channels |
| Suppress | Triggers when a member gets suppressed or unsuppressed |
| Deafen | Triggers when a member gets deafened or undeafened |

:::info Note
Join and leave events for stage channels are not logged.
:::

You can customize the events to log.
