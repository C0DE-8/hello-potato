import ProfilePanel from '../../components/ProfilePanel/ProfilePanel'

function SettingsPage({ user, onOpenFlow }) {
  return (
    <main className="stack-page">
      <header className="page-header">
        <h1>Settings</h1>
      </header>
      <ProfilePanel user={user} onOpenFlow={onOpenFlow} />
    </main>
  )
}

export default SettingsPage
