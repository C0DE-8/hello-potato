import ChatList from '../../components/ChatList/ChatList'
import ChatWindow from '../../components/ChatWindow/ChatWindow'
import './ChatsPage.css'

function ChatsPage({ chats, messages, activeChatId, onSelectChat }) {
  const activeChat = chats.find((chat) => chat.id === activeChatId) ?? chats[0]

  return (
    <main className="chats-page">
      <ChatList chats={chats} activeChatId={activeChat.id} onSelectChat={onSelectChat} />
      <ChatWindow chat={activeChat} messages={messages} />
    </main>
  )
}

export default ChatsPage
