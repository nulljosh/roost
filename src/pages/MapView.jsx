import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import MapMarker from '../components/MapMarker.jsx'
import FilterBar from '../components/FilterBar.jsx'
import useListings from '../hooks/useListings.js'
import useFilters from '../hooks/useFilters.js'

const BC_CENTER = [49.2827, -123.1207]
const BC_ZOOM = 7

export default function MapView() {
  const { filters, updateFilter, resetFilters } = useFilters()
  const listings = useListings(filters)

  return (
    <div className="map-view">
      <div className="map-filters-bar">
        <FilterBar filters={filters} onFilterChange={updateFilter} onReset={resetFilters} horizontal />
        <span className="result-count">{listings.length} listings</span>
      </div>
      <div className="map-container">
        <MapContainer
          center={BC_CENTER}
          zoom={BC_ZOOM}
          style={{ height: '100%', width: '100%' }}
          zoomControl={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          {listings.map(listing => (
            <MapMarker key={listing.id} listing={listing} />
          ))}
        </MapContainer>
        <div className="map-glow" />
      </div>
    </div>
  )
}
