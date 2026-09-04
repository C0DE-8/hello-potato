import './MobileFrame.css'

function MobileFrame({ children }) {
  return (
    <div className="mobile-frame">
      <div className="status-bar">
        <span>9:41</span>
        <span>▮▮ Wi-Fi ▰</span>
      </div>
      {children}
      <div className="home-indicator" />
    </div>
  )
}

export default MobileFrame
