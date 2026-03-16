import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import { FiltersProvider } from './context/FiltersContext.jsx'
import Header from './components/Header.jsx'
import MapView from './pages/MapView.jsx'
import ListView from './pages/ListView.jsx'
import ListingDetail from './pages/ListingDetail.jsx'
import Favorites from './pages/Favorites.jsx'

export default function App() {
  return (
    <FavoritesProvider>
      <FiltersProvider>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<MapView />} />
              <Route path="/list" element={<ListView />} />
              <Route path="/listing/:id" element={<ListingDetail />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </main>
        </div>
      </FiltersProvider>
    </FavoritesProvider>
  )
}
