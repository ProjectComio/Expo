---
sidebar_position: 4
---

# Troubleshoot

> Uploading the image takes forever or it freezed while uploading

The primary reason for this is that your image could not be broken into chunks to upload. Make sure that your image is well under `5MB` (8MB is the hard limit, though your image must be much lighter than this). Corrupt images may cause server errors.

> The greeting image taking forever to render

Heavier images with more details take longer to render and process, kindly use as light image as you can or compress your image using some external service.

> The bot is not greeting members

Make sure you've properly configured the greeter module and bot bot has all the required permissions in the greeting channel. The `/greeter test` command is useful for diagnosing any human errors made during the configuration & setup.

> Tags are not being parsed

All the tags are _CaSe-SeNsItIvE_! Double-check all your tags for errors. Some tags will parse into empty text due to unavailable resources, for example, the `{server.banner}` will parse into an empty text if the server does not feature a banner or `{server.icon}` will also parse into an empty text if the server has no icon.

> Greeting messages are not being sent as direct messages

The one and only reason for this behaviour is that the concerned member has disabled direct messages, and the bot cannot do anything in such cases.
