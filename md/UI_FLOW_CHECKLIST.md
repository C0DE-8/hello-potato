# Hellopotato UI Flow Checklist

## App Entry
- [x] Splash screen with logo, tagline, progress hint.
- [x] Welcome screen with one "Get Started" action.
- [x] Phone-only entry, no email or password.
- [x] Phone number entry with country selector.
- [x] OTP verification with resend timer.
- [x] Profile setup with avatar, name, and short status.

## Main Tabs
- [ ] Chats: search, filters, archived row, unread badges, floating new chat action.
- [ ] Chat screen: contact header, message bubbles, voice note, media preview, composer.
- [ ] Stories/Status: add story, my story, recent updates, viewed updates.
- [ ] Calls: all/missed filter, voice/video actions, missed/outgoing labels.
- [ ] Explore/More: find people, create community, channels, saved messages.
- [ ] Settings: profile summary, account, privacy, chats, notifications, storage, appearance, help.

## Detail Flows
- [ ] Contact info with message/call/video actions.
- [ ] New chat and new group member selection.
- [ ] Voice call screen.
- [ ] Video call screen.
- [ ] Appearance settings with light/dark/system and accent color.

## Frontend Build Order
- [x] Create organized folders: `api`, `components`, `data`, `pages`, `styles`, `assets`.
- [x] Add reusable app shell and navigation.
- [x] Add first-pass responsive webapp UI using the existing brand direction.
- [ ] Wire real backend auth and chat APIs.
- [ ] Add route-based navigation when flows become independent pages.
- [ ] Add Capacitor project and native-safe layout checks.
- [ ] Add tests for core UI states and API adapters.
