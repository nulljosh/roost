import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import L from 'leaflet'

function formatPrice(price) {
  if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`
  return `$${Math.round(price / 1000)}K`
}

// Custom dark pin icon
function createPinIcon(price) {
  const label = formatPrice(price)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="32" viewBox="0 0 80 32">
    <rect rx="6" ry="6" width="80" height="28" fill="#003366" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
    <polygon points="37,28 43,28 40,32" fill="#003366"/>
    <text x="40" y="18" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#e0e0e0" text-anchor="middle">${label}</text>
  </svg>`

  return L.divIcon({
    className: '',
    html: svg,
    iconSize: [80, 32],
    iconAnchor: [40, 32],
    popupAnchor: [0, -34]
  })
}

export default function MapMarker({ listing }) {
  const navigate = useNavigate()

  return (
    <Marker
      position={[listing.lat, listing.lng]}
      icon={createPinIcon(listing.price)}
    >
      <Popup className="roost-popup">
        <div className="popup-inner">
          <img src={listing.imageUrl} alt={listing.address} className="popup-img" />
          <div className="popup-body">
            <div className="popup-price">
              {new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(listing.price)}
            </div>
            <div className="popup-address">{listing.address}</div>
            <div className="popup-city">{listing.city}</div>
            <div className="popup-meta">
              {listing.beds} bd · {listing.baths} ba · {listing.sqft.toLocaleString()} sqft
            </div>
            <button className="popup-cta" onClick={() => navigate(`/listing/${listing.id}`)}>
              View Listing
            </button>
          </div>
        </div>
      </Popup>
    </Marker>
  )
}
