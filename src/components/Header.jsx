import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="header-brand">
          <img src="/icon.svg" alt="Roost" className="header-logo" />
          <span className="header-wordmark">Roost</span>
        </NavLink>
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
        </nav>
      </div>
    </header>
  )
}
