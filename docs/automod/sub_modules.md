---
sidebar_position: 2
---

# Sub-modules
## Module settings
### Module parameters
These define how the automod will react to the offender, and what action will trigger the specific sub-module.

| Parameter | Action | 
| --- | --- |
| `Delete` | Deletes the offender's message |
| `Warn` | Punishes the offender with a 5 second temporary warning |
| `Instant mute` | Instantly mutes the offender on violation |
| `Instant kick` | Instantly kicks the offender on violation |
| `Instant ban` | Instantly bans the offender on violation |
| `Freeze` | Removes all roles from the offender |
| `Sticker mute` | Denies the offender from sending stickers |
| `Emoji mute` | Denies the offender from sending emojis (both unicode and custom) |
| `Auto-mute` | Automatically mutes the offender on crossing the specified violation count | 
| `Auto-ban` | Automatically bans the offender on crossing the specified violation count |

:::caution
For the freeze parameter to work properly, you need to drag the bot's role as visually high as possible (probably just below the human server administrators, if you trust them).

<video className="videoPartial" autoPlay loop playsInline muted poster="/img/docs/posters/e312352dc42114dda64a9ed3c006bb44_poster.jpg">
<source src="https://cdn.discordapp.com/attachments/864813125320441858/889583045030588488/e312352dc42114dda64a9ed3c006bb44.mp4" type="video/mp4" />Your browser does not support videos.</video>

:::

:::info Note
Sticker, emoji, and other mutes follow the same time specified in the mute time prompt, or permanent if unspecified.
:::

### Ignored channels and roles
In-addition to ignoring channels & roles server-wide, you can also ignore them specifically for each sub-module. 

:::caution
Globally ignored channels and roles will always override the ones ignored by the individual sub-modules. 
:::

### Response 
You can customize the response that will be replied to the offender. These get deleted after 5 seconds automatically. To disable the response for a sub-module, just leave the response field empty.

### Instant mute and instant ban
These parameters will trigger instantly regardless of the violation count.

You can enable both the auto-mute and auto-ban parameter for a sub-module. For example, a user will get muted after 3 violations and get banned after 5 violations by setting the auto-mute violations to 3 (default) and auto-ban violations to 5 (default).

## Banned-words
Triggers when a user sends a message containing the banned-word(s).

Banned-words are the words/phrases that are denied server-wide, the bot uses a default collection of cursed & abusive words and phrases. You can also add upto 100 custom banned words for your server. 

> <i className="fas fa-star star"></i> Premium server can add upto 200 custom banned words!

## Capitalized words
Triggers when a user sends a message containing more than 70% capital letters (`CAPITal`, for example).

## Duplicate text
Triggers when a user sends a message containing the same text that is repeated more than three times in it (`a nice bot a nice bot a nice bot`, for example).

## Spoiler text
Messages containing spoilers (<span className="spoiler"><span> A spoiler text </span></span>) will trigger this sub-module.

## Zalgo text
Messages containing zalgos (made by taking a string of text and excessively adding Unicode diacritic marks on top of one another, `C̶͍̅O̸̹͠M̶̰̈́I̴̱͆O̶̧̾`, for example) will trigger this sub-module.

## Server invites
Messages containing server invites will trigger this sub-module. The bot can catch server invites from various vendors:
- [x] `discord.gg`
- [x] `discord.me`
- [x] `discord.li`
- [x] `discord.io`
- [x] `discordapp.com/invite`
- [x] `discord.com/invite`

Catches both `http` and `https` protocols.

:::info Note
URLs that redirect to a server invite (commonly generated using URL shorteners) will not be catched. But we've working on this feature and it may get implemented in the future updates. You can use the [links](#links) sub-module for now, which will catch every URL.
:::

:::caution
If you've enabled the links sub-module, it will override the server invites sub-module as server invites are also links (except those starting without a protocol such as `discord.gg`)
:::

## Links
Messages containing links/URLs will trigger this sub-module. You can whitelist upto 100 links for your server which will be ignored by this sub-module. 

> <i className="fas fa-star star"></i> Premium server can whitelist upto 200 links!

:::info Note
You do not need to add a trailing slash to your whitelisted link(s), for example, if you whitelist `https://comio.cf`, the sub-module will ignore both `https://comio.cf` and `https://comio.cf/`.
:::

## Message spam
This sub-module triggers when a user sends 5 or more messages within 5 seconds. The delete parameter for this sub-module is highly accurate and deletes only the spammed messages. 

## Image spam
This sub-module triggers when a user sends more than 5 images at once or 3 or more images within a timeframe of 3 seconds. 

## Emoji spam
This sub-module triggers when a user sends 5 or more messages containing emojis (unicode or custom) within 5 seconds.

## Selfbot detection
Triggers when a server member (not a bot user) sends an embed, as only bots are allowed to send embeds. Self-bots or automated user-accounts are against Discord's terms of use. Read more [here](https://support.discord.com/hc/en-us/articles/115002192352-Automated-user-accounts-self-bots).

:::danger
We neither encourage nor involve in automated user-accounts, and if a botted-user is caught trying to abuse our services or commands (overloading of our services), he/she will be blacklisted from our services.
:::

## Unverified bot detection
Triggers when someone adds an unverified bot to the server. 

:::info Note
This sub-module will also freeze the member who invited the bot.
:::

## Stickers
Triggers when a user sends a sticker (standard or custom).

## Sticker spam
This sub-module triggers when a user sends 3 or more stickers within 5 seconds.

## @everyone and @here mention
Triggers when a user mentions or tries to mention <span className="mention">@everyone</span> or <span className="mention">@here</span>, even if he/she has the necessary permission.

## Emoji limit
Limits the maximum count of emojis (both unicode and custom) allowed per message.

## Mention limit
Limits the maximum count of user mentions allowed per message.

:::caution
Role and channel mentions are not counted towards the mention limit.
:::

## Message length limit
Limits the maximum length of a message.

:::info Note
Messages that cross these limits will get purged.
:::
