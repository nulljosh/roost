![roost](icon.svg)

# roost

![version](https://img.shields.io/badge/version-v0.1.0-blue)

BC real estate listings PWA for British Columbia. Interactive Leaflet map with clustered pins, filterable list/grid views, and detailed listing pages. Dark Editorial design with BC gov blue accents.

## Stack

- React 18 + Vite
- Leaflet / react-leaflet for interactive maps
- react-router-dom for routing
- vite-plugin-pwa for offline support

## Development

```bash
npm install
npm run dev      # dev server
npm run build    # production build
npm run preview  # preview production build
```

## Routes

- `/` -- Map view with clustered listing pins
- `/list` -- Filterable grid of listing cards
- `/listing/:id` -- Full listing detail page

## License

MIT 2026, Joshua Trommel
