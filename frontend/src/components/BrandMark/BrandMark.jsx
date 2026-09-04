import logo from '../../assets/brand/favicon.jpg'
import './BrandMark.css'

function BrandMark({ compact = false }) {
  return (
    <div className={`brand-mark ${compact ? 'brand-mark--compact' : ''}`}>
      <img src={logo} alt="Hellopotato" />
      {!compact && <span>Hellopotato</span>}
    </div>
  )
}

export default BrandMark
