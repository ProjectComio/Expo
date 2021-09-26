---
sidebar_position: 5
---

# Slowmode
## What is this?
When a large number of members start sending messages at the same time in the same channel, this sub-module triggers and automatically implements slowmode in the channel to keep things smooth and under the hood.

:::caution
This sub-module will not count messages that are authored by the same user. This is a safety feature to restrict users from false triggering the sub-module.
:::

## Setup
You need to find out your's server's **message to time** ratio. It mainly depends on your server population, although the most common ratio is 5 messages in 5 seconds. You can configure it as per your server's needs.

:::info Note
A slowmode with 5 seconds timeout is implemented when this sub-module gets triggered, and the bot will automatically reset the slowmode when there are fewer number of members sending messages than before.
:::