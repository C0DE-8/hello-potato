import { useState } from 'react'
import ChatList from '../../components/ChatList/ChatList'
import ChatWindow from '../../components/ChatWindow/ChatWindow'
import './ChatsPage.css'

function ChatsPage({ chats, messages, activeChatId, onSelectChat }) {
  const activeChat = chats.find((chat) => chat.id === activeChatId) ?? chats[0]
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleSelectChat = (chatId) => {
    onSelectChat(chatId)
    setIsChatOpen(true)
  }

  if (!activeChat) {
    return <main className="chats-page chats-page--loading">Loading chats...</main>
  }

  return (
    <main className={`chats-page ${isChatOpen ? 'is-chat-open' : ''}`}>
      <ChatList chats={chats} activeChatId={activeChat.id} onSelectChat={handleSelectChat} />
      <ChatWindow chat={activeChat} messages={messages} onBack={() => setIsChatOpen(false)} />
    </main>
  )
}

export default ChatsPage
