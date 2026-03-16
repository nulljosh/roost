import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import listings from '../data/mock-listings.js'

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
    <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 26 14 26S28 23.333 28 14C28 6.268 21.732 0 14 0z" fill="#003366" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
    <circle cx="14" cy="14" r="5" fill="#e0e0e0"/>
  </svg>`,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
  popupAnchor: [0, -42]
})

export default function ListingDetail() {
  const { id } = useParams()
  const listing = listings.find(l => l.id === id)

  if (!listing) {
    return (
      <div className="detail-not-found">
        <h2>Listing not found</h2>
        <Link to="/list" className="back-link">← Back to listings</Link>
      </div>
    )
  }

  return (
    <div className="detail-view">
      <div className="detail-breadcrumb">
        <Link to="/list" className="back-link">← All Listings</Link>
      </div>

      <div className="detail-hero">
        <img src={listing.imageUrl} alt={listing.address} className="detail-hero-img" />
        <div className="detail-badge">{listing.type}</div>
      </div>

      <div className="detail-content">
        <div className="detail-main">
          <div className="detail-price">{formatPrice(listing.price)}</div>
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
          </div>

          <div className="detail-section">
            <h2 className="detail-section-title">About this property</h2>
            <p className="detail-description">{listing.description}</p>
          </div>

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
