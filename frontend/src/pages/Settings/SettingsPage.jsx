import ProfilePanel from '../../components/ProfilePanel/ProfilePanel'

function SettingsPage({ user }) {
  return (
    <main className="stack-page">
      <header className="page-header">
        <h1>Settings</h1>
      </header>
      <ProfilePanel user={user} />
    </main>
  )
}

export default SettingsPage
