import { useMemo } from 'react'
import listings from '../data/mock-listings.js'

export default function useListings(filters) {
  const filtered = useMemo(() => {
    if (!filters) return listings

    let result = listings.filter(l => {
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

      if (filters.baths !== 'any') {
        const minBaths = parseInt(filters.baths, 10)
        if (filters.baths === '4') {
          if (l.baths < 4) return false
        } else {
          if (l.baths !== minBaths) return false
        }
      }

      if (filters.type !== 'any' && l.type !== filters.type) return false
      if (filters.city !== 'any' && l.city !== filters.city) return false

      if (filters.search) {
        const q = filters.search.toLowerCase()
        const haystack = `${l.address} ${l.city} ${l.description || ''}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }

      return true
    })

    switch (filters.sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result.sort((a, b) => a.daysOnMarket - b.daysOnMarket)
        break
      case 'sqft':
        result.sort((a, b) => b.sqft - a.sqft)
        break
      default:
        break
    }

    return result
  }, [filters])

  return filtered
}
