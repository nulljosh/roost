![roost](icon.svg)

# roost

![version](https://img.shields.io/badge/version-v1.0.0-blue)

BC real estate listings PWA. Interactive Leaflet map with price pill markers, filterable list/grid views, photo galleries, favorites, and detailed listing pages. Dark Editorial design with BC gov blue accents, Fraunces + DM Sans typography.

## Stack

- React 18 + Vite
- Leaflet / react-leaflet for interactive maps
- react-router-dom for routing
- vite-plugin-pwa for offline support

## Features

- 50 mock BC listings with enriched data (images, price history, features, MLS)
- Photo carousels with swipe support on mobile
- Lightbox gallery on detail pages
- Favorites system (localStorage-backed)
- Search by address/city
- Filter by beds, baths, property type, city, price range
- Sort by price, newest, square footage
- Price pill map markers (Zillow-style)
- Home facts grid, price history table, feature tags
- Similar homes recommendations (scored by city, type, price, beds)
- Responsive mobile-first layout with horizontal filter chips

## Development

```bash
npm install
npm run dev      # dev server
npm run build    # production build
npm run preview  # preview production build
```

## Routes

- `/` -- Map view with price pill markers and horizontal filters
- `/list` -- Filterable, sortable grid of listing cards
- `/listing/:id` -- Detail page with gallery, facts, history, similar homes
- `/favorites` -- Saved listings

## License

MIT 2026, Joshua Trommel
