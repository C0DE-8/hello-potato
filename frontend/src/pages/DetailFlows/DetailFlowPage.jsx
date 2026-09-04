import {
  ArrowLeft,
  BellOff,
  Camera,
  Check,
  Database,
  Eye,
  FileQuestion,
  ImagePlus,
  KeyRound,
  MessageCircle,
  Mic,
  Palette,
  Phone,
  Search,
  Star,
  ToggleLeft,
  UsersRound,
  Video,
  X,
} from 'lucide-react'
import Avatar from '../../components/Avatar/Avatar'
import './DetailFlowPage.css'

const settingsFlows = {
  account: {
    title: 'Account',
    rows: [
      { icon: KeyRound, label: 'Security Notifications', value: 'On' },
      { icon: Phone, label: 'Phone Number', value: '+234 801 234 5678' },
      { icon: UsersRound, label: 'Linked Devices', value: '1 active session' },
    ],
  },
  privacy: {
    title: 'Privacy',
    rows: [
      { icon: Eye, label: 'Last Seen and Online', value: 'My contacts' },
      { icon: ImagePlus, label: 'Profile Photo', value: 'Everyone' },
      { icon: MessageCircle, label: 'Groups', value: 'My contacts' },
      { icon: ToggleLeft, label: 'Read Receipts', value: 'On' },
    ],
  },
  'chat-settings': {
    title: 'Chats',
    rows: [
      { icon: ImagePlus, label: 'Chat Wallpaper', value: 'Default' },
      { icon: MessageCircle, label: 'Enter Is Send', value: 'Off' },
      { icon: Database, label: 'Chat Backup', value: 'Not connected' },
    ],
  },
  notifications: {
    title: 'Notifications',
    rows: [
      { icon: MessageCircle, label: 'Message Notifications', value: 'On' },
      { icon: UsersRound, label: 'Group Notifications', value: 'On' },
      { icon: Phone, label: 'Call Ringtone', value: 'Default' },
    ],
  },
  storage: {
    title: 'Storage and Data',
    rows: [
      { icon: Database, label: 'Manage Storage', value: '267 MB used' },
      { icon: ImagePlus, label: 'Media Auto-download', value: 'Wi-Fi only' },
    ],
  },
  help: {
    title: 'Help',
    rows: [
      { icon: FileQuestion, label: 'Help Center', value: 'FAQs and support' },
      { icon: MessageCircle, label: 'Contact Us', value: 'Tell us what happened' },
    ],
  },
  invite: {
    title: 'Invite a Friend',
    rows: [
      { icon: MessageCircle, label: 'Share Invite Link', value: 'hellopotato.app/invite' },
      { icon: UsersRound, label: 'Invite Contacts', value: 'Choose people' },
    ],
  },
}

function DetailFlowPage({ flow, chats, activeChat, user, onBack, onOpenFlow }) {
  if (flow?.type === 'add-story') {
    return (
      <DetailFrame title="Add Story" onBack={onBack}>
        <section className="story-create">
          <Avatar src={user?.avatar ?? chats[0]?.avatar} name={user?.name ?? 'You'} size="lg" active />
          <h1>My Story</h1>
          <p>Share a photo, video, or quick update.</p>
          <div className="detail-actions">
            <button type="button">
              <Camera size={18} />
              <span>Camera</span>
            </button>
            <button type="button">
              <ImagePlus size={18} />
              <span>Gallery</span>
            </button>
            <button type="button">
              <MessageCircle size={18} />
              <span>Text</span>
            </button>
          </div>
        </section>
      </DetailFrame>
    )
  }

  if (settingsFlows[flow?.type]) {
    const settingsFlow = settingsFlows[flow.type]

    return (
      <DetailFrame title={settingsFlow.title} onBack={onBack}>
        <div className="detail-list">
          {settingsFlow.rows.map((row) => (
            <DetailRow icon={row.icon} label={row.label} value={row.value} key={row.label} />
          ))}
        </div>
      </DetailFrame>
    )
  }

  if (flow?.type === 'contact' && activeChat) {
    return (
      <DetailFrame title={activeChat.name} onBack={onBack}>
        <section className="contact-hero">
          <Avatar src={activeChat.avatar} name={activeChat.name} size="lg" active={activeChat.favorite} />
          <h1>{activeChat.name}</h1>
          <p>{activeChat.status}</p>
          <div className="detail-actions">
            <button type="button">
              <MessageCircle size={18} />
              <span>Message</span>
            </button>
            <button type="button" onClick={() => onOpenFlow({ type: 'voice-call' })}>
              <Phone size={18} />
              <span>Call</span>
            </button>
            <button type="button" onClick={() => onOpenFlow({ type: 'video-call' })}>
              <Video size={18} />
              <span>Video</span>
            </button>
          </div>
        </section>
        <div className="detail-list">
          <DetailRow icon={MessageCircle} label="About" value="Good vibes only" />
          <DetailRow icon={Phone} label="Phone" value="+234 801 234 5678" />
          <DetailRow icon={Star} label="Starred Messages" value="12 items" />
          <DetailRow icon={BellOff} label="Mute Notifications" value="Off" />
        </div>
      </DetailFrame>
    )
  }

  if (flow?.type === 'new-chat' || flow?.type === 'new-group') {
    const isGroup = flow.type === 'new-group'

    return (
      <DetailFrame title={isGroup ? 'New Group' : 'New Chat'} onBack={onBack}>
        <label className="detail-search">
          <Search size={16} />
          <input placeholder="Search people..." />
        </label>
        {isGroup && (
          <section className="group-card">
            <div className="group-photo">
              <UsersRound size={32} />
              <Camera size={16} />
            </div>
            <input defaultValue="Dev Squad" aria-label="Group name" />
          </section>
        )}
        <div className="detail-list">
          {!isGroup && (
            <DetailRow
              icon={UsersRound}
              label="New Group"
              value="Start a conversation with friends"
              onClick={() => onOpenFlow({ type: 'new-group' })}
            />
          )}
          {chats.slice(0, 5).map((chat, index) => (
            <button className="select-row" key={chat.id} type="button">
              <Avatar src={chat.avatar} name={chat.name} />
              <span>
                <strong>{chat.name}</strong>
                <small>{chat.status}</small>
              </span>
              {isGroup && index < 4 && <Check size={18} />}
            </button>
          ))}
        </div>
      </DetailFrame>
    )
  }

  if (flow?.type === 'appearance') {
    return (
      <DetailFrame title="Appearance" onBack={onBack}>
        <section className="theme-grid">
          {['Light', 'Dark', 'System'].map((theme) => (
            <button className={theme === 'Dark' ? 'is-active' : ''} key={theme} type="button">
              <span />
              <strong>{theme}</strong>
            </button>
          ))}
        </section>
        <div className="detail-list">
          <DetailRow icon={Palette} label="Accent Color" value="Hellopotato Green" />
          <DetailRow icon={MessageCircle} label="Message Bubbles" value="Default" />
          <DetailRow icon={Check} label="Font Size" value="Medium" />
        </div>
      </DetailFrame>
    )
  }

  if (flow?.type === 'voice-call' || flow?.type === 'video-call') {
    const isVideo = flow.type === 'video-call'

    return (
      <main className={`call-screen ${isVideo ? 'call-screen--video' : ''}`}>
        <button className="call-screen__back" type="button" onClick={onBack} aria-label="Close call">
          <X size={20} />
        </button>
        <Avatar src={activeChat.avatar} name={activeChat.name} size="lg" />
        <h1>{activeChat.name}</h1>
        <p>00:24</p>
        <div className="call-controls">
          <button type="button">
            <Mic size={20} />
            <span>Mute</span>
          </button>
          <button type="button">
            <Video size={20} />
            <span>Video</span>
          </button>
          <button className="is-danger" type="button" onClick={onBack}>
            <Phone size={22} />
          </button>
        </div>
      </main>
    )
  }
}

function DetailFrame({ title, onBack, children }) {
  return (
    <main className="detail-flow">
      <header className="detail-flow__header">
        <button type="button" onClick={onBack} aria-label="Go back">
          <ArrowLeft size={20} />
        </button>
        <h1>{title}</h1>
      </header>
      {children}
    </main>
  )
}

function DetailRow({ icon: Icon, label, value, onClick }) {
  return (
    <button className="detail-row" type="button" onClick={onClick}>
      <Icon size={18} />
      <span>
        <strong>{label}</strong>
        <small>{value}</small>
      </span>
    </button>
  )
}

export default DetailFlowPage
