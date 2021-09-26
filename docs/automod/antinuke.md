---
sidebar_position: 3
---

# Anti-nuke
Afraid of your server's security? Building a Discord server takes a good amount of time & creativity, don't let someone spoil all your hardwork that you put into your server!

## Mass channel abuse
Triggers when someone creates or deletes channels in bulk (within a very short timeframe which can only be implement through self-bots or scripts), expected in the process of nuking a server.

## Mass role abuse
Triggers when someone creates or deletes roles in bulk (within a very short timeframe which can only be implement through self-bots or scripts), expected in the process of nuking a server.

Both sub-modules feature a freeze parameter which will remove all the roles from the offender and an instant-ban parameter which will instantly ban the offender (recommended). 

:::info Note
The process of nuking a server is extremely fast (usually takes a few moments to purge all the roles or channels), there are chances that the sub-module triggers after a few moments. This isn't an issue from our side, the sub-module triggers as soon as it receives the event from the API, and fetching the offender takes a very short amount of time. The bot tries its best to allow as minimal damage as possible that can happen to the server.
:::

:::tip
Enabling other auto-moderator features such as [links](/docs/automod/sub_modules#links), [server invites](/docs/automod/sub_modules#server-invites), and [auto-slowmode](/docs/automod/slowmode) will further add a layer of protection to your server.
:::

