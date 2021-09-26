---
sidebar_position: 1
---

# Prefix
Comio does **not** feature commands starting with your typical prefixes like `?` or `!`, it incorporates slash commands and other interaction types.

### But why did you ditch the prefix-styled commands?
Well, there were many reasons that forced us to do so:
- Due to Discord's new [intent policy](https://support-dev.discord.com/hc/en-us/articles/4404772028055-Message-Content-Access-Deprecation-for-Verified-Bots), the only way out was to implement slash commands.
- **Comio** does have access to message content, but it is only used for auto-moderation purposes.
- We discovered that slash commands are really excellent, and even better than the traditional prefix system. You don't have to remember the prefix of each bot every time, just type `/` and you'll have a list of all the commands. It is also a more oriented and neat way to execute commands and the ephemeral responses made it even more interesting.

:::info Note
We might add the prefix styled commands again in the future if we receive multiple requests from the community.
:::