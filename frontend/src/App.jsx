import { useEffect, useState } from 'react'
import { chatApi } from './api/chatApi'
import AppShell from './components/AppShell/AppShell'
import Onboarding from './components/Onboarding/Onboarding'
import CallsPage from './pages/Calls/CallsPage'
import ChatsPage from './pages/Chats/ChatsPage'
import ExplorePage from './pages/Explore/ExplorePage'
import DetailFlowPage from './pages/DetailFlows/DetailFlowPage'
import SettingsPage from './pages/Settings/SettingsPage'
import StoriesPage from './pages/Stories/StoriesPage'

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true)
  const [activeTab, setActiveTab] = useState('chats')
  const [activeChatId, setActiveChatId] = useState('jenny')
  const [detailFlow, setDetailFlow] = useState(null)
  const [appData, setAppData] = useState({
    user: null,
    chats: [],
    messages: [],
    stories: [],
    calls: [],
  })

  useEffect(() => {
    let isMounted = true

    Promise.all([
      chatApi.getSession(),
      chatApi.getChats(),
      chatApi.getMessages(),
      chatApi.getStories(),
      chatApi.getCalls(),
    ]).then(([user, chats, messages, stories, calls]) => {
      if (isMounted) {
        setAppData({ user, chats, messages, stories, calls })
      }
    })

    return () => {
      isMounted = false
    }
  }, [])

  if (showOnboarding) {
    return (
      <AppShell activeTab={activeTab} onTabChange={setActiveTab} showTabs={false}>
        <Onboarding onComplete={() => setShowOnboarding(false)} />
      </AppShell>
    )
  }

  const activeChat = appData.chats.find((chat) => chat.id === activeChatId) ?? appData.chats[0]

  return (
    <AppShell activeTab={activeTab} onTabChange={setActiveTab} showTabs={!detailFlow}>
      {detailFlow && (
        <DetailFlowPage
          flow={detailFlow}
          chats={appData.chats}
          activeChat={activeChat}
          user={appData.user}
          onBack={() => setDetailFlow(null)}
          onOpenFlow={setDetailFlow}
        />
      )}
      {!detailFlow && activeTab === 'chats' && (
        <ChatsPage
          chats={appData.chats}
          messages={appData.messages}
          activeChatId={activeChatId}
          onSelectChat={setActiveChatId}
          onOpenFlow={setDetailFlow}
        />
      )}
      {!detailFlow && activeTab === 'calls' && (
        <CallsPage calls={appData.calls} onSelectChat={setActiveChatId} onOpenFlow={setDetailFlow} />
      )}
      {!detailFlow && activeTab === 'stories' && (
        <StoriesPage stories={appData.stories} onOpenFlow={setDetailFlow} />
      )}
      {!detailFlow && activeTab === 'explore' && <ExplorePage />}
      {!detailFlow && activeTab === 'settings' && appData.user && (
        <SettingsPage user={appData.user} onOpenFlow={setDetailFlow} />
      )}
    </AppShell>
  )
}

export default App
