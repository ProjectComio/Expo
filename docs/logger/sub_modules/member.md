---
sidebar_position: 2
---

# Member logs
Any modification in a member's properties will be logged by this sub-module.

## Events logged

| Property | Description |
| --- | --- |
| Name | Triggers when a member's username is changed (not nickname) |
| Discriminator | Triggers when a member's discriminator is changed |
| Nickname | Triggers when a member's nickname is changed on the server |
| Avatar | Triggers when a member's avatar is changed | 
| Join | Triggers when a user (including bot user) joins the server |
| Leave | Triggers when a member (including bot user) leaves the server |
| Role | Triggers when a role is removed or added from/to a member on the server | 

You can customize the events to log.

:::tip
Comios uses image fallback safety feature, when an avatar is modified, the bot will save the avatar and embed it as a new attachment, so that your logs channel won't be filled by monochrome "**💩s**" instead of the avatars if the user changes the avatar again.
:::

:::danger
Information logged by this sub-module may contain sensitive information such as avatars, we **strongly recommend** you to make this sub-module log events in a private channel that is only accessible to the server officials.
:::