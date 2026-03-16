import { useMemo } from 'react'
import listings from '../data/mock-listings.js'

export default function useListings(filters) {
  const filtered = useMemo(() => {
    if (!filters) return listings

    return listings.filter(l => {
      if (l.price < filters.minPrice) return false
      if (l.price > filters.maxPrice) return false
      if (filters.beds !== 'any') {
        const minBeds = parseInt(filters.beds, 10)
        if (filters.beds === '5') {
          if (l.beds < 5) return false
        } else {
          if (l.beds !== minBeds) return false
        }
      }
      if (filters.type !== 'any' && l.type !== filters.type) return false
      if (filters.city !== 'any' && l.city !== filters.city) return false
      return true
    })
  }, [filters])

  return filtered
}
