import { Bell, ChevronRight, Lock, MessageCircle, Palette, QrCode, Shield, UserRound } from 'lucide-react'
import Avatar from '../Avatar/Avatar'
import './ProfilePanel.css'

const rows = [
  { label: 'Account', icon: UserRound },
  { label: 'Privacy', icon: Lock },
  { label: 'Chats', icon: MessageCircle },
  { label: 'Notifications', icon: Bell },
  { label: 'Appearance', icon: Palette },
  { label: 'Storage and Data', icon: Shield },
]

function ProfilePanel({ user }) {
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
        {rows.map(({ label, icon: Icon }) => (
          <button key={label} type="button">
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
