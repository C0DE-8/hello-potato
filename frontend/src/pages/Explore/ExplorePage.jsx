import { Bookmark, MessageSquare, Search, UsersRound } from 'lucide-react'
import BrandMark from '../../components/BrandMark/BrandMark'
import './ExplorePage.css'

const actions = [
  { label: 'Find People', copy: 'Discover new friends', icon: Search },
  { label: 'Create Community', copy: 'Bring people together', icon: UsersRound },
  { label: 'Channels', copy: 'Follow updates', icon: MessageSquare },
  { label: 'Saved Messages', copy: 'Keep what matters', icon: Bookmark },
]

function ExplorePage() {
  return (
    <main className="stack-page explore-page">
      <section className="explore-hero">
        <BrandMark compact />
        <h1>A more connected you.</h1>
        <p>Chat. Call. Share. Everywhere.</p>
      </section>
      <div className="action-grid">
        {actions.map(({ label, copy, icon: Icon }) => (
          <button key={label} type="button">
            <Icon size={22} />
            <strong>{label}</strong>
            <small>{copy}</small>
          </button>
        ))}
      </div>
    </main>
  )
}

export default ExplorePage
