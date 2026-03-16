import React from 'react'
import { Link } from 'react-router-dom'

function formatPrice(price) {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0
  }).format(price)
}

export default function ListingCard({ listing }) {
  return (
    <Link to={`/listing/${listing.id}`} className="listing-card">
      <div className="listing-card__image-wrap">
        <img
          src={listing.imageUrl}
          alt={listing.address}
          className="listing-card__image"
          loading="lazy"
        />
        <span className="listing-card__type">{listing.type}</span>
      </div>
      <div className="listing-card__body">
        <div className="listing-card__price">{formatPrice(listing.price)}</div>
        <div className="listing-card__address">{listing.address}</div>
        <div className="listing-card__city">{listing.city}, BC</div>
        <div className="listing-card__meta">
          <span>{listing.beds} bd</span>
          <span className="meta-dot">·</span>
          <span>{listing.baths} ba</span>
          <span className="meta-dot">·</span>
          <span>{listing.sqft.toLocaleString()} sqft</span>
        </div>
      </div>
    </Link>
  )
}
