import React from 'react'
import { NavLink } from 'react-router-dom'
import useFavorites from '../hooks/useFavorites.js'
import useFilters from '../hooks/useFilters.js'

export default function Header() {
  const { count } = useFavorites()
  const { filters, updateFilter } = useFilters()

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="header-brand">
          <img src="/icon.svg" alt="Roost" className="header-logo" />
          <span className="header-wordmark">Roost</span>
        </NavLink>

        <div className="header-search">
          <svg className="header-search__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="header-search__input"
            placeholder="Search address, city..."
            value={filters.search}
            onChange={e => updateFilter('search', e.target.value)}
          />
        </div>

        <nav className="header-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
          >
            Map
          </NavLink>
          <NavLink
            to="/list"
            className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
          >
            List
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) => `nav-link nav-link--favorites${isActive ? ' nav-link--active' : ''}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {count > 0 && (
              <span className="favorites-badge">{count}</span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
