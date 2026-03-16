import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import MapView from './pages/MapView.jsx'
import ListView from './pages/ListView.jsx'
import ListingDetail from './pages/ListingDetail.jsx'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<MapView />} />
          <Route path="/list" element={<ListView />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
        </Routes>
      </main>
    </div>
  )
}
