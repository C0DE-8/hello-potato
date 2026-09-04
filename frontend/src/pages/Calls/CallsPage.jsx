import { Phone, Video } from 'lucide-react'
import Avatar from '../../components/Avatar/Avatar'
import './CallsPage.css'

function CallsPage({ calls }) {
  return (
    <main className="stack-page">
      <header className="page-header">
        <h1>Calls</h1>
        <button type="button" aria-label="New call">
          <Phone size={18} />
        </button>
      </header>
      <div className="segmented">
        <button className="is-active" type="button">All</button>
        <button type="button">Missed</button>
      </div>
      <div className="list-card">
        {calls.map((call) => (
          <article className="call-row" key={call.id}>
            <Avatar src={call.contact.avatar} name={call.contact.name} />
            <span>
              <strong>{call.contact.name}</strong>
              <small className={call.type === 'Missed' ? 'is-missed' : ''}>
                {call.type} · {call.time}
              </small>
            </span>
            <button type="button" aria-label={`${call.video ? 'Video' : 'Voice'} call ${call.contact.name}`}>
              {call.video ? <Video size={18} /> : <Phone size={18} />}
            </button>
          </article>
        ))}
      </div>
    </main>
  )
}

export default CallsPage
