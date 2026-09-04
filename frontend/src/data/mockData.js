import potatoAvatar from '../assets/brand/favicon.jpg'

export const currentUser = {
  name: 'Habibi',
  handle: 'Always building something better.',
  avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
  phone: '+234 801 234 5678',
}

export const contacts = [
  {
    id: 'jenny',
    name: 'Jenny Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80',
    status: 'Online',
    lastMessage: 'Typing...',
    time: '9:41 AM',
    unread: 2,
    favorite: true,
  },
  {
    id: 'dev-squad',
    name: 'Dev Squad',
    avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=160&q=80',
    status: 'Mike: Let us ship it',
    lastMessage: 'Mike: Let us ship it 🚀',
    time: '8:20 AM',
    unread: 12,
  },
  {
    id: 'bestie',
    name: 'Bestie 💛',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
    status: 'You: 😄',
    lastMessage: 'You: 😄',
    time: 'Yesterday',
    unread: 0,
    favorite: true,
  },
  {
    id: 'classmates',
    name: 'Classmates',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&q=80',
    status: 'Tomi: See you all later',
    lastMessage: 'Tomi: See you all later',
    time: 'Yesterday',
    unread: 3,
  },
  {
    id: 'mum',
    name: 'Mum',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80',
    status: 'Call me when you are free',
    lastMessage: 'Call me when you are free',
    time: 'Mon',
    unread: 0,
  },
  {
    id: 'potato-team',
    name: 'Hellopotato Team',
    avatar: potatoAvatar,
    status: 'Welcome to Hellopotato!',
    lastMessage: 'Welcome to Hellopotato! 👋',
    time: 'Sun',
    unread: 0,
  },
]

export const messages = [
  { id: 1, from: 'jenny', body: 'Hey! 👋', time: '9:40 AM' },
  { id: 2, from: 'jenny', body: 'How is your day going?', time: '9:41 AM' },
  { id: 3, from: 'me', body: 'Pretty good! Working on some new stuff.', time: '9:41 AM' },
  { id: 4, from: 'jenny', body: "Nice! Can't wait to see it 🔥", time: '9:42 AM' },
  { id: 5, from: 'voice', body: '0:12', time: '9:43 AM' },
  { id: 6, from: 'media', body: 'Perfect vibe today ☕', time: '9:44 AM' },
  { id: 7, from: 'me', body: 'Love this! 😍', time: '9:45 AM' },
]

export const stories = [
  { id: 'mine', name: 'My Story', avatar: currentUser.avatar, age: 'Add story', active: true },
  { id: 'jenny', name: 'Jenny', avatar: contacts[0].avatar, age: '2 minutes ago', active: true },
  { id: 'bestie', name: 'Bestie 💛', avatar: contacts[2].avatar, age: '12 minutes ago', active: true },
  { id: 'mum', name: 'Mum', avatar: contacts[4].avatar, age: 'Today, 8:12 AM', active: false },
]

export const calls = [
  { id: 1, contact: contacts[0], type: 'Outgoing', time: '10:24 AM', video: false },
  { id: 2, contact: contacts[1], type: 'Incoming', time: '9:12 AM', video: true },
  { id: 3, contact: contacts[4], type: 'Missed', time: 'Yesterday', video: false },
  { id: 4, contact: contacts[2], type: 'Incoming', time: 'Mon', video: false },
]
