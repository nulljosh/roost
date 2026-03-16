import React from 'react'
import { Link } from 'react-router-dom'
import ImageCarousel from './ImageCarousel.jsx'

function formatPrice(price) {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0
  }).format(price)
}

export default function ListingCard({ listing, isFavorite, onToggleFavorite }) {
  function handleFavorite(e) {
    e.preventDefault()
    e.stopPropagation()
    onToggleFavorite && onToggleFavorite(listing.id)
  }

  return (
    <Link to={`/listing/${listing.id}`} className="listing-card">
      <div className="listing-card__image-wrap">
        <ImageCarousel
          images={listing.images}
          alt={listing.address}
        />
        <span className="listing-card__type">{listing.type}</span>
        <button
          className={`listing-card__fav${isFavorite ? ' listing-card__fav--active' : ''}`}
          onClick={handleFavorite}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        {listing.daysOnMarket <= 7 && (
          <span className="listing-card__badge">New</span>
        )}
      </div>
      <div className="listing-card__body">
        <div className="listing-card__price">{formatPrice(listing.price)}</div>
        <div className="listing-card__address">{listing.address}</div>
        <div className="listing-card__city">{listing.city}, BC</div>
        <div className="listing-card__meta">
          <span>{listing.beds} bd</span>
          <span className="meta-dot">&middot;</span>
          <span>{listing.baths} ba</span>
          <span className="meta-dot">&middot;</span>
          <span>{listing.sqft.toLocaleString()} sqft</span>
          {listing.pricePerSqft && (
            <>
              <span className="meta-dot">&middot;</span>
              <span>${listing.pricePerSqft}/sqft</span>
            </>
          )}
        </div>
        {listing.daysOnMarket != null && (
          <div className="listing-card__days">{listing.daysOnMarket}d on market</div>
        )}
      </div>
    </Link>
  )
}
