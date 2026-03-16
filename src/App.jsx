import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import MapView from './pages/MapView.jsx'
import ListView from './pages/ListView.jsx'
import ListingDetail from './pages/ListingDetail.jsx'
import Favorites from './pages/Favorites.jsx'
import useFavorites from './hooks/useFavorites.js'
import useFilters from './hooks/useFilters.js'

export default function App() {
  const { count } = useFavorites()
  const { filters, updateFilter } = useFilters()

  return (
    <div className="app">
      <Header
        search={filters.search}
        onSearchChange={v => updateFilter('search', v)}
        favoritesCount={count}
      />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<MapView />} />
          <Route path="/list" element={<ListView />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  )
}
