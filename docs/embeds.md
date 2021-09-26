---
sidebar_position: 8
---

# Embeds
Comio features fully customizable embed builder, which allows you to build, design & edit message embeds using interactive GUI or JSON code and preview it on the go! Special thanks to [Glitchii](https://glitchii.github.io/) for designing the embed builder.

<img alt="An example embed" className="docImg" src="/img/docs/ee03214ee2aa1b3d25ee719f170dda5c.png" />

## Permissions
The bot requires the following permissions in the channel you intent to send the embed:
- `SEND MESSAGES`
- `EMBED LINKS`

## Using the embed builder
Embed can be designed using the GUI, or by editing the JSON code on the other side. The preview embed will automatically update as you modify the values. The JSON editor has a linter which will check your JSON code for any errors. 

The image links you provide must point to the image, and should end with `.png`, `.jpg`, `.gif` or `.webp`.

:::caution
The image links you provide should not break after the embed is sent, or you'll soon end up with some monochrome poop. You can host you images on image hosting sites such as [Imgur](https://expo/imgur.com/) or Discord itself.
:::

To edit an existing embed, enter the message's ID containing the embed that you want to edit and select the channel where the embed is present. As soon as you hit the `LOAD` button, the embed will be loaded into your browser. From here on, you can either choose to edit this embed by modifying the values and hitting the `EDIT` button or send a new cloned embed by hitting the `CANCEL` button.

:::caution
Embeds authored by other bots are not editable by Comio.
:::

The embed builder uses auto-save feature which will save your current embed's data as you modify it.

## Embed limits
| Field | Limit |
| --- | --- |
| Title	| 256 characters |
| Description |	4096 characters |
| Fields | Up to 25 fields |
| Field name | 256 characters |
| Field value | 1024 characters |
| Footer text | 2048 characters |
| Author name |	256 characters |

:::danger
Discord only allow bots to send embeds. If you ever find a non-bot user sending an embed, kindly report the user [here](https://support.discord.com/hc/en-us/requests/new). The most obvious reason to use automated user accounts is to raid and nuke servers, which is a clear violation of Discord's [terms of service](https://discord.com/terms). Help us make Discord a better a safer place to hang out!
:::