import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { usePlace } from '../context/PlaceContext'
import { useI18n } from '../i18n'
import { marketFor, formatMoneyCompact } from '../lib/market'
import './Settings.css'

// The old fixed CAD ladder was meaningless outside BC, so the options are cut
// from the market the user is actually browsing, the way FilterBar does it.
function priceSteps(market) {
  const base = 400000 * market.level
  return [0.5, 0.75, 1.25, 2, 3, 5].map(m => {
    const n = base * m
    const mag = 10 ** Math.floor(Math.log10(n))
    return Math.round(n / (mag / 2)) * (mag / 2)
  })
}

export default function Settings() {
  const { user, updateProfile, logout } = useAuth()
  const { place } = usePlace()
  const { language } = useI18n()
  const navigate = useNavigate()
  const market = marketFor(place.countryCode)
  const steps = priceSteps(market)
  const money = n => formatMoneyCompact(n, market.currency, language)
  // A saved value from another market will not sit on this market's ladder, so
  // keep it in the list rather than silently snapping to the first option.
  const withSaved = (n) => [...new Set([...steps, ...(Number.isFinite(n) && n > 0 ? [n] : [])])].sort((a, b) => a - b)
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')
  const [saved, setSaved] = useState(false)

  const prefs = user?.preferences || {}
  const [notifications, setNotifications] = useState(prefs.notifications ?? true)
  const [priceMin, setPriceMin] = useState(prefs.priceMin ?? 0)
  const [priceMax, setPriceMax] = useState(prefs.priceMax ?? 5000000)
  const [propertyType, setPropertyType] = useState(prefs.propertyType ?? 'all')

  async function handleSave(e) {
    e.preventDefault()
    await updateProfile({
      name: name.trim(),
      email: email.trim(),
      preferences: { notifications, priceMin, priceMax, propertyType }
    })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <div className="page">
      <div className="settings-container fade-up">
        <h1>Settings</h1>
        <p className="subtitle" style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
          Manage your profile and preferences
        </p>

        <form onSubmit={handleSave}>
          <div className="settings-section">
            <h3 className="section-label">Profile</h3>
            <div className="settings-avatar">
              <div className="avatar-circle">
                {name.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="settings-fields">
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="settings-section">
            <h3 className="section-label">Notifications</h3>
            <div className="settings-toggle-row">
              <span>New listing alerts</span>
              <button
                type="button"
                className={`toggle ${notifications ? 'active' : ''}`}
                onClick={() => setNotifications(!notifications)}
              />
            </div>
          </div>

          <div className="settings-section">
            <h3 className="section-label">Search Preferences</h3>
            <div className="settings-fields">
              <div className="settings-fields-row">
                <div className="input-group">
                  <label htmlFor="priceMin">Min Price</label>
                  <select id="priceMin" value={priceMin} onChange={e => setPriceMin(Number(e.target.value))}>
                    <option value={0}>No min</option>
                    {withSaved(priceMin).map(n => <option key={n} value={n}>{money(n)}</option>)}
                  </select>
                </div>
                <div className="input-group">
                  <label htmlFor="priceMax">Max Price</label>
                  <select id="priceMax" value={priceMax} onChange={e => setPriceMax(Number(e.target.value))}>
                    {withSaved(priceMax).map(n => <option key={n} value={n}>{money(n)}</option>)}
                    <option value={Infinity}>No max</option>
                  </select>
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="propertyType">Property Type</label>
                <select id="propertyType" value={propertyType} onChange={e => setPropertyType(e.target.value)}>
                  <option value="all">All types</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                </select>
              </div>
            </div>
          </div>

          <div className="settings-actions">
            <button type="submit" className="btn btn-primary">
              {saved ? 'Saved' : 'Save changes'}
            </button>
            <button type="button" className="btn btn-danger" onClick={handleLogout}>
              Sign out
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
