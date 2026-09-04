import { Mic, Paperclip, Smile } from 'lucide-react'
import './Composer.css'

function Composer() {
  return (
    <form className="composer">
      <button type="button" aria-label="Emoji">
        <Smile size={18} />
      </button>
      <input type="text" placeholder="Type a message..." />
      <button type="button" aria-label="Attach file">
        <Paperclip size={18} />
      </button>
      <button className="composer__send" type="button" aria-label="Voice message">
        <Mic size={18} />
      </button>
    </form>
  )
}

export default Composer
