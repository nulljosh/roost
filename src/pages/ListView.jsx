import React from 'react'
import ListingCard from '../components/ListingCard.jsx'
import FilterBar from '../components/FilterBar.jsx'
import useListings from '../hooks/useListings.js'
import useFilters from '../hooks/useFilters.js'

export default function ListView() {
  const { filters, updateFilter, resetFilters } = useFilters()
  const listings = useListings(filters)

  return (
    <div className="list-view">
      <aside className="list-sidebar">
        <FilterBar filters={filters} onFilterChange={updateFilter} onReset={resetFilters} />
      </aside>
      <div className="list-main">
        <div className="list-header">
          <h1 className="list-title">BC Listings</h1>
          <span className="result-count">{listings.length} results</span>
        </div>
        {listings.length === 0 ? (
          <div className="list-empty">
            <p>No listings match your filters.</p>
            <button className="filter-reset" onClick={resetFilters}>Clear filters</button>
          </div>
        ) : (
          <div className="listing-grid">
            {listings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
