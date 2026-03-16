import { useState, useCallback } from 'react'

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

export default function useFilters() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS)

  const updateFilter = useCallback((key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }, [])

  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS)
  }, [])

  return { filters, updateFilter, resetFilters, DEFAULT_FILTERS }
}
