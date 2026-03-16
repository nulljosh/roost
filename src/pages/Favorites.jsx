import React from 'react'
import { Link } from 'react-router-dom'
import ListingCard from '../components/ListingCard.jsx'
import useFavorites from '../hooks/useFavorites.js'
import listings from '../data/mock-listings.js'

export default function Favorites() {
  const { favoriteIds, isFavorite, toggle } = useFavorites()
  const saved = listings.filter(l => favoriteIds.includes(l.id))

  return (
    <div className="favorites-view">
      <div className="favorites-header">
        <h1 className="list-title">Saved Homes</h1>
        <span className="result-count">{saved.length} saved</span>
      </div>
      {saved.length === 0 ? (
        <div className="list-empty">
          <p>No saved listings yet. Tap the heart on any listing to save it.</p>
          <Link to="/list" className="filter-reset" style={{ display: 'inline-block' }}>Browse listings</Link>
        </div>
      ) : (
        <div className="listing-grid">
          {saved.map(listing => (
            <ListingCard
              key={listing.id}
              listing={listing}
              isFavorite={isFavorite(listing.id)}
              onToggleFavorite={toggle}
            />
          ))}
        </div>
      )}
    </div>
  )
}
