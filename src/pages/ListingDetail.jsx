import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import listings from '../data/mock-listings.js'
import useFavorites from '../hooks/useFavorites.js'
import ListingCard from '../components/ListingCard.jsx'

function formatPrice(price) {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0
  }).format(price)
}

const pinIcon = L.divIcon({
  className: '',
  html: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 28 40">
    <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 26 14 26S28 23.333 28 14C28 6.268 21.732 0 14 0z" fill="#1a5a96" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
    <circle cx="14" cy="14" r="5" fill="#e8e4da"/>
  </svg>`,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
  popupAnchor: [0, -42]
})

export default function ListingDetail() {
  const { id } = useParams()
  const listing = listings.find(l => l.id === id)
  const { isFavorite, toggle } = useFavorites()
  const [lightboxIndex, setLightboxIndex] = useState(null)

  if (!listing) {
    return (
      <div className="detail-not-found">
        <h2>Listing not found</h2>
        <Link to="/list" className="back-link">Back to listings</Link>
      </div>
    )
  }

  const images = listing.images || []
  const similar = listings
    .filter(l => l.id !== listing.id && l.city === listing.city && l.type === listing.type)
    .slice(0, 3)

  return (
    <div className="detail-view">
      <div className="detail-breadcrumb">
        <Link to="/list" className="back-link">All Listings</Link>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-current">{listing.address}</span>
      </div>

      {/* Photo gallery grid */}
      {images.length > 0 && (
        <div className={`detail-gallery detail-gallery--${Math.min(images.length, 4)}`}>
          {images.slice(0, 4).map((img, i) => (
            <button
              key={i}
              className={`detail-gallery__item${i === 0 ? ' detail-gallery__item--main' : ''}`}
              onClick={() => setLightboxIndex(i)}
            >
              <img src={img} alt={`${listing.address} photo ${i + 1}`} />
            </button>
          ))}
          {images.length > 4 && (
            <button className="detail-gallery__more" onClick={() => setLightboxIndex(4)}>
              +{images.length - 4} photos
            </button>
          )}
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox__close" onClick={() => setLightboxIndex(null)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <button
            className="lightbox__arrow lightbox__arrow--left"
            onClick={e => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + images.length) % images.length) }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <img
            src={images[lightboxIndex]}
            alt={`${listing.address} photo ${lightboxIndex + 1}`}
            className="lightbox__img"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="lightbox__arrow lightbox__arrow--right"
            onClick={e => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % images.length) }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 6 15 12 9 18" /></svg>
          </button>
          <div className="lightbox__counter">{lightboxIndex + 1} / {images.length}</div>
        </div>
      )}

      <div className="detail-content">
        <div className="detail-main">
          <div className="detail-price-row">
            <div className="detail-price">{formatPrice(listing.price)}</div>
            <button
              className={`detail-fav${isFavorite(listing.id) ? ' detail-fav--active' : ''}`}
              onClick={() => toggle(listing.id)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorite(listing.id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {isFavorite(listing.id) ? 'Saved' : 'Save'}
            </button>
          </div>
          <h1 className="detail-address">{listing.address}</h1>
          <div className="detail-city">{listing.city}, BC</div>

          <div className="detail-stats">
            <div className="stat-box">
              <span className="stat-value">{listing.beds}</span>
              <span className="stat-label">Bedrooms</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">{listing.baths}</span>
              <span className="stat-label">Bathrooms</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">{listing.sqft.toLocaleString()}</span>
              <span className="stat-label">Sq Ft</span>
            </div>
            {listing.pricePerSqft && (
              <div className="stat-box">
                <span className="stat-value">${listing.pricePerSqft}</span>
                <span className="stat-label">Per Sqft</span>
              </div>
            )}
          </div>

          {/* Home Facts */}
          <div className="detail-section">
            <h2 className="detail-section-title">Home Facts</h2>
            <div className="facts-grid">
              {listing.yearBuilt && (
                <div className="fact-item">
                  <span className="fact-label">Year Built</span>
                  <span className="fact-value">{listing.yearBuilt}</span>
                </div>
              )}
              {listing.lotSize && (
                <div className="fact-item">
                  <span className="fact-label">Lot Size</span>
                  <span className="fact-value">{listing.lotSize.toLocaleString()} sqft</span>
                </div>
              )}
              {listing.parking != null && (
                <div className="fact-item">
                  <span className="fact-label">Parking</span>
                  <span className="fact-value">{listing.parking} {listing.parking === 1 ? 'space' : 'spaces'}</span>
                </div>
              )}
              <div className="fact-item">
                <span className="fact-label">Property Type</span>
                <span className="fact-value">{listing.type}</span>
              </div>
              {listing.daysOnMarket != null && (
                <div className="fact-item">
                  <span className="fact-label">Days on Market</span>
                  <span className="fact-value">{listing.daysOnMarket}</span>
                </div>
              )}
              {listing.mlsNumber && (
                <div className="fact-item">
                  <span className="fact-label">MLS#</span>
                  <span className="fact-value">{listing.mlsNumber}</span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="detail-section">
            <h2 className="detail-section-title">About this property</h2>
            <p className="detail-description">{listing.description}</p>
          </div>

          {/* Features */}
          {listing.features && listing.features.length > 0 && (
            <div className="detail-section">
              <h2 className="detail-section-title">Features</h2>
              <div className="features-tags">
                {listing.features.map((f, i) => (
                  <span key={i} className="feature-tag">{f}</span>
                ))}
              </div>
            </div>
          )}

          {/* Price History */}
          {listing.priceHistory && listing.priceHistory.length > 0 && (
            <div className="detail-section">
              <h2 className="detail-section-title">Price History</h2>
              <table className="price-history-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Event</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {listing.priceHistory.map((ph, i) => (
                    <tr key={i}>
                      <td>{ph.date}</td>
                      <td>{ph.event}</td>
                      <td>{formatPrice(ph.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Location */}
          <div className="detail-section">
            <h2 className="detail-section-title">Location</h2>
            <div className="detail-map">
              <MapContainer
                center={[listing.lat, listing.lng]}
                zoom={14}
                style={{ height: '320px', width: '100%', borderRadius: '8px' }}
                zoomControl={true}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                <Marker position={[listing.lat, listing.lng]} icon={pinIcon}>
                  <Popup>{listing.address}</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          {/* Similar Homes */}
          {similar.length > 0 && (
            <div className="detail-section">
              <h2 className="detail-section-title">Similar Homes</h2>
              <div className="similar-grid">
                {similar.map(s => (
                  <ListingCard
                    key={s.id}
                    listing={s}
                    isFavorite={isFavorite(s.id)}
                    onToggleFavorite={toggle}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="detail-sidebar">
          <div className="contact-card">
            <div className="contact-card__title">Interested in this property?</div>
            <p className="contact-card__text">
              Get in touch with a local agent to book a showing or request more information.
            </p>
            <button className="contact-card__cta">Request Showing</button>
            <button className="contact-card__secondary">Send Message</button>
          </div>
        </aside>
      </div>
    </div>
  )
}
