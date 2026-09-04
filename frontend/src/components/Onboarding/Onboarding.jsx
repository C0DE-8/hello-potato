import { ArrowLeft, Camera, Check, UserRound } from 'lucide-react'
import { useEffect, useState } from 'react'
import BrandMark from '../BrandMark/BrandMark'
import './Onboarding.css'

function Onboarding({ onComplete }) {
  const [step, setStep] = useState('splash')
  const [profileName, setProfileName] = useState('Habibi')

  useEffect(() => {
    if (step !== 'splash') {
      return undefined
    }

    const timer = window.setTimeout(() => setStep('welcome'), 1100)
    return () => window.clearTimeout(timer)
  }, [step])

  const goBack = () => {
    const order = ['welcome', 'phone', 'otp', 'profile']
    const index = order.indexOf(step)

    if (index > 0) {
      setStep(order[index - 1])
    }
  }

  if (step === 'splash') {
    return (
      <main className="entry-screen entry-screen--splash">
        <div className="entry-logo entry-logo--large">
          <BrandMark compact />
        </div>
        <section className="entry-copy">
          <h1>Hellopotato</h1>
          <p>Chat More. Be You.</p>
        </section>
        <div className="entry-progress">
          <span />
        </div>
        <small>A brighter way to stay close</small>
      </main>
    )
  }

  if (step === 'welcome') {
    return (
      <main className="entry-screen entry-screen--welcome">
        <div className="entry-logo">
          <BrandMark compact />
        </div>
        <section className="entry-copy">
          <h1>Hellopotato</h1>
          <p>More than chat. Messages, calls, stories and real connections in one friendly space.</p>
        </section>
        <div className="entry-mascot">
          <BrandMark compact />
        </div>
        <div className="entry-dots" aria-hidden="true">
          <span className="is-active" />
          <span />
          <span />
        </div>
        <button className="entry-primary" type="button" onClick={() => setStep('phone')}>
          Get Started
        </button>
        <button className="entry-link" type="button" onClick={() => setStep('phone')}>
          I already have an account
        </button>
      </main>
    )
  }

  if (step === 'phone') {
    return (
      <main className="entry-screen">
        <BackButton onBack={goBack} />
        <div className="entry-logo entry-logo--small">
          <BrandMark compact />
        </div>
        <section className="entry-copy">
          <h1>Enter Your Number</h1>
          <p>We&apos;ll send a verification code to this number.</p>
        </section>
        <form className="entry-form" onSubmit={(event) => event.preventDefault()}>
          <label className="phone-field">
            <span>🇳🇬 +234</span>
            <input inputMode="tel" defaultValue="801 234 5678" aria-label="Phone number" />
          </label>
          <button className="entry-primary" type="button" onClick={() => setStep('otp')}>
            Continue
          </button>
        </form>
        <NumberPad />
      </main>
    )
  }

  if (step === 'otp') {
    return (
      <main className="entry-screen">
        <BackButton onBack={goBack} />
        <div className="entry-logo entry-logo--small">
          <BrandMark compact />
        </div>
        <section className="entry-copy">
          <h1>Verify Your Number</h1>
          <p>We&apos;ve sent a 6-digit code to +234 801 234 5678</p>
        </section>
        <div className="otp-row" aria-label="Verification code">
          {['4', '7', '2', '9', '1', '0'].map((digit, index) => (
            <span key={`${digit}-${index}`}>{digit}</span>
          ))}
        </div>
        <p className="entry-help">Didn&apos;t receive the code? Resend in 00:28</p>
        <button className="entry-primary" type="button" onClick={() => setStep('profile')}>
          Verify
        </button>
        <NumberPad />
      </main>
    )
  }

  return (
    <main className="entry-screen">
      <BackButton onBack={goBack} />
      <div className="entry-logo entry-logo--small">
        <BrandMark compact />
      </div>
      <section className="entry-copy">
        <h1>Complete Your Profile</h1>
        <p>Add a name and photo so friends can recognize you.</p>
      </section>
      <div className="profile-photo">
        <BrandMark compact />
        <button type="button" aria-label="Add profile photo">
          <Camera size={16} />
        </button>
      </div>
      <form className="entry-form" onSubmit={(event) => event.preventDefault()}>
        <Field
          icon={UserRound}
          label="Display name"
          type="text"
          value={profileName}
          onChange={(event) => setProfileName(event.target.value)}
        />
        <label className="profile-status">
          <Check size={16} />
          <input defaultValue="Always building something better." aria-label="Profile status" />
        </label>
      </form>
      <button className="entry-primary" type="button" onClick={() => onComplete()}>
        Continue
      </button>
    </main>
  )
}

function BackButton({ onBack }) {
  return (
    <button className="entry-back" type="button" onClick={onBack} aria-label="Go back">
      <ArrowLeft size={20} />
    </button>
  )
}

function Field({ icon: Icon, trailingIcon: TrailingIcon, label, ...inputProps }) {
  return (
    <label className="entry-field">
      <Icon size={17} />
      <input placeholder={label} aria-label={label} {...inputProps} />
      {TrailingIcon && <TrailingIcon size={17} />}
    </label>
  )
}

function NumberPad() {
  return (
    <div className="number-pad" aria-hidden="true">
      {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'].map((key, index) => (
        <span key={`${key}-${index}`}>{key}</span>
      ))}
    </div>
  )
}

export default Onboarding
