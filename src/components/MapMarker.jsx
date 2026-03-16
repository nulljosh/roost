import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import L from 'leaflet'

function formatPrice(price) {
  if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`
  return `$${Math.round(price / 1000)}K`
}

function createPillIcon(price) {
  const label = formatPrice(price)
  const w = Math.max(56, label.length * 9 + 16)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="30" viewBox="0 0 ${w} 30">
    <rect rx="15" ry="15" width="${w}" height="26" fill="#1a5a96"/>
    <polygon points="${w/2-4},26 ${w/2+4},26 ${w/2},30" fill="#1a5a96"/>
    <text x="${w/2}" y="17" font-family="'DM Sans',system-ui,sans-serif" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">${label}</text>
  </svg>`

  return L.divIcon({
    className: 'roost-pill-marker',
    html: svg,
    iconSize: [w, 30],
    iconAnchor: [w / 2, 30],
    popupAnchor: [0, -32]
  })
}

export default function MapMarker({ listing }) {
  const navigate = useNavigate()

  return (
    <Marker
      position={[listing.lat, listing.lng]}
      icon={createPillIcon(listing.price)}
    >
      <Popup className="roost-popup">
        <div className="popup-inner">
          <img src={listing.images?.[0] || listing.imageUrl} alt={listing.address} className="popup-img" />
          <div className="popup-body">
            <div className="popup-price">
              {new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(listing.price)}
            </div>
            <div className="popup-address">{listing.address}</div>
            <div className="popup-city">{listing.city}</div>
            <div className="popup-meta">
              {listing.beds} bd &middot; {listing.baths} ba &middot; {listing.sqft.toLocaleString()} sqft
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
