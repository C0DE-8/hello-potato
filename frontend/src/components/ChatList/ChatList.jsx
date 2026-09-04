import { Archive, Edit, Plus, Search } from 'lucide-react'
import Avatar from '../Avatar/Avatar'
import BrandMark from '../BrandMark/BrandMark'
import './ChatList.css'

const filters = ['All', 'Unread', 'Groups', 'Favorites']

function ChatList({ chats, activeChatId, onSelectChat }) {
  return (
    <section className="chat-list">
      <header className="chat-list__header">
        <BrandMark />
        <div className="icon-actions">
          <button type="button" aria-label="Search">
            <Search size={18} />
          </button>
          <button type="button" aria-label="New chat">
            <Edit size={18} />
          </button>
        </div>
      </header>

      <label className="search-field">
        <Search size={16} />
        <input type="search" placeholder="Search chats, people..." />
      </label>

      <div className="filters" role="list" aria-label="Chat filters">
        {filters.map((filter) => (
          <button className={filter === 'All' ? 'is-active' : ''} key={filter} type="button">
            {filter}
          </button>
        ))}
      </div>

      <div className="chat-list__items">
        {chats.map((chat) => (
          <button
            className={`chat-row ${activeChatId === chat.id ? 'is-active' : ''}`}
            key={chat.id}
            type="button"
            onClick={() => onSelectChat(chat.id)}
          >
            <Avatar src={chat.avatar} name={chat.name} active={chat.favorite} />
            <span className="chat-row__copy">
              <strong>{chat.name}</strong>
              <small>{chat.lastMessage}</small>
            </span>
            <span className="chat-row__meta">
              <time>{chat.time}</time>
              {chat.unread > 0 && <em>{chat.unread}</em>}
            </span>
          </button>
        ))}
      </div>

      <button className="archive-row" type="button">
        <Archive size={18} />
        Archived
      </button>

      <button className="floating-action" type="button" aria-label="Start new chat">
        <Plus size={24} />
      </button>
    </section>
  )
}

export default ChatList
