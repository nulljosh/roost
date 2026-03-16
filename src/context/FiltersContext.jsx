import React, { createContext, useContext, useState, useCallback } from 'react'

const DEFAULT_FILTERS = {
  minPrice: 0,
  maxPrice: 5000000,
  beds: 'any',
  baths: 'any',
  type: 'any',
  city: 'any',
  sort: 'newest',
  search: ''
}

const FiltersContext = createContext(null)

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState(DEFAULT_FILTERS)

  const updateFilter = useCallback((key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }, [])

  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS)
  }, [])

  return (
    <FiltersContext.Provider value={{ filters, updateFilter, resetFilters, DEFAULT_FILTERS }}>
      {children}
    </FiltersContext.Provider>
  )
}

export default function useFilters() {
  const ctx = useContext(FiltersContext)
  if (!ctx) throw new Error('useFilters must be used within FiltersProvider')
  return ctx
}
