import { useState } from 'react'
import { Phone, Video } from 'lucide-react'
import Avatar from '../../components/Avatar/Avatar'
import './CallsPage.css'

function CallsPage({ calls, onSelectChat, onOpenFlow }) {
  const [filter, setFilter] = useState('All')
  const visibleCalls = filter === 'Missed' ? calls.filter((call) => call.type === 'Missed') : calls

  return (
    <main className="stack-page">
      <header className="page-header">
        <h1>Calls</h1>
        <button type="button" aria-label="New call">
          <Phone size={18} />
        </button>
      </header>
      <div className="segmented">
        {['All', 'Missed'].map((label) => (
          <button
            className={filter === label ? 'is-active' : ''}
            key={label}
            type="button"
            onClick={() => setFilter(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="list-card">
        {visibleCalls.map((call) => (
          <article className="call-row" key={call.id}>
            <Avatar src={call.contact.avatar} name={call.contact.name} />
            <span>
              <strong>{call.contact.name}</strong>
              <small className={call.type === 'Missed' ? 'is-missed' : ''}>
                {call.type} · {call.time}
              </small>
            </span>
            <button
              type="button"
              aria-label={`${call.video ? 'Video' : 'Voice'} call ${call.contact.name}`}
              onClick={() => {
                onSelectChat(call.contact.id)
                onOpenFlow({ type: call.video ? 'video-call' : 'voice-call' })
              }}
            >
              {call.video ? <Video size={18} /> : <Phone size={18} />}
            </button>
          </article>
        ))}
        {visibleCalls.length === 0 && <p className="empty-state">No {filter.toLowerCase()} calls yet.</p>}
      </div>
    </main>
  )
}

export default CallsPage
