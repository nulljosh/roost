import React from 'react'
import ListingCard from '../components/ListingCard.jsx'
import FilterBar from '../components/FilterBar.jsx'
import SortDropdown from '../components/SortDropdown.jsx'
import useListings from '../hooks/useListings.js'
import useFilters from '../hooks/useFilters.js'
import useFavorites from '../hooks/useFavorites.js'

export default function ListView() {
  const { filters, updateFilter, resetFilters } = useFilters()
  const listings = useListings(filters)
  const { isFavorite, toggle } = useFavorites()

  return (
    <div className="list-view">
      <div className="list-toolbar">
        <FilterBar filters={filters} onFilterChange={updateFilter} onReset={resetFilters} horizontal />
      </div>
      <div className="list-main">
        <div className="list-header">
          <h1 className="list-title">BC Listings</h1>
          <div className="list-header-right">
            <span className="result-count">{listings.length} results</span>
            <SortDropdown value={filters.sort} onChange={v => updateFilter('sort', v)} />
          </div>
        </div>
        {listings.length === 0 ? (
          <div className="list-empty">
            <p>No listings match your filters.</p>
            <button className="filter-reset" onClick={resetFilters}>Clear filters</button>
          </div>
        ) : (
          <div className="listing-grid">
            {listings.map(listing => (
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
    </div>
  )
}
