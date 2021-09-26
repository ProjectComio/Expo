---
sidebar_position: 4
---

# /embed
## Description
Manipulates an embed

- Supports ephemeral response
- 3 seconds cooldown

## Sub-commands
### Source
Provides an embed's [JSON data](#json-data). 

### Create
Creates an embed.

### JSON
Creates an embed using [JSON data](#json-data).

### Edit
Edits an existing embed using new [JSON data](#json-data).

:::info Note
Embeds authored by other bots are not editable by Comio.
:::

## Permissions
### Bot
- `SEND MESSAGES`
- `EMBED LINKS`
- `ATTACH FILES`
### Member
- `MANAGE MESSAGES`

### JSON data
The embed's JSON data defines its structure and content. JSON object literals are surrounded by curly braces `{}` and they contain key/value pairs separated by a colon.

```json title="JSON object structure"
{
    "key": "value"
}
```

```json title="Sample embed dataa"
{
    "color": "#FFFFFF",
    "title": "Embed title",
    "author": {
            "name": "Author's name"
    },	
    "footer": {
		"text": "Footer text"
	}
}
```

## Limitations
- Embed titles are limited to `256` characters
- Embed descriptions are limited to `4096` characters
- Embed images must be either attachments or image URLs stating with the `https` protocol (`http` or any other protocol is not supported by Discord)
- An embed can have up to `25` fields
- A field's name is limited to `256` characters and its value to `1024` characters
- The footer text is limited to `2048` characters
- The author name is limited to `256` characters

:::tip
For better embeds manipulation, use the [web embed builder](https://comio.cf/embeds).
:::