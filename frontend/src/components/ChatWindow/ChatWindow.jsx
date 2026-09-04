import { ArrowLeft, MoreVertical, Phone, Video } from 'lucide-react'
import Avatar from '../Avatar/Avatar'
import Composer from '../Composer/Composer'
import './ChatWindow.css'

function ChatWindow({ chat, messages, onBack }) {
  return (
    <section className="chat-window">
      <header className="chat-window__header">
        <button className="chat-window__back" type="button" onClick={onBack} aria-label="Back to chats">
          <ArrowLeft size={19} />
        </button>
        <Avatar src={chat.avatar} name={chat.name} size="sm" />
        <div>
          <strong>{chat.name}</strong>
          <span>{chat.status}</span>
        </div>
        <div className="chat-window__actions">
          <button type="button" aria-label="Voice call">
            <Phone size={18} />
          </button>
          <button type="button" aria-label="Video call">
            <Video size={18} />
          </button>
          <button type="button" aria-label="More">
            <MoreVertical size={18} />
          </button>
        </div>
      </header>

      <div className="message-stack">
        {messages.map((message) => (
          <article
            className={`message-bubble message-bubble--${message.from === 'me' ? 'sent' : 'received'} ${
              message.from === 'voice' ? 'message-bubble--voice' : ''
            } ${message.from === 'media' ? 'message-bubble--media' : ''}`}
            key={message.id}
          >
            {message.from === 'voice' && <span className="play-dot">▶</span>}
            {message.from === 'media' && <span className="media-thumb" />}
            <p>{message.body}</p>
            <time>{message.time}</time>
          </article>
        ))}
      </div>

      <Composer />
    </section>
  )
}

export default ChatWindow
