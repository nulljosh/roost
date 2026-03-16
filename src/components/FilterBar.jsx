import React from 'react'
import listings from '../data/mock-listings.js'

const CITIES = [...new Set(listings.map(l => l.city))].sort()
const TYPES = ['House', 'Condo', 'Townhouse']
const BEDS = ['1', '2', '3', '4', '5']
const BATHS = ['1', '2', '3', '4']

function formatPriceLabel(val) {
  if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`
  if (val >= 1000) return `$${Math.round(val / 1000)}K`
  return `$${val}`
}

export default function FilterBar({ filters, onFilterChange, onReset, horizontal }) {
  if (horizontal) {
    return (
      <div className="filter-bar filter-bar--horizontal">
        <div className="filter-chips">
          <span className="filter-chip-label">Beds</span>
          <button
            className={`filter-chip${filters.beds === 'any' ? ' filter-chip--active' : ''}`}
            onClick={() => onFilterChange('beds', 'any')}
          >Any</button>
          {BEDS.map(b => (
            <button
              key={b}
              className={`filter-chip${filters.beds === b ? ' filter-chip--active' : ''}`}
              onClick={() => onFilterChange('beds', b)}
            >{b === '5' ? '5+' : b}</button>
          ))}
        </div>

        <div className="filter-chips">
          <span className="filter-chip-label">Baths</span>
          <button
            className={`filter-chip${filters.baths === 'any' ? ' filter-chip--active' : ''}`}
            onClick={() => onFilterChange('baths', 'any')}
          >Any</button>
          {BATHS.map(b => (
            <button
              key={b}
              className={`filter-chip${filters.baths === b ? ' filter-chip--active' : ''}`}
              onClick={() => onFilterChange('baths', b)}
            >{b === '4' ? '4+' : b}</button>
          ))}
        </div>

        <div className="filter-chips">
          <span className="filter-chip-label">Type</span>
          <button
            className={`filter-chip${filters.type === 'any' ? ' filter-chip--active' : ''}`}
            onClick={() => onFilterChange('type', 'any')}
          >Any</button>
          {TYPES.map(t => (
            <button
              key={t}
              className={`filter-chip${filters.type === t ? ' filter-chip--active' : ''}`}
              onClick={() => onFilterChange('type', t)}
            >{t}</button>
          ))}
        </div>

        <select
          className="filter-select filter-select--inline"
          value={filters.city}
          onChange={e => onFilterChange('city', e.target.value)}
        >
          <option value="any">All Cities</option>
          {CITIES.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <button className="filter-reset filter-reset--inline" onClick={onReset}>
          Reset
        </button>
      </div>
    )
  }

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label className="filter-label">Price Range</label>
        <div className="filter-price-row">
          <div className="filter-price-field">
            <span className="filter-price-prefix">Min</span>
            <input
              type="number"
              className="filter-input filter-input--price"
              value={filters.minPrice}
              min={0}
              max={filters.maxPrice}
              step={50000}
              onChange={e => onFilterChange('minPrice', Number(e.target.value))}
              placeholder="0"
            />
          </div>
          <span className="filter-price-sep">--</span>
          <div className="filter-price-field">
            <span className="filter-price-prefix">Max</span>
            <input
              type="number"
              className="filter-input filter-input--price"
              value={filters.maxPrice}
              min={filters.minPrice}
              step={50000}
              onChange={e => onFilterChange('maxPrice', Number(e.target.value))}
              placeholder="5000000"
            />
          </div>
        </div>
        <div className="filter-price-labels">
          <span>{formatPriceLabel(filters.minPrice)}</span>
          <span>{formatPriceLabel(filters.maxPrice)}</span>
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-label">Bedrooms</label>
        <div className="filter-chips">
          <button
            className={`filter-chip${filters.beds === 'any' ? ' filter-chip--active' : ''}`}
            onClick={() => onFilterChange('beds', 'any')}
          >Any</button>
          {BEDS.map(b => (
            <button
              key={b}
              className={`filter-chip${filters.beds === b ? ' filter-chip--active' : ''}`}
              onClick={() => onFilterChange('beds', b)}
            >{b === '5' ? '5+' : b}</button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-label">Bathrooms</label>
        <div className="filter-chips">
          <button
            className={`filter-chip${filters.baths === 'any' ? ' filter-chip--active' : ''}`}
            onClick={() => onFilterChange('baths', 'any')}
          >Any</button>
          {BATHS.map(b => (
            <button
              key={b}
              className={`filter-chip${filters.baths === b ? ' filter-chip--active' : ''}`}
              onClick={() => onFilterChange('baths', b)}
            >{b === '4' ? '4+' : b}</button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-label">Property Type</label>
        <div className="filter-chips">
          <button
            className={`filter-chip${filters.type === 'any' ? ' filter-chip--active' : ''}`}
            onClick={() => onFilterChange('type', 'any')}
          >Any</button>
          {TYPES.map(t => (
            <button
              key={t}
              className={`filter-chip${filters.type === t ? ' filter-chip--active' : ''}`}
              onClick={() => onFilterChange('type', t)}
            >{t}</button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-label">City</label>
        <select
          className="filter-select"
          value={filters.city}
          onChange={e => onFilterChange('city', e.target.value)}
        >
          <option value="any">All Cities</option>
          {CITIES.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <button className="filter-reset" onClick={onReset}>
        Reset Filters
      </button>
    </div>
  )
}
