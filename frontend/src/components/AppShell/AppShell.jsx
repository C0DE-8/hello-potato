import MobileFrame from '../MobileFrame/MobileFrame'
import TabBar from '../TabBar/TabBar'
import './AppShell.css'

function AppShell({ activeTab, onTabChange, showTabs = true, children }) {
  return (
    <div className="app-shell">
      <MobileFrame>
        <div className="app-shell__content">{children}</div>
        {showTabs && <TabBar activeTab={activeTab} onTabChange={onTabChange} />}
      </MobileFrame>
    </div>
  )
}

export default AppShell
