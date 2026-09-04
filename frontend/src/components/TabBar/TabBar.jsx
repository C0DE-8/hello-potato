import { Compass, MessageCircle, Phone, Settings, Sparkles } from 'lucide-react'
import './TabBar.css'

const tabs = [
  { id: 'chats', label: 'Chats', icon: MessageCircle },
  { id: 'calls', label: 'Calls', icon: Phone },
  { id: 'stories', label: 'Stories', icon: Sparkles },
  { id: 'explore', label: 'Explore', icon: Compass },
  { id: 'settings', label: 'Settings', icon: Settings },
]

function TabBar({ activeTab, onTabChange }) {
  return (
    <nav className="tab-bar" aria-label="Primary">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          className={`tab-bar__item ${activeTab === id ? 'is-active' : ''}`}
          key={id}
          type="button"
          onClick={() => onTabChange(id)}
          aria-label={label}
        >
          <Icon size={18} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  )
}

export default TabBar
