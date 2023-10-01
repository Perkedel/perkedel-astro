# Discord app protocol routes

Home:

* `/`: `discord://-/`
* friends: `discord://-/channels/@me/`
* nitro: `discord://-/store`
* message requests: `discord://-/message-requests`
* family centre: `discord://-/family-center`

General:

* apps: `discord://-/apps`
* discovery - guilds: `discord://-/guild-discovery`
* gift: `discord://-/gifts/<gift_code>`
* gift (with login screen): `discord://-/gifts/<gift_code>/login`
* new server: `discord://-/guilds/create`
* server invite: `discord://-/invite/<invite_code>`
* server invite (with login screen): `discord://-/invite/<invite_code>/login`

Settings:

* user settings: `discord://-/settings/<setting_name>`
  * with `setting_name`:
    * User settings - my account: `account`
    * User settings - profiles: `profile-customization`
    * User settings - privacy and safety: `privacy-and-safety`
    * User settings - family: `family-center`
    * User settings - authorized apps: `authorized-apps`
    * User settings - connections: `connections`
    * User settings - devices: `sessions`
    * User settings - friend requests: `friend-requests`
    * Payment settings - Discord Nitro: `premium`
    * Payment settings - server boost: `premium-guild-subscription`
    * Payment settings - subscriptions: `subscriptions`
    * Payment settings - gift inventory: `inventory`
    * Payment settings - billing: `billing`
    * App settings - appearance: `appearance`
    * App settings - accessibility: `accessibility`
    * App settings - voice & video: `voice`
    * App settings - text & images: `text`
    * App settings - notifications: `notifications`
    * App settings - keybinds: `keybinds`
    * App settings - language: `locale`
    * App settings - windows settings: `windows`
    * App settings - linux settings: `linux`
    * App settings - steamer mode: `streamer-mode`
    * App settings - advanced: `advanced`
    * Activity settings - activity privacy - `activity-privacy`
    * Activity settings - registered games - `registered-games`
    * Activity settings - game overlay: `overlay`
    * Hypesquad: `hypesquad-online`
    * Changelog: `changelogs`
    * Experiments: `experiments`
    * Developer options: `developer-options`
    * Hotspot options: `hotspot-options`
    * Dismissible Contents: `dismissible-content-options`
* guild settings: `discord://-/guilds/<guild_id>/settings`
  * overview: `/overview`
  * roles: `/roles`
  * emoji: `/emoij`
  * stickers: `/stickers`
  * widget: `/widget`
  * server template: `/guild-templates`
  * soundboard: `/soundboard`
  * custom invite link: `/vanity-url`
  * Apps - integrations: `/integrations`
  * Apps - app directory: `/app-directory` (empty page)
  * Moderation - safety setup: `/safety`
  * Moderation - audit log: `/audit-log`
  * Moderation - bans: `/bans`
  * Community - overview: `/community`
  * Community - onboarding: `/onboarding`
  * Community - server insights: `/analytics`
  * Community - partner programme: `/partner`
  * Community - discovery: `/discovery`
  * Community - server web page `/discovery-landing-page`
  * Community - welcome screen: `/community-welcome`
  * Monetization - Server subscriptions: `/role-subscriptions`
  * Server boost status: `/guild-premium`
  * User managament - members: `/members`
  * User managament - invites: `/instant-invites`
  * Delete: `/delete`

User:

* user profile: `discord://-/users/<user_id>`

Guilds and DMs:

* dm channel: `discord://-/channels/@me/<channel_id>`
* dm message: `discord://-/channels/@me/<channel_id>/<message_id>`
* favorites: `discord://-/channels/@favorites`
* favorites channel: `discord://-/channels/@favorites/<channel_id>`
* guild: `discord://-/channels/<guild_id>`
* guild channel: `discord://-/channels/<guild_id>/<channel_id>`
* guild browse channels: `discord://channels/<guild_id>/channel-browser`
* guild customize (onboarding): `discord://channels/<guild_id>/customize-community` 
* guild server guide channel: `discord://-/channels/<guild_id>/@home`
* guild event: `discord://-/events/<guild_id>/<event_id>`
* guild message: `discord://-/channels/<guild_id>/<channel_id>/<message_id>`
* guild member safety: `discord://-/channels/<guild_id>/member-safety`
* guild membership screening: `discord://-/member-verification/<guild_id>`
* guild role subscriptions: `discord://-/channels/<guild_id>/role-subscriptions`
* hub membership screening: `discord://-/member-verification-for-hub/<hub_id>`

Library:

* library: `discord://-/library/`
* library inventory: `discord://-/library/inventory`
* library item actions: `discord://-/library/<sku_id>/<action_name>`
  * with `action_name`:
    * Launch: `launch`
* library settings: `discord://-/library/settings/`
* store page: `discord://-/store/skus/<sku_id>`
* store page: `discord://-/store/applications/<application_id>`

Account:

* login: `discord://-/login` (options: `?redirect_to=`)
* register: `discord://-/register` (options: `?redirect_to=`)
* reset: `discord://-/reset`
* restore: `discord://-/restore`

Events:

If an event is over, the link might not work anymore

* snowsgiving (Discord's yearly event in december): `discord://-/snowsgiving`
* 8th birthday: `discord://-/activities`

<!-- Old routes -->
<!-- * discovery - stages: `discord://-/discovery` -->
<!-- * guild subscription plans: `discord://-/guilds/<guild_id>/premium-guild-subscriptions` -->