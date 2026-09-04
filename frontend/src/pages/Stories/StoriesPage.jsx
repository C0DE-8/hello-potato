import { Plus } from 'lucide-react'
import Avatar from '../../components/Avatar/Avatar'
import './StoriesPage.css'

function StoriesPage({ stories }) {
  return (
    <main className="stack-page">
      <header className="page-header">
        <h1>Stories</h1>
        <button type="button" aria-label="Add story">
          <Plus size={18} />
        </button>
      </header>
      <div className="story-strip">
        {stories.map((story) => (
          <article key={story.id}>
            <Avatar src={story.avatar} name={story.name} active={story.active} />
            <strong>{story.name}</strong>
          </article>
        ))}
      </div>
      <h2>Recent Updates</h2>
      <div className="list-card">
        {stories.slice(1).map((story) => (
          <article className="story-row" key={story.id}>
            <Avatar src={story.avatar} name={story.name} active={story.active} />
            <span>
              <strong>{story.name}</strong>
              <small>{story.age}</small>
            </span>
          </article>
        ))}
      </div>
    </main>
  )
}

export default StoriesPage
