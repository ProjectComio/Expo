---
sidebar_position: 1
---

# Setup
**Comio** offers a fair time-based server listing and advertising platform for people to join and interact. Whenever someone _**bumps**_ a server (using the `/bump` command), the server gets listed on the very first page of the website, until some other server gets bumped and replaces the server's position.

:::danger
Your server must strictly abide by [Discord's community guidelines](https://discord.com/guidelines), we check the listings periodically and violating these guidelines may lead to action being taken on your server or account (a permanent blacklist from our services).
:::

- Head over to the listings module in your [server's settings](https://comio.cf/manage/).
- You'll find an editor and a live preview box on this page.

## Short description
As the name implies, must be as short and catchy as possible, because this is the first text-based thing your visitors will see.

## Long description
This will be visible on the server's public information panel, this supports [markdown](https://guides.github.com/features/mastering-markdown/) and [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) (allows embedding your site or a youtube video in the description). Explicit content is **strictly not** allowed in any of the descriptions.

```markdown title="A markdown example"
Start lines with a `#` to create headings. 
Multiple `##` in a row denote smaller heading sizes.

#### This is a fourth-tier heading

You can use one `#` all the way up to `######` six for different heading sizes.

If you'd like to quote someone, use the > character before the line:

> Coffee. The finest organic suspension ever devised... I beat the Borg with it.
> - Captain Janeway
```

The code above will render as:

<div className="mdBack">

Start lines with a `#` to create headings. 
Multiple `##` in a row denote smaller heading sizes.

#### This is a fourth-tier heading

You can use one `#` all the way up to `######` six for different heading sizes.

If you'd like to quote someone, use the > character before the line:

> Coffee. The finest organic suspension ever devised... I beat the Borg with it.
> - Captain Janeway

</div>

:::tip
You can learn more about markdown [here](https://guides.github.com/features/mastering-markdown/).
:::

```html title="An iframe example: Embedding a YouTube video"
<iframe 
    width="900" height="506" 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>
```
The code above will embed a _very popular_ music video in your server's description.

- **Logo shape** allows you to choose between a circular and a square-shaped server icon bracket.
- **Server invite** must your server's permanent invite link.

:::caution
Server invite vendors other than Discord (such as `discord.me`, `discord.li`, `discord.io`) will not work, the invite links must start with `discord.gg`, `discord.com/invite` or `discordapp.com/invite`.
:::

- **Default invite channel** will be used as a fallback in-case the default invite link fails to respond or expires.

:::tip
Choosing a channel that is visible to the <span className="mention">@everyone</span> role as the default invite channel is a good practice.
:::

- **NSFW checkbox** must be checked if your server is based on content that isn't safe for work.
- Choose the category your server falls into. You can only choose one category.
- You can assign upto 5 custom tags to your server.
- A static banner, which will be displayed on the public listings page and as a background on your server's listing page.

> <i className="fas fa-star star"></i> Premium servers can upload a custom animated server banner.

:::info Note
We recommend a banner image that is atleast `640` pixels wide and `360` pixels tall in order to display properly among all kinds of devices.
:::

## Resources

| Path | Description |
| --- | --- |
| `comio.cf/servers` | The public listings page | 
| `comio.cf/servers/server_id` | Your server's main listing page |
| `comio.cf/servers/server_id/join` | This page will lead to your server's invite |
