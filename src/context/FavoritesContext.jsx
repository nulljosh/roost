import React, { createContext, useContext, useState, useCallback } from 'react'

const STORAGE_KEY = 'roost-favorites'
const FavoritesContext = createContext(null)

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

export function FavoritesProvider({ children }) {
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

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggle, isFavorite, count: favoriteIds.length }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider')
  return ctx
}
