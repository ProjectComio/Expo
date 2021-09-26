---
sidebar_position: 4
---

# Moderation logs
Any moderation actions taken in the server will be logged by this sub-module.

:::caution
Some actions such a warnings, mutes, and voice-channel moderation will only be logged if performed by Comio, similar actions by other bots that do not emit events will not get logged by this sub-module.
:::

## Events logged

| Property | Description | Executor |
| --- | --- | --- |
| Ban | Triggers a member (including bot user) is banned from the server | Anyone |
| Unban | Triggers a member (including bot user) is unbanned from the server | Anyone |
| Kick | Triggers when a member (including bot user) is kicked from the server | Only Comio |
| Warning | Triggers when a member is warned | Only Comio |
| Mute (normal, emoji, sticker, reaction) | Triggers when a member is muted | Only Comio |
| Unmute (normal, emoji, sticker, reaction) | Triggers when a member is unmuted | Only Comio |
| Nickname | Triggers when the bot receives a request to changes or reset a member's nickname on the server | Only Comio |
| Voice | Triggers when the voice state of (a) member(s) if modified by the bot | Only Comio |

:::info Note
_Executor_ in the the table above defines that the event will only get logged if executed by one of these executor(s).
:::

:::danger
Information logged by this sub-module may contain sensitive information, we recommend you to make this sub-module log events in a private channel that is only accessible to the server officials.
:::

This sub-module can't be customized.

