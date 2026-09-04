import './Avatar.css'

function Avatar({ src, name, size = 'md', active = false }) {
  return (
    <span className={`avatar avatar--${size} ${active ? 'avatar--active' : ''}`}>
      <img src={src} alt={`${name} avatar`} />
    </span>
  )
}

export default Avatar
