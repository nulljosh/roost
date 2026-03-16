# roost -- Agent Notes

BC real estate listings PWA. React + Vite + Leaflet, Dark Editorial design (BC gov blue variant).

## Overview
Real estate listing browser for British Columbia. 50 mock listings with enriched data. Map view with price pill markers, list view with photo carousels, detail pages with gallery/lightbox, favorites, search, sort.

## Architecture
- **Context providers** (`src/context/`): `FavoritesContext` (localStorage-backed), `FiltersContext` (shared search/filter/sort state). Both wrapped at App level so state is shared across all routes and the header.
- **Hooks** (`src/hooks/`): `useFavorites.js` and `useFilters.js` re-export from context. `useListings.js` applies filters/search/sort to mock data.
- **Components**: `Header` (search bar, nav, favorites badge), `FilterBar` (vertical or horizontal chip layout), `ListingCard` (carousel, favorite heart, enriched meta), `MapMarker` (price pill SVG), `ImageCarousel` (arrows, dots, swipe), `SortDropdown`.
- **Pages**: `MapView`, `ListView`, `ListingDetail` (gallery grid, lightbox, facts, price history, features, similar homes, contact card), `Favorites`.

## Stack
- React 18 + Vite
- Leaflet / react-leaflet
- Dark Editorial: navy `#0c1220`, BC gov blue `#1a5a96`/`#2472b2`/`#4e9cd7`, Fraunces serif + DM Sans, noise texture, spring physics

## Quick Commands
- npm run dev -- start dev server
- npm run build -- production build
