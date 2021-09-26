---
sidebar_position: 1
---

# Setup

## Permissions
The bot requires the `manage webhooks` and `view channel` permissions in the logging channel(s).

You can make the bot ignore specific channels and roles, actions taken for/by/in these entities won't get logged. This applies to all the sub-modules.

## Webhooks
Comio uses **webhooks** to log events. Webhooks are a low-effort way to log events and keep things clean. The message will not be sent by the bot itself, instead, it will create a webhook with the name **Comio Logger** and a familiar avatar with white border as shown below.

<img className="imgAuto" alt="Comio Logger webhook" src="/img/docs/3f4e09a525f196f955d8a4900ff525a3.png" />

This webhook will have the unverified bot tag, will not share a discriminator and the username displayed will always white, regardless of the bot's highest role's color. 

:::info Note
Since the bot itself is not sending the messages, the logging channel(s) needs to have the **Use External Emojis** permission for the webhooks to use custom emojis.
:::

A sample message edit log is shown below.

<img className="fakeMsg" alt="Comio Logger example" src="/img/docs/9c9d9bb3a2942c19fa43d3ae60652786.png" />
