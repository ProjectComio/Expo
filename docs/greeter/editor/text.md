---
sidebar_position: 4
---

# Image text
The greeter module allows you to add upto 2 different text overlays on your greeting image. The text supports color, shadow & different fonts and can be dragged, scaled and rotated just like other elements.

<img alt="Text settings panel" className="docImg" src="/img/docs/fb437c704f61b4dbabb07dc6661de058.png" />

:::info Note
The primary text is placed below the avatar and the secondary text is overlayed over the avatar, so you may customize the design as suited.
:::

## Tags
The text content supports a list of tags (or variables) to format your greeting message or embed:

| Tag syntax  | Description | Output | Alias(es) |
| ----------- | ----------- | ------ | --------- |
| `{user.ping}` | Mentions the user | @Liz | `{user.@}`, `{user.mention}` |
| `{user.name}` | Returns the user's name | Liz | `{user.username}` |
| `{user.tag}` | Returns the user's tag | Liz#9999 | None |
| `{user.disc}` | Returns the user's discriminator | 9999 | `{user.discriminator}` |
| `{user.avatar}` | Returns the URL of user's avatar (animated if available) | Avatar's URL (animated/GIF) | `{user.avatar.animated}`, `{user.avatar.a}`, `{user.avatar.gif}` |
| `{user.avatar.static}` | Returns the static version of the user's avatar URL | Avatar's URL (static) | `{user.avatar.s}` |
| `{user.avatar.png}` | Returns the URL of user's avatar in PNG format | Avatar's URL (PNG) | None |
| `{user.avatar.jpeg}` | Returns the URL of user's avatar in JPEG format | Avatar's URL (JPEG) | `{user.avatar.jpg}` |
| `{user.avatar.webp}` | Returns the URL of user's avatar in WebP format | Avatar's URL (WebP) | None |
| `{user.id}` | Returns the user's unique ID | 123456789012345678 | None |
| `{user.created}` | Returns the timestamp the user was created at (can be used for time formatting using <t:timestamp:style>) | 1632050320 | `{user.creation}` |
| `{user.created.short}` | Returns the user's creation date in MM/DD/YYYY format | 07/11/2020 | `{user.created.s}` |
| `{user.created.long}` | Returns the user's creation date in Day-name Month-name DD YYYY | Sat Nov 07 2020 | `{user.created.l}` |
| `{server.name}` | Returns the server's name | WumpusLand | None |
| `{server.id}` | Returns the server's ID | 123456789012345678 | None |
| `{server.icon}` | Returns the URL of server's icon (animated if available) | Icon's URL (animated/GIF) | `{server.icon.animated}`, `{server.icon.a}`, `{server.icon.gif}` |
| `{server.icon.static}` | Returns the static version of the server's icon URL | Icon's URL (static) | `{server.icon.s}` |
| `{server.icon.png}` | Returns the URL of server's icon in PNG format | Icon's URL (PNG) | None |
| `{server.icon.jpeg}` | Returns the URL of server's icon in JPEG format | Icon's URL (JPEG) | `{server.icon.jpg}` |
| `{server.icon.webp}` | Returns the URL of server's icon in WebP format | Icon's URL (WebP) | None |
| `{server.banner}` | Returns the URL of server's banner in PNG format (if available) | Banner's URL (PNG) | `{server.banner.png}` |
| `{server.banner.jpeg}` | Returns the URL of server's banner in JPEG format (if available) | Banner's URL (JPEG) | `{server.banner.jpeg}` |
| `{server.banner.webp}` | Returns the URL of server's banner in WebP format (if available) | Banner's URL (WebP) | None |
| `{server.members}` | Returns the total number of members in the server including bots | 99,999 | `{server.member}` |
| `{server.members-bots}` | Returns the total number of members in the server excluding bots | 99,990 | `{server.members-bot}`, `{server.member-bot}`, `{server.member-bots}` |
| `{server.members.ordinal}` | The join position of the user with ordinal (including bots) | 99,999th | `{server.members.ord}`, `{server.member.ordinal}`, `{server.member.ord}` |
| `{server.members.ordinal-bots}` | The join position of the user with ordinal (excluding bots) | 99,990th | `{server.members.ord-bots}`, `{server.member.ordinal-bot}`, `{server.member.ord-bots}` |
