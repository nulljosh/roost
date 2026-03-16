import { useState, useCallback } from 'react'

const STORAGE_KEY = 'roost-favorites'

function loadFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveFavorites(ids) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
}

export default function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState(loadFavorites)

  const toggle = useCallback((id) => {
    setFavoriteIds(prev => {
      const next = prev.includes(id)
        ? prev.filter(fid => fid !== id)
        : [...prev, id]
      saveFavorites(next)
      return next
    })
  }, [])

  const isFavorite = useCallback((id) => {
    return favoriteIds.includes(id)
  }, [favoriteIds])

  return { favoriteIds, toggle, isFavorite, count: favoriteIds.length }
}
