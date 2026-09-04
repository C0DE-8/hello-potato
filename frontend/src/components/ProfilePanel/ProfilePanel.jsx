import {
  Bell,
  ChevronRight,
  CircleHelp,
  Lock,
  MessageCircle,
  Palette,
  QrCode,
  Send,
  Shield,
  UserRound,
} from 'lucide-react'
import Avatar from '../Avatar/Avatar'
import './ProfilePanel.css'

const rows = [
  { label: 'Account', icon: UserRound, flow: 'account' },
  { label: 'Privacy', icon: Lock, flow: 'privacy' },
  { label: 'Chats', icon: MessageCircle, flow: 'chat-settings' },
  { label: 'Notifications', icon: Bell, flow: 'notifications' },
  { label: 'Appearance', icon: Palette, flow: 'appearance' },
  { label: 'Storage and Data', icon: Shield, flow: 'storage' },
  { label: 'Help', icon: CircleHelp, flow: 'help' },
  { label: 'Invite a Friend', icon: Send, flow: 'invite' },
]

function ProfilePanel({ user, onOpenFlow }) {
  return (
    <section className="profile-panel">
      <div className="profile-card">
        <Avatar src={user.avatar} name={user.name} />
        <span>
          <strong>{user.name}</strong>
          <small>{user.handle}</small>
        </span>
        <QrCode size={20} />
      </div>

      <div className="settings-list">
        {rows.map(({ label, icon: Icon, flow }) => (
          <button
            key={label}
            type="button"
            onClick={() => onOpenFlow({ type: flow })}
          >
            <Icon size={18} />
            <span>{label}</span>
            <ChevronRight size={16} />
          </button>
        ))}
      </div>
    </section>
  )
}

export default ProfilePanel
