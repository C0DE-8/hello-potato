import { Plus } from 'lucide-react'
import Avatar from '../../components/Avatar/Avatar'
import './StoriesPage.css'

function StoriesPage({ stories, onOpenFlow }) {
  const recentStories = stories.slice(1).filter((story) => !story.viewed)
  const viewedStories = stories.filter((story) => story.viewed)

  return (
    <main className="stack-page">
      <header className="page-header">
        <h1>Stories</h1>
        <button type="button" aria-label="Add story" onClick={() => onOpenFlow({ type: 'add-story' })}>
          <Plus size={18} />
        </button>
      </header>
      <div className="story-strip">
        {stories.map((story, index) => (
          <button
            className={index === 0 ? 'story-card story-card--add' : 'story-card'}
            key={story.id}
            type="button"
            onClick={() => {
              if (index === 0) {
                onOpenFlow({ type: 'add-story' })
              }
            }}
          >
            <Avatar src={story.avatar} name={story.name} active={story.active} />
            {index === 0 && <span className="story-card__plus"><Plus size={13} /></span>}
            <strong>{story.name}</strong>
          </button>
        ))}
      </div>
      <h2>Recent Updates</h2>
      <div className="list-card">
        {recentStories.map((story) => (
          <article className="story-row" key={story.id}>
            <Avatar src={story.avatar} name={story.name} active={story.active} />
            <span>
              <strong>{story.name}</strong>
              <small>{story.age}</small>
            </span>
          </article>
        ))}
      </div>
      <h2>Viewed Updates</h2>
      <div className="list-card">
        {viewedStories.map((story) => (
          <article className="story-row story-row--viewed" key={story.id}>
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
