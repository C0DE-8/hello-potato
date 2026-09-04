# Hellopotato UI Flow Checklist

## App Entry
- [x] Splash screen with logo, tagline, progress hint.
- [x] Welcome screen with one "Get Started" action.
- [x] Phone-only entry, no email or password.
- [x] Phone number entry with country selector.
- [x] OTP verification with resend timer.
- [x] Profile setup with avatar, name, and short status.

## Main Tabs
- [x] Chats: search, filters, archived row, unread badges, floating new chat action.
- [x] Chat screen: contact header, message bubbles, voice note, media preview, composer.
- [x] Stories/Status: add story, my story, recent updates, viewed updates.
- [x] Calls: all/missed filter, voice/video actions, missed/outgoing labels.
- [x] Explore/More: find people, create community, channels, saved messages.
- [x] Settings: profile summary, account, privacy, chats, notifications, storage, appearance, help.

## Detail Flows
- [x] Contact info with message/call/video actions.
- [x] New chat and new group member selection.
- [x] Voice call screen.
- [x] Video call screen.
- [x] Appearance settings with light/dark/system and accent color.
- [x] Add story screen from the first story item.
- [x] Account settings detail.
- [x] Privacy settings detail.
- [x] Chat settings detail.
- [x] Notification settings detail.
- [x] Storage, Help, and Invite detail screens.

## Frontend Build Order
- [x] Create organized folders: `api`, `components`, `data`, `pages`, `styles`, `assets`.
- [x] Add reusable app shell and navigation.
- [x] Add first-pass responsive webapp UI using the existing brand direction.
- [ ] Wire real backend auth and chat APIs.
- [ ] Add route-based navigation when flows become independent pages.
- [ ] Add Capacitor project and native-safe layout checks.
- [ ] Add tests for core UI states and API adapters.
