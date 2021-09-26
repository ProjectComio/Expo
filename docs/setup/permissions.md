---
sidebar_position: 2
---

# Permissions
## Bot permissions
Although we recommend granting the **Administrator** permission to the bot, it'll still work without it. But we don't see any point in denying the permission as you can control each and every action of the bot via the dashboard. However, if you want to deny administrator permission anyway, **Comio** will need these basic permissions to function properly:
- Base permissions
  - `View channels`
  - `Send messages`
  - `Embed links`
  - `Use slash commands`
- Extended permissions
  - `Manage messages`
  - `Kick and ban members`
  - `Manage roles, stickers, emojis and channels`
  - `Modify nicknames`
  - `Manage webhooks`

In addition to the permissions listed above, the channel permissions must also include "Allow members to use application commands" permission for the concerned role/member for them to access the application commands as shown below:

<img className="imgAuto smImg" alt="Channel settings for application commands" src="/img/docs/cef634be9994ad04cf3d5fc3ff9b2be4.png" />

We also recommend you to drag the bot's role as visually high as possible (probably below the human server administrators) as shown below, so that it can freeze and ban members if anything goes wrong.

<video className="videoPartial" autoPlay loop playsInline muted poster="/expo/img/docs/posters/e312352dc42114dda64a9ed3c006bb44_poster.jpg">
  <source src="https://cdn.discordapp.com/attachments/864813125320441858/889583045030588488/e312352dc42114dda64a9ed3c006bb44.mp4" type="video/mp4" />
Your browser does not support videos.
</video>

## Member permissions
**Comio** will warn the member who called the command is he/she is missing the required permissions (can be disabled via dashboard), but you can also specify allowed roles and channels for each command.

If you cannot see slash commands, then you may have disabled the "Use slash commands" option in your user settings.

<img className="docImg" alt="User settings for slash commands" src="/img/docs/0f99fca0ac9ea66e198d02b9d65b0e35.png" />

